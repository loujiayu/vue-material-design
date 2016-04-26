export default {
  on(el, type, callback) {
    el.addEventListener(type, callback)
  },
  off(el, type, callback) {
    if (el.removeEventListener) {
      el.removeEventListener(type, callback)
    }
  },
  once(el, type, callback) {
    const remove = (event) => {
      this.off(el, type, callback)
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
