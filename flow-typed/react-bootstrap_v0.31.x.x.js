declare var npm$namespace$ReactBootstrap: {
    createChainedFunctionType: typeof ReactBootstrap$createChainedFunctionType,
}
declare type ReactBootstrap$Sizes = xs |
    xsmall |
    sm |
    small |
    lg |
    large;


/**
 * ( eventKey:any, e:React.SyntheticEvent ):void 
 */
declare interface ReactBootstrap$SelectCallback {
    (eventKey: any, e: React.SyntheticEvent): void,

    /**
     * 
     * @deprecated  This signature is a hack so can still derive from HTMLProps.
    It does not reflect the underlying event and should not be used.
    */
    (e: React.MouseEvent): void
}

declare interface ReactBootstrap$TransitionCallbacks {
    onEnter?: Function,
        onEntered?: Function,
        onEntering?: Function,
        onExit?: Function,
        onExited?: Function,
        onExiting?: Function
}

declare type ReactBootstrap$AccordionProps = {
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    collapsible?: boolean,
    defaultExpanded?: boolean,
    eventKey?: any,
    expanded?: boolean,
    footer?: any,
    header?: any
}

declare type ReactBootstrap$Accordion = React.ClassicComponent<ReactBootstrap$AccordionProps, {}>;

declare var Accordion: React.ClassicComponentClass<ReactBootstrap$AccordionProps>;

declare type ReactBootstrap$BreadcrumbProps = {
    bsClass?: string
}

declare type ReactBootstrap$BreadcrumbClass = {
    Item: typeof BreadcrumbItem
}

declare type ReactBootstrap$Breadcrumb = React.ClassicComponent<ReactBootstrap$BreadcrumbProps, {}>;

declare var Breadcrumb: ReactBootstrap$BreadcrumbClass;

declare type ReactBootstrap$BreadcrumbItemProps = {
    active?: boolean,
    id?: string | number,
    href?: string,
    title?: React.ReactNode,
    target?: string
}

declare type ReactBootstrap$BreadcrumbItem = React.ClassicComponent<ReactBootstrap$BreadcrumbItemProps, {}>;

declare var BreadcrumbItem: React.ClassicComponentClass<ReactBootstrap$BreadcrumbItemProps>;

declare type ReactBootstrap$ButtonProps = {
    active?: boolean,
    block?: boolean,
    bsStyle?: string,
    bsSize?: ReactBootstrap$Sizes,
    componentClass?: React.ReactType
}

declare type ReactBootstrap$Button = React.ClassicComponent<ReactBootstrap$ButtonProps, {}>;

declare var Button: React.ClassicComponentClass<ReactBootstrap$ButtonProps>;

declare type ReactBootstrap$ButtonToolbarProps = {
    block?: boolean,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    justified?: boolean,
    vertical?: boolean
}

declare type ReactBootstrap$ButtonToolbar = React.ClassicComponent<ReactBootstrap$ButtonToolbarProps, {}>;

declare var ButtonToolbar: React.ClassicComponentClass<ReactBootstrap$ButtonToolbarProps>;

declare type ReactBootstrap$ButtonGroupProps = {
    block?: boolean,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    justified?: boolean,
    vertical?: boolean
}

declare type ReactBootstrap$ButtonGroup = React.ClassicComponent<ReactBootstrap$ButtonGroupProps, {}>;

declare var ButtonGroup: React.ClassicComponentClass<ReactBootstrap$ButtonGroupProps>;

declare type ReactBootstrap$SafeAnchorProps = {
    href?: string,
    onClick?: React.MouseEventHandler,
    disabled?: boolean,
    role?: string,
    componentClass?: React.ReactType
}

declare type ReactBootstrap$SafeAnchor = React.ClassicComponent<ReactBootstrap$SafeAnchorProps, {}>;

declare var SafeAnchor: React.ClassicComponentClass<ReactBootstrap$SafeAnchorProps>;

declare type ReactBootstrap$CheckboxProps = {
    bsClass?: string,
    disabled?: boolean,
    inline?: boolean,
    inputRef?: (instance: HTMLInputElement) => void,
    validationState?: success | warning | error
}

declare class Checkbox mixins React.Component<ReactBootstrap$CheckboxProps, {}>{}

