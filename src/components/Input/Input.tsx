import React from 'react';
import cx from 'classnames';

type Props = {
  id: string;
  label?: string;
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (event: any) => void;
  onKeyPress?: (event: any) => void;
  className?: string;
  autoFocus?: boolean;
};

class Input extends React.Component<Props> {
  render() {
    const {
      id, label, type, placeholder, value, className, autoFocus, onChange, onKeyPress,
    } = this.props;

    return (
      <React.Fragment>
        <div className={`${className ?? ''}`}>
          <label className="font-bold mb-2" htmlFor={id}>
            {label}
            <input
              className={cx(['appearance-none border-b input-field w-full leading-tight text-sm font-muli focus:shadow-none focus:outline-none', label && 'py-2'])}
              id={id}
              type={type}
              placeholder={placeholder ?? ''}
              value={value}
              onChange={onChange}
              onKeyPress={onKeyPress}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={autoFocus}
            />
          </label>
        </div>
      </React.Fragment>
    );
  }
}

export default Input;
