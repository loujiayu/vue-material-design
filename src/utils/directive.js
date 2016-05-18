export function delayfocus() {
  var el = this.el
  setTimeout(()=>{el.focus()})
}
