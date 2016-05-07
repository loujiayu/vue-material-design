const style = function(s) {
  return `override the inline style of ${s}.`
}
const disabled = function(component) {
  return ['disabled', 'Boolean', 'false', `disable the ${component}.`]
}
const backgroundColor = function(component) {
  return ['backgroundColor', 'String', '', `background of ${component}.`]
}
const label = function(component) {
  return ['label', 'String', '', `label of ${component}.`]
}
const styleObj = function(component) {
  return ['styleObj', 'Object', '', `override the inline style of ${component}.`]
}
const trigger = function(component) {
  return ['trigger', 'Boolean', 'false', `${component} triggered if true.`]
}
const verticalPosition = function(component) {
  return ['verticalPosition', 'String', 'bottom', `tooltip vertical position when hover on ${component}.`]
}
const horizontalPosition = function(component) {
  return ['horizontalPosition', 'String', 'center', `tooltip horizontal position when hover on ${component}.`]
}
const menuStyle = function(component) {
  return ['menuStyle', 'Object', '', `override the menu style of ${component}`]
}
const buttonStyle = function(component) {
  return ['buttonStyle', 'Object', '', `override the button style of ${component}`]
}
const tooltip = ['tooltip', 'String', '', 'information on hover.']
const shadowDepth = ['shadowDepth', 'Number', '-1', 'depth of box shadow.']
const iconClass = ['iconClass', 'String', '', 'class name of icon if any.']
const isIconFront = ['iconFront', 'Boolean', 'false', 'is icon front of label or not.']
const hover = ['hover', 'Boolean', 'true', 'hover animate enable.']
const link = ['link', 'String', '', 'a URL to link.']
const labelStyle = ['labelStyle', 'Object', '', 'override the inline style of label.']
const iconStyle = ['iconStyle', 'Object', '', 'override the inline style of icon.']
const ripple = ['ripple', 'Boolean', 'true', 'ripple enable.']
const onClick = ['onClick', 'Function', '', 'Callback function for click event.']
const vertical = ['verticalPosition', 'String', 'bottom', 'menu vertical position when click on element']
const horizontal = ['horizontalPosition', 'String', 'left', 'menu horizontal position when click on element']
const docked = ['docked', 'Boolean', 'true', 'component should be docked if true.']
const open = ['open', 'Boolean', 'false', 'menu should display if true.']
const message = ['message', 'String', '', 'message in snack bar.']
const undo = ['undo', 'Boolean', 'false', 'undo an operation.']
const messageStyle = ['messageStyle', 'Object', '', 'override the inline style of message.']
const undoStyle = ['undoStyle', 'Object', '', 'override the inline style of undo button.']
const floatStyle = ['floatStyle', 'Object', '', style('float content')]
const hintStyle = ['hintStyle', 'Object', '', style('hint content')]
const inputStyle = ['inputStyle', 'Object', '', style('input content')]
const underlineStyle = ['underlineStyle', 'Object', '', style('underline')]
const forcusUnderlineStyle = ['forcusUnderlineStyle', 'Object', '', style('forcus underline')]
const wrapperStyle = ['wrapperStyle', 'Object', '', style('dialog wrapper')]
const floatContent = ['floatContent', 'Object', '', 'float content.']
const hintContent = ['hintContent', 'String', '', 'hint content.']
const defaultContent = ['defaultContent', 'String', '', 'default content.']
const headers = ['headers', 'Array', '', 'header contents.']
const select = ['select', 'Boolean', 'false', 'check box enable.']
const selectable = ['selectable', 'Boolean', 'false', 'table content selectable if true.']
const bodyContent = ['bodyContent', 'Array' ,'', 'body contents.']
const trStyle = ['trStyle', 'Object', '', style('tr')]
const tdStyle = ['tdStyle', 'Object', '', style('td')]
const thStyle = ['thStyle', 'Object', '', style('th')]
const textFieldStyle = ['textFieldStyle', 'Object', '', style('Text Field')]
const dialogStyle = ['dialogStyle', 'Object', '', style('Dialog')]
const thumbStyle = ['thumbStyle', 'Object', '', style('thumb')]
const circleStyle = ['circleStyle', 'Object', '', style('circle')]
const labelId = ['labelId', 'String', '', 'id can be associated with labels.']
const keyboardFocus = ['keyboardFocus', 'Boolean', 'true','key event listening.']
const isFloat = ['isFloat', 'Boolean', 'true','float when touch event fires.']
const showDuration = ['showDuration', 'Number', '5000', 'duration the snack bar shows.']
const onBlur = ['onBlur', 'Function', '', 'callback function that is fired when element has lost focus.']
const onFocus = ['onForcus', 'Function', '', 'callback function that is fired when element has received focus.']
const completion = ['completion', 'Array', '', 'array of completion.']
const matchCase = ['matchCase', 'Boolean', 'true','case sensitive if true.']
const title = ['title', 'String', '','title of Dialog']
export default {
  button: [
    disabled('Button'),
    label('Button'),
    backgroundColor('Button'),
    styleObj('Button'),
    shadowDepth,
    isIconFront,
    hover,
    link,
    labelStyle,
    iconStyle,
    keyboardFocus,
    isFloat,
    iconClass,
    ripple,
    onClick
  ],
  icon: [
    disabled('IconButton'),
    backgroundColor('IconButton'),
    styleObj('IconButton'),
    verticalPosition('IconButton'),
    horizontalPosition('IconButton'),
    shadowDepth,
    iconClass,
    tooltip,
    link,
    ripple,
    onClick,
    keyboardFocus,
    isFloat,
  ],
  checkbox: [
    styleObj('CheckBox'),
    disabled('CheckBox'),
    trigger('CheckBox'),
    labelId
  ],
  downmenu: [
    styleObj('DownMenu'),
    disabled('DownMenu'),
    label('DownMunu'),
    menuStyle('DownMunu'),
    buttonStyle('DownMunu')
  ],
  iconmenu: [
    styleObj('IconMenu'),
    disabled('IconMenu'),
    menuStyle('IconMenu'),
    vertical,
    horizontal,
    iconClass,
  ],
  'menubar': [
    styleObj('MenuBar'),
    docked,
    shadowDepth,
    open
  ],
  'radio': [
    styleObj('Radio'),
    trigger('Radio'),
    disabled('Radio'),
    labelId
  ],
  'snackbar': [
    styleObj('Radio'),
    showDuration,
    message,
    undo,
    messageStyle,
    undoStyle,
    open
  ],
  textfield: [
    styleObj('Text Field'),
    disabled('Text Field'),
    floatStyle,
    hintStyle,
    inputStyle,
    underlineStyle,
    forcusUnderlineStyle,
    floatContent,
    hintContent,
    onBlur,
    onFocus,
    defaultContent
  ],
  table: [
    styleObj('table')
  ],
  'tableheader': [
    styleObj('table header'),
    headers,
    select,
    thStyle
  ],
  'tablebody': [
    styleObj('table body'),
    bodyContent,
    selectable,
    select,
    trStyle,
    tdStyle
  ],
  toggle: [
    styleObj('toggle'),
    trigger('toggle'),
    disabled('toggle'),
    circleStyle,
    thumbStyle,
    labelId
  ],
  autocomplete: [
    styleObj('Auto Complete'),
    disabled('Auto Complete'),
    floatStyle,
    hintStyle,
    inputStyle,
    underlineStyle,
    forcusUnderlineStyle,
    floatContent,
    hintContent,
    onBlur,
    onFocus,
    defaultContent,
    completion,
    matchCase
  ],
  dialog: [
    styleObj('Dialog'),
    title,
    open,
    wrapperStyle
  ],
  datepicker: [
    styleObj('Date Picker'),
    textFieldStyle,
    dialogStyle,
  ]
}
