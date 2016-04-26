default export {
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
  }
}
