import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';
import proxyquire from 'proxyquire';
import test from 'ava';
import { QUEUE_GLOBAL_ALERT } from '../../src/core/actions';
import Events from '../../src/core/events';
import { settingsServer } from '../../src/core/actions/settings/Server';

const action = {
  type: Events.SETTINGS_SAVE_SERVER,
  payload: {
    context: 'test',
    original: { field: 'value' },
    changed: { field: 'value2' },
  },
};

const actionChanges = { test: { field: 'value2' } };

const actionNoChanges = {
  type: Events.SETTINGS_SAVE_SERVER,
  payload: {
    context: 'test',
    original: { field: 'value' },
    changed: { field: 'value' },
  },
};

const mockApi = {
  patchConfigSet: () => ({}),
  '@noCallThru': true,
};

const settingsSagas = proxyquire('../../src/core/sagas/settings', {
  '../api/common': mockApi,
});

test('settingsSaveServer', (t) => {
  const generatorNoChanges = cloneableGenerator(settingsSagas.default.saveServer)(actionNoChanges);
  t.deepEqual(undefined, generatorNoChanges.next().value, 'no changes does nothing');
  t.true(generatorNoChanges.next().done, 'should be done');

  const generator = cloneableGenerator(settingsSagas.default.saveServer)(action);
  const postData = settingsSagas.saveSettingsPatch(action.payload);
  const effectCall = call(mockApi.patchConfigSet, postData);
  t.deepEqual(effectCall, generator.next().value, 'call effect with Api.patchConfigSet');

  const cloneError = generator.clone();
  const responseError = { error: true, message: 'Test error' };
  const effectPutError = put({ type: QUEUE_GLOBAL_ALERT, payload: { type: 'error', text: responseError.message } });
  t.deepEqual(effectPutError, cloneError.next(responseError).value, 'put effect with error message');
  t.true(cloneError.next().done, 'should be done');

  const cloneSuccess = generator.clone();
  const responseSuccess = { data: 'Test data' };
  const effectPut = put(settingsServer(actionChanges));
  t.deepEqual(effectPut, cloneSuccess.next(responseSuccess).value, 'put effect with settingsServer');
  const effectSuccess = put({
    type: QUEUE_GLOBAL_ALERT,
    payload: { type: 'success', text: 'Settings saved!' },
  });
  t.deepEqual(effectSuccess, cloneSuccess.next().value, 'put effect with success message');
  t.true(cloneSuccess.next().done, 'should be done');
});