declare type ReactBootstrap$ClearfixProps = {
    componentClass?: React.ReactType,
    visibleXsBlock?: boolean,
    visibleSmBlock?: boolean,
    visibleMdBlock?: boolean,
    visibleLgBlock?: boolean
}

declare class Clearfix mixins React.Component<ReactBootstrap$ClearfixProps, {}>{}

declare type ReactBootstrap$CollapseProps = {
        dimension?: height | width | {
            (): string
        },
        getDimensionValue?: (dimension: number, element: React.ReactElement<any>) => number,
        in?: boolean,
        timeout?: number,
        transitionAppear?: boolean,
        unmountOnExit?: boolean
    } & ReactBootstrap$TransitionCallbacks &


    declare class Collapse mixins React.Component<ReactBootstrap$CollapseProps, {}>{}

declare interface ReactBootstrap$DropdownBaseProps {
    bsClass?: string,
        componentClass?: React.ReactType,
        disabled?: boolean,
        dropup?: boolean,
        id: string,
        onClose?: Function,
        onSelect?: ReactBootstrap$SelectCallback,
        onToggle?: (isOpen: boolean) => void,
        open?: boolean,
        pullRight?: boolean,
        role?: string
}

declare type ReactBootstrap$DropdownProps = ReactBootstrap$DropdownBaseProps & React.HTMLProps<ReactBootstrap$Dropdown>;

declare class Dropdown mixins React.Component<ReactBootstrap$DropdownProps, any>{
    Menu: typeof DropdownMenu;
    Toggle: typeof DropdownToggle
}

declare type ReactBootstrap$DropdownButtonBaseProps = {
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    navItem?: boolean,
    noCaret?: boolean,
    pullRight?: boolean
} & ReactBootstrap$DropdownBaseProps


declare type ReactBootstrap$DropdownButtonProps = ReactBootstrap$DropdownButtonBaseProps & React.HTMLProps<ReactBootstrap$DropdownButton>;

declare class DropdownButton mixins React.Component<ReactBootstrap$DropdownButtonProps, {}>{}

declare type ReactBootstrap$DropdownMenuProps = {
    labelledBy?: string | number,
    onClose?: Function,
    onSelect?: ReactBootstrap$SelectCallback,
    open?: boolean,
    pullRight?: boolean
}

declare class DropdownMenu mixins React.Component<ReactBootstrap$DropdownMenuProps, any>{}

declare type ReactBootstrap$DropdownToggleProps = {
    bsRole?: string,
    noCaret?: boolean,
    open?: boolean,
    title?: string,
    useAnchor?: boolean,
    bsClass?: string
}

declare class DropdownToggle mixins React.Component<ReactBootstrap$DropdownToggleProps, any>{}

declare type ReactBootstrap$FadeProps = { in?: boolean,
        timeout?: number,
        transitionAppear?: boolean,
        unmountOnExit?: boolean
    } & ReactBootstrap$TransitionCallbacks &


    declare class Fade mixins React.Component<ReactBootstrap$FadeProps, {}>{}

declare type ReactBootstrap$MenuItemProps = {
    active?: boolean,
    bsClass?: string,
    disabled?: boolean,
    divider?: boolean,
    eventKey?: any,
    header?: boolean,
    onClick?: React.MouseEventHandler,
    onSelect?: ReactBootstrap$SelectCallback,
    target?: string,
    title?: string
}

declare class MenuItem mixins React.Component<ReactBootstrap$MenuItemProps, {}>{}

declare type ReactBootstrap$PanelProps = {
        bsClass?: string,
        bsSize?: ReactBootstrap$Sizes,
        bsStyle?: string,
        collapsible?: boolean,
        defaultExpanded?: boolean,
        eventKey?: any,
        expanded?: boolean,
        footer?: React.ReactNode,
        header?: React.ReactNode,
        onSelect?: ReactBootstrap$SelectCallback
    } & ReactBootstrap$TransitionCallbacks &


    declare type ReactBootstrap$Panel = React.ClassicComponent<ReactBootstrap$PanelProps, {}>;

declare var Panel: React.ClassicComponentClass<ReactBootstrap$PanelProps>;

declare type ReactBootstrap$PanelGroupProps = {
    accordion?: boolean,
    activeKey?: any,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    defaultActiveKey?: any,
    onSelect?: ReactBootstrap$SelectCallback
}

declare type ReactBootstrap$PanelGroup = React.ClassicComponent<ReactBootstrap$PanelGroupProps, {}>;

