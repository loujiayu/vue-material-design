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
  button: [
    disabled('button'),
    label('button'),
    backgroundColor('button'),
    styleObj('button'),
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
    disabled('icon button'),
    backgroundColor('icon button'),
    styleObj('icon button'),
    shadowDepth,
    iconClass,
    link,
    ripple,
    onClick
  ]
}
