export default {
  on(el, type, callback, useCapture) {
    el.addEventListener(type, callback, useCapture)
  },
  off(el, type, callback, useCapture) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback, useCapture)
    }
  },
  once(el, type, callback, useCapture) {
    const remove = (event) => {
      this.off(el, type, callback, useCapture)
      callback.call(el)
    }
    this.on(el, type, remove)
  },
  keyCodes: {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    'delete': [8, 46],
    up: 38,
    left: 37,
    right: 39,
    down: 40
  }
}