declare var PanelGroup: React.ClassicComponentClass<ReactBootstrap$PanelGroupProps>;

declare type ReactBootstrap$SplitButtonProps = {
    bsStyle?: string,
    bsSize?: ReactBootstrap$Sizes,
    dropdownTitle?: any,
    dropup?: boolean,
    pullRight?: boolean
}

declare class SplitButton mixins React.Component<ReactBootstrap$SplitButtonProps, {}>{}

declare type ReactBootstrap$ModalDialogProps = {}

declare type ReactBootstrap$ModalDialog = React.ClassicComponent<ReactBootstrap$ModalDialogProps, {}>;

declare var ModalDialog: React.ClassicComponentClass<ReactBootstrap$ModalDialogProps>;

declare type ReactBootstrap$ModalHeaderProps = {
    closeButton?: boolean,
    modalClassName?: string,
    onHide?: Function
}

declare class ModalHeader mixins React.Component<ReactBootstrap$ModalHeaderProps, {}>{}

declare type ReactBootstrap$ModalTitleProps = {
    modalClassName?: string
}

declare class ModalTitle mixins React.Component<ReactBootstrap$ModalTitleProps, {}>{}

declare type ReactBootstrap$ModalBodyProps = {
    modalClassName?: string
}

declare class ModalBody mixins React.Component<ReactBootstrap$ModalBodyProps, {}>{}

declare type ReactBootstrap$ModalFooterProps = {
    modalClassName?: string
}

declare class ModalFooter mixins React.Component<ReactBootstrap$ModalFooterProps, {}>{}

declare type ReactBootstrap$ModalProps = {
    onHide: Function,
    animation?: boolean,
    backdrop?: boolean | string,
    bsSize?: ReactBootstrap$Sizes,
    container?: any,
    dialogClassName?: string,
    dialogComponent?: any,
    enforceFocus?: boolean,
    keyboard?: boolean,
    onEnter?: (node: HTMLElement) => any,
    onEntered?: (node: HTMLElement) => any,
    onEntering?: (node: HTMLElement) => any,
    onExit?: (node: HTMLElement) => any,
    onExited?: (node: HTMLElement) => any,
    onExiting?: (node: HTMLElement) => any,
    show?: boolean
}

declare type ReactBootstrap$ModalClass = {
    Body: typeof ModalBody,
    Header: typeof ModalHeader,
    Title: typeof ModalTitle,
    Footer: typeof ModalFooter,
    Dialog: typeof ModalDialog
}

declare type ReactBootstrap$Modal = React.ClassicComponent<ReactBootstrap$ModalProps, {}>;

declare var Modal: ReactBootstrap$ModalClass;

declare interface ReactBootstrap$OverlayTriggerProps {
    overlay: any,
        animation?: any,
        container?: any,
        containerPadding?: number,
        defaultOverlayShown?: boolean,
        delay?: number,
        delayHide?: number,
        delayShow?: number,
        onEnter?: Function,
        onEntered?: Function,
        onEntering?: Function,
        onExit?: Function,
        onExited?: Function,
        onExiting?: Function,
        placement?: string,
        rootClose?: boolean,
        trigger?: string | string[]
}

declare type ReactBootstrap$OverlayTrigger = React.ClassicComponent<ReactBootstrap$OverlayTriggerProps, {}>;

declare var OverlayTrigger: React.ClassicComponentClass<ReactBootstrap$OverlayTriggerProps>;

declare type ReactBootstrap$TooltipProps = {
    arrowOffsetLeft?: number | string,
    arrowOffsetTop?: number | string,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    placement?: string,
    positionLeft?: number,
    positionTop?: number
}

declare type ReactBootstrap$Tooltip = React.ClassicComponent<ReactBootstrap$TooltipProps, {}>;

declare var Tooltip: React.ClassicComponentClass<ReactBootstrap$TooltipProps>;

declare type ReactBootstrap$PopoverProps = {
    arrowOffsetLeft?: number | string,
    arrowOffsetTop?: number | string,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    placement?: string,
    positionLeft?: number | string,
    positionTop?: number | string
}

declare type ReactBootstrap$Popover = React.ClassicComponent<ReactBootstrap$PopoverProps, {}>;

declare var Popover: React.ClassicComponentClass<ReactBootstrap$PopoverProps>;

