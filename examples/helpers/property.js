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
const tooltip = ['tooltip', 'String', '', 'information on hover.']
const shadowDepth = ['shadowDepth', 'Number', '', 'depth of box shadow.']
const iconClass = ['iconClass', 'String', '', 'class name of icon if any.']
const isIconFront = ['iconFront', 'Boolean', 'false', 'is icon front of label or not.']
const hover = ['hover', 'Boolean', 'true', 'hover animate enable.']
const link = ['link', 'String', '', 'a URL to link.']
const labelStyle = ['labelStyle', 'Object', '', 'override the inline style of label.']
const iconStyle = ['iconStyle', 'Object', '', 'override the inline style of icon.']
const ripple = ['ripple', 'Boolean', 'true', 'ripple enable.']
const onClick = ['onClick', 'Function', '', 'Callback function for click event.']

export default {
  Button: [
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
    onClick
  ],
  checkbox: [
    styleObj('CheckBox'),
    disabled('CheckBox'),
    trigger('CheckBox')
  ],

}
