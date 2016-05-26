export function delayfocus(val) {
  if (!val) {
    return
  }
  var el = this.el
  setTimeout(()=>{el.focus()}, 0)
}