declare interface ReactBootstrap$OverlayProps {
    animation?: any,
        container?: any,
        containerPadding?: number,
        onEnter?: Function,
        onEntered?: Function,
        onEntering?: Function,
        onExit?: Function,
        onExited?: Function,
        onExiting?: Function,
        onHide?: Function,
        placement?: string,
        rootClose?: boolean,
        show?: boolean,
        target?: Function
}

declare class Overlay mixins React.Component<ReactBootstrap$OverlayProps, {}>{}

declare type ReactBootstrap$ProgressBarProps = {
    active?: boolean,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    interpolatedClass?: any,
    max?: number,
    min?: number,
    now?: number,
    srOnly?: boolean,
    striped?: boolean
}

declare class ProgressBar mixins React.Component<ReactBootstrap$ProgressBarProps, {}>{}

declare type ReactBootstrap$NavProps = {
    activeHref?: string,
    activeKey?: any,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    collapsible?: boolean,
    eventKey?: any,
    expanded?: boolean,
    justified?: boolean,
    navbar?: boolean,
    pullRight?: boolean,
    right?: boolean,
    stacked?: boolean,
    ulClassName?: string,
    ulId?: string
}

declare class Nav mixins React.Component<ReactBootstrap$NavProps, {}>{}

declare type ReactBootstrap$NavItemProps = {
    active?: boolean,
    brand?: any,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    componentClass?: React.ReactType,
    defaultNavExpanded?: boolean,
    eventKey?: any,
    fixedBottom?: boolean,
    fixedTop?: boolean,
    fluid?: boolean,
    inverse?: boolean,
    linkId?: string,
    navExpanded?: boolean,
    onSelect?: ReactBootstrap$SelectCallback,
    onToggle?: Function,
    staticTop?: boolean,
    toggleButton?: any,
    toggleNavKey?: string | number
}

declare type ReactBootstrap$NavItem = React.ClassicComponent<ReactBootstrap$NavItemProps, {}>;

declare var NavItem: React.ClassicComponentClass<ReactBootstrap$NavItemProps>;

declare type ReactBootstrap$NavbarBrandProps = {}

declare class NavbarBrand mixins React.Component<ReactBootstrap$NavbarBrandProps, {}>{}

declare interface ReactBootstrap$NavbarCollapseProps {}

declare type ReactBootstrap$NavbarCollapse = React.ClassicComponent<ReactBootstrap$NavbarCollapseProps, {}>;

declare var NavbarCollapse: React.ClassicComponentClass<ReactBootstrap$NavbarCollapseProps>;

declare type ReactBootstrap$NavbarHeaderProps = {}

declare type ReactBootstrap$NavbarHeader = React.ClassicComponent<ReactBootstrap$NavbarHeaderProps, {}>;

declare var NavbarHeader: React.ClassicComponentClass<ReactBootstrap$NavbarHeaderProps>;

declare interface ReactBootstrap$NavbarToggleProps {}

declare type ReactBootstrap$NavbarToggle = React.ClassicComponent<ReactBootstrap$NavbarToggleProps, {}>;

declare var NavbarToggle: React.ClassicComponentClass<ReactBootstrap$NavbarToggleProps>;

declare type ReactBootstrap$NavbarProps = {
    brand?: any,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    componentClass?: React.ReactType,
    defaultNavExpanded?: boolean,
    fixedBottom?: boolean,
    fixedTop?: boolean,
    fluid?: boolean,
    inverse?: boolean,
    navExpanded?: boolean,
    onToggle?: Function,
    staticTop?: boolean,
    toggleButton?: any,
    toggleNavKey?: string | number
}

declare type ReactBootstrap$NavbarClass = {
    Brand: typeof NavbarBrand,
    Collapse: typeof NavbarCollapse,
    Header: typeof NavbarHeader,
    Toggle: typeof NavbarToggle
}

declare type ReactBootstrap$Navbar = React.ClassicComponent<ReactBootstrap$NavbarProps, {}>;

declare var Navbar: ReactBootstrap$NavbarClass;

declare type ReactBootstrap$NavDropdownBaseProps = {
    active?: boolean,
    noCaret?: boolean
} & ReactBootstrap$DropdownBaseProps


declare type ReactBootstrap$NavDropdownProps = ReactBootstrap$NavDropdownBaseProps & React.HTMLProps<ReactBootstrap$NavDropdown>;

declare class NavDropdown mixins React.Component<ReactBootstrap$NavDropdownProps, {}>{}

