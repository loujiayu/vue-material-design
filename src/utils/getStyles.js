var testEl = null

const prefixes = ['-webkit-', '-moz-', '-ms-']
const camelPrefixes = ['Webkit', 'Moz', 'ms']

const uppercasePattern = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase();
}

function prefix(prop, val) {
  if (!testEl) {
    testEl = document.createElement('div')
  }
  var lower = hyphenate(prop)
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
  camelPrefixes.map((camelPrefix, index) => {
    var prefixed = camelPrefix + upper
    if (prefixed in testEl.style) {
      return `${prefixes[index]}${lower}:${val}`
    }
  })
  if (prop in testEl.style) {
    return `${lower}:${val}`
  }
  else {
    console.warn(`${prop} is not a valid CSS property`)
  }
}

function toCssText(styleObj) {
  var cssList = []
  for (let prop in styleObj) {
    if (styleObj[prop] == null) {
      continue
    }
    cssList.push(prefix(prop, styleObj[prop]))
  }
  return cssList.join(';')
}

export default function getStyles(s1, s2) {
  var target = {}
  Object.assign(target, s1, s2)
  return toCssText(target)
}