declare type ReactBootstrap$TabsProps = {
    activeKey?: any,
    animation?: boolean,
    bsStyle?: string,
    defaultActiveKey?: any,
    onSelect?: ReactBootstrap$SelectCallback,
    paneWidth?: any,
    position?: string,
    tabWidth?: any,
    unmountOnExit?: boolean
}

declare type ReactBootstrap$Tabs = React.ClassicComponent<ReactBootstrap$TabsProps, {}>;

declare var Tabs: React.ClassicComponentClass<ReactBootstrap$TabsProps>;

declare type ReactBootstrap$TabProps = {
    animation?: boolean,
    eventKey?: any
}

declare type ReactBootstrap$TabClass = {
    Container: ReactBootstrap$TabContainer,
    Pane: ReactBootstrap$TabPane,
    Content: ReactBootstrap$TabClass
}

declare type ReactBootstrap$Tab = ReactBootstrap$TabClass;

declare var Tab: ReactBootstrap$TabClass;

declare type ReactBootstrap$TabContainerProps = {
    activeKey?: any,
    defaultActiveKey?: any,
    generateChildId?: (eventKey: any, type: any) => string
}

declare type ReactBootstrap$TabContainer = React.ClassicComponentClass<ReactBootstrap$TabContainerProps>;

declare type ReactBootstrap$TabPaneProps = {
    animation?: boolean | React.ComponentClass<any>,
    aria - labelledby?: string,
    bsClass?: string,
    eventKey?: any,
    onEnter?: Function,
    onEntered?: Function,
    onEntering?: Function,
    onExit?: Function,
    onExited?: Function,
    onExiting?: Function,
    unmountOnExit?: boolean
}

declare type ReactBootstrap$TabPane = React.ClassicComponentClass<ReactBootstrap$TabPaneProps>;

declare type ReactBootstrap$PagerProps = {
    onSelect?: ReactBootstrap$SelectCallback
}

declare type ReactBootstrap$PagerClass = {
    Item: typeof PageItem
}

declare type ReactBootstrap$Pager = React.ClassicComponent<ReactBootstrap$PagerProps, {}>;

declare var Pager: ReactBootstrap$PagerClass;

declare type ReactBootstrap$PageItemProps = {
    disabled?: boolean,
    eventKey?: any,
    next?: boolean,
    onSelect?: ReactBootstrap$SelectCallback,
    previous?: boolean,
    target?: string
}

declare type ReactBootstrap$PageItem = React.ClassicComponent<ReactBootstrap$PageItemProps, {}>;

declare var PageItem: React.ClassicComponentClass<ReactBootstrap$PageItemProps>;

declare type ReactBootstrap$PaginationProps = {
    activePage?: number,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    boundaryLinks?: boolean,
    buttonComponentClass?: React.ReactType,
    ellipsis?: React.ReactNode,
    first?: React.ReactNode,
    items?: number,
    last?: React.ReactNode,
    maxButtons?: number,
    next?: React.ReactNode,
    onSelect?: ReactBootstrap$SelectCallback,
    prev?: React.ReactNode
}

declare type ReactBootstrap$Pagination = React.ClassicComponent<ReactBootstrap$PaginationProps, {}>;

declare var Pagination: React.ClassicComponentClass<ReactBootstrap$PaginationProps>;

declare type ReactBootstrap$AlertProps = {
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    closeLabel?: string,

    /**
     * 
     * @deprecated  since v0.29.0 
     */
    dismissAfter?: number,
    onDismiss?: Function
}

declare type ReactBootstrap$Alert = React.ClassicComponent<ReactBootstrap$AlertProps, {}>;

declare var Alert: React.ClassicComponentClass<ReactBootstrap$AlertProps>;

declare type ReactBootstrap$CarouselProps = {
    activeIndex?: number,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    controls?: boolean,
    defaultActiveIndex?: number,
    direction?: string,
    indicators?: boolean,
    interval?: number,
    nextIcon?: React.ReactNode,
    onSelect?: ReactBootstrap$SelectCallback,
    onSlideEnd?: Function,
    pauseOnHover?: boolean,
    prevIcon?: React.ReactNode,
    slide?: boolean
}

declare type ReactBootstrap$CarouselClass = {
    Caption: typeof CarouselCaption,
    Item: typeof CarouselItem
}

declare type ReactBootstrap$Carousel = React.ClassicComponent<ReactBootstrap$CarouselProps, {}>;

declare var Carousel: ReactBootstrap$CarouselClass;

declare type ReactBootstrap$CarouselItemProps = {
    active?: boolean,
    animtateIn?: boolean,
    animateOut?: boolean,
    direction?: string,
    index?: number,
    onAnimateOutEnd?: Function
}

declare type ReactBootstrap$CarouselItem = React.ClassicComponent<ReactBootstrap$CarouselItemProps, {}>;

declare var CarouselItem: React.ClassicComponentClass<ReactBootstrap$CarouselItemProps>;

declare type ReactBootstrap$CarouselCaptionProps = {
    componentClass?: React.ReactType
}

declare type ReactBootstrap$CarouselCaption = React.ClassicComponent<ReactBootstrap$CarouselCaptionProps, {}>;

declare var CarouselCaption: React.ClassicComponentClass<ReactBootstrap$CarouselCaptionProps>;

declare type ReactBootstrap$GridProps = {
    componentClass?: React.ReactType,
    fluid?: boolean
}

declare type ReactBootstrap$Grid = React.ClassicComponent<ReactBootstrap$GridProps, {}>;

declare var Grid: React.ClassicComponentClass<ReactBootstrap$GridProps>;

declare type ReactBootstrap$RowProps = {
    componentClass?: React.ReactType
}

declare type ReactBootstrap$Row = React.ClassicComponent<ReactBootstrap$RowProps, {}>;

declare var Row: React.ClassicComponentClass<ReactBootstrap$RowProps>;

declare type ReactBootstrap$ColProps = {
    componentClass?: React.ReactType,
    lg?: number,
    lgHidden?: boolean,
    lgOffset?: number,
    lgPull?: number,
    lgPush?: number,
    md?: number,
    mdHidden?: boolean,
    mdOffset?: number,
    mdPull?: number,
    mdPush?: number,
    sm?: number,
    smHidden?: boolean,
    smOffset?: number,
    smPull?: number,
    smPush?: number,
    xs?: number,
    xsHidden?: boolean,
    xsOffset?: number,
    xsPull?: number,
    xsPush?: number
}

declare type ReactBootstrap$Col = React.ClassicComponent<ReactBootstrap$ColProps, {}>;

declare var Col: React.ClassicComponentClass<ReactBootstrap$ColProps>;

declare type ReactBootstrap$ThumbnailProps = {
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string
}

declare type ReactBootstrap$Thumbnail = React.ClassicComponent<ReactBootstrap$ThumbnailProps, {}>;

declare var Thumbnail: React.ClassicComponentClass<ReactBootstrap$ThumbnailProps>;

declare type ReactBootstrap$ListGroupProps = {
    componentClass?: React.ReactType,
    fill?: boolean
}

declare class ListGroup mixins React.Component<ReactBootstrap$ListGroupProps, {}>{}

declare type ReactBootstrap$ListGroupItemProps = {
    active?: any,
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string,
    eventKey?: any,
    header?: any,
    key?: any,
    listItem?: boolean
}

declare class ListGroupItem mixins React.Component<ReactBootstrap$ListGroupItemProps, {}>{}

declare type ReactBootstrap$LabelProps = {
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string
}

declare class Label mixins React.Component<ReactBootstrap$LabelProps, {}>{}

declare type ReactBootstrap$BadgeProps = {
    pullRight?: boolean
}

declare type ReactBootstrap$Badge = React.ClassicComponent<ReactBootstrap$BadgeProps, {}>;

declare var Badge: React.ClassicComponentClass<ReactBootstrap$BadgeProps>;

declare type ReactBootstrap$JumbotronProps = {
    componentClass?: React.ReactType
}

declare type ReactBootstrap$Jumbotron = React.ClassicComponent<ReactBootstrap$JumbotronProps, {}>;

declare var Jumbotron: React.ClassicComponentClass<ReactBootstrap$JumbotronProps>;

declare type ReactBootstrap$ImageProps = {
    circle?: boolean,
    responsive?: boolean,
    rounded?: boolean,
    thumbnail?: boolean
}

declare type ReactBootstrap$Image = React.ClassicComponent<ReactBootstrap$ImageProps, {}>;

declare var Image: React.ClassicComponentClass<ReactBootstrap$ImageProps>;

declare type ReactBootstrap$PageHeaderProps = {}

declare class PageHeader mixins React.Component<ReactBootstrap$PageHeaderProps, {}>{}

declare type ReactBootstrap$WellProps = {
    bsSize?: ReactBootstrap$Sizes,
    bsStyle?: string
}

declare class Well mixins React.Component<ReactBootstrap$WellProps, {}>{}

declare type ReactBootstrap$GlyphiconProps = {
    glyph: string
}

declare type ReactBootstrap$Glyphicon = React.ClassicComponent<ReactBootstrap$GlyphiconProps, {}>;

declare var Glyphicon: React.ClassicComponentClass<ReactBootstrap$GlyphiconProps>;

declare type ReactBootstrap$TableProps = {
    bordered?: boolean,
    condensed?: boolean,
    hover?: boolean,
    responsive?: boolean,
    striped?: boolean
}

declare type ReactBootstrap$Table = React.ClassicComponent<ReactBootstrap$TableProps, {}>;

declare var Table: React.ClassicComponentClass<ReactBootstrap$TableProps>;

declare type ReactBootstrap$InputGroupProps = {
    bsClass?: string,
    bsSize?: ReactBootstrap$Sizes
}

declare type ReactBootstrap$InputGroupClass = {
    Addon: typeof InputGroupAddon,
    Button: typeof InputGroupButton
}

declare type ReactBootstrap$InputGroup = React.Component<ReactBootstrap$InputGroupProps, {}>;

declare var InputGroup: ReactBootstrap$InputGroupClass;

declare type ReactBootstrap$InputGroupAddonProps = {}

declare type ReactBootstrap$InputGroupAddon = React.ClassicComponent<ReactBootstrap$InputGroupAddonProps, {}>;

declare var InputGroupAddon: React.ClassicComponentClass<ReactBootstrap$InputGroupAddonProps>;

declare type ReactBootstrap$InputGroupButtonProps = {}

declare type ReactBootstrap$InputGroupButton = React.ClassicComponent<ReactBootstrap$InputGroupButtonProps, {}>;

declare var InputGroupButton: React.ClassicComponentClass<ReactBootstrap$InputGroupButtonProps>;

declare type ReactBootstrap$FormProps = {
    bsClass?: string,
    componentClass?: React.ReactType,
    horizontal?: boolean,
    inline?: boolean
}

declare class Form mixins React.Component<ReactBootstrap$FormProps, {}>{}

declare type ReactBootstrap$FormGroupProps = {
    bsClass?: string,
    bsSize?: ReactBootstrap$Sizes,
    controlId?: string,
    validationState?: success | warning | error
}

declare class FormGroup mixins React.Component<ReactBootstrap$FormGroupProps, {}>{}

declare type ReactBootstrap$ControlLabelProps = {
    bsClass?: string,
    htmlFor?: string,
    srOnly?: boolean
}

declare class ControlLabel mixins React.Component<ReactBootstrap$ControlLabelProps, {}>{}

declare type ReactBootstrap$FormControlProps = {
    bsClass?: string,
    componentClass?: React.ReactType,
    id?: string,
    type?: string
}

declare type ReactBootstrap$FormControlClass = {
    Feedback: typeof FormControlFeedback,
    Static: typeof FormControlStatic
}

declare type ReactBootstrap$FormControl = React.Component<ReactBootstrap$FormControlProps, {}>;

declare var FormControl: ReactBootstrap$FormControlClass;

declare type ReactBootstrap$FormControlFeedbackProps = {}

declare class FormControlFeedback mixins React.Component<ReactBootstrap$FormControlFeedbackProps, {}>{}

declare type ReactBootstrap$FormControlStaticProps = {
    bsClass?: string,
    componentClass?: React.ReactType
}

declare class FormControlStatic mixins React.Component<ReactBootstrap$FormControlStaticProps, {}>{}

declare type ReactBootstrap$HelpBlockProps = {
    bsClass?: string
}

declare class HelpBlock mixins React.Component<ReactBootstrap$HelpBlockProps, {}>{}

declare type ReactBootstrap$RadioProps = {
    bsClass?: string,
    disabled?: boolean,
    inline?: boolean,
    inputRef?: (instance: HTMLInputElement) => void,
    validationState?: success | warning | error
}

declare class Radio mixins React.Component<ReactBootstrap$RadioProps, {}>{}

declare type ReactBootstrap$PortalProps = {
    dimension?: string | Function,
    getDimensionValue?: Function,
    in?: boolean,
    onEnter?: Function,
    onEntered?: Function,
    onEntering?: Function,
    onExit?: Function,
    onExited?: Function,
    onExiting?: Function,
    role?: string,
    timeout?: number,
    transitionAppear?: boolean,
    unmountOnExit?: boolean
}

declare type ReactBootstrap$Portal = React.ClassicComponent<ReactBootstrap$PortalProps, {}>;

declare var Portal: React.ClassicComponentClass<ReactBootstrap$PortalProps>;

declare type ReactBootstrap$PositionProps = {
        dimension?: string | Function,
        getDimensionValue?: Function,
        in?: boolean,
        role?: string,
        timeout?: number,
        transitionAppear?: boolean,
        unmountOnExit?: boolean
    } & ReactBootstrap$TransitionCallbacks &


    declare class Position mixins React.Component<ReactBootstrap$PositionProps, {}>{}

declare interface ReactBootstrap$MediaLeftProps {
    align?: string
}

declare type ReactBootstrap$MediaLeft = React.ClassicComponent<ReactBootstrap$MediaLeftProps, {}>;

declare var MediaLeft: React.ClassicComponentClass<ReactBootstrap$MediaLeftProps>;

declare interface ReactBootstrap$MediaRightProps {
    align?: string
}

declare type ReactBootstrap$MediaRight = React.ClassicComponent<ReactBootstrap$MediaRightProps, {}>;

declare var MediaRight: React.ClassicComponentClass<ReactBootstrap$MediaRightProps>;

declare interface ReactBootstrap$MediaHeadingProps {
    componentClass?: React.ReactType
}

declare type ReactBootstrap$MediaHeading = React.ClassicComponent<ReactBootstrap$MediaHeadingProps, {}>;

declare var MediaHeading: React.ClassicComponentClass<ReactBootstrap$MediaHeadingProps>;

declare interface ReactBootstrap$MediaBodyProps {
    componentClass?: React.ReactType
}

declare type ReactBootstrap$MediaBody = React.ClassicComponent<ReactBootstrap$MediaBodyProps, {}>;

declare var MediaBody: React.ClassicComponentClass<ReactBootstrap$MediaBodyProps>;

declare interface ReactBootstrap$MediaListProps {}

declare type ReactBootstrap$MediaList = React.ClassicComponent<ReactBootstrap$MediaListProps, {}>;

declare var MediaList: React.ClassicComponentClass<ReactBootstrap$MediaListProps>;

declare interface ReactBootstrap$MediaListItemProps {
    componentClass?: React.ReactType
}

declare type ReactBootstrap$MediaListItem = React.ClassicComponent<ReactBootstrap$MediaListItemProps, {}>;

declare var MediaListItem: React.ClassicComponentClass<ReactBootstrap$MediaListItemProps>;

declare type ReactBootstrap$MediaProps = {
    componentClass?: React.ReactType
}

declare type ReactBootstrap$MediaClass = {
    Left: typeof MediaLeft,
    Right: typeof MediaRight,
    Heading: typeof MediaHeading,
    Body: typeof MediaBody,
    List: typeof MediaList,
    ListItem: typeof MediaListItem
}

declare type ReactBootstrap$Media = React.ClassicComponent<ReactBootstrap$MediaProps, {}>;

declare var Media: ReactBootstrap$MediaClass;

declare interface ReactBootstrap$bootstrapUtilsType {}

declare function ReactBootstrap$createChainedFunctionType(...funcs: Function[]): Function

declare interface ReactBootstrap$ValidComponentChildrenType {
    map: (children: any, func: any, context: any) => any,
        forEach: (children: any, func: any, context: any) => any,
        count: (children: any) => number,
        filter: (children: any, func: any, context: any) => any,
        find: (children: any, func: any, context: any) => any,
        every: (children: any, func: any, context: any) => any,
        some: (children: any, func: any, context: any) => any,
        toArray: (children: any) => any
}

declare class utils {
    bootstrapUtils: ReactBootstrap$bootstrapUtilsType;
    createChainedFunction: typeof createChainedFunctionType;
    ValidComponentChildren: ReactBootstrap$ValidComponentChildrenType
}
declare module 'react-bootstrap' {
    declare module.exports: typeof ReactBootstrap
}