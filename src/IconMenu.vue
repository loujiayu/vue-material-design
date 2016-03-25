<template>
  <div @click="" :style="originStyles">
    <icon-button
      :disabled="disabled"
      :on-click="onClick"
      :on-mouseEnter="onMouseEnter"
      :icon-class="iconClass"
      :link="link"
      >
    </icon-button>
    <div :style="menuStyles">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import BaseMenu from 'BaseMenu'
import IconButton from 'IconButton'
import getStyles from 'utils/getStyles'
import Menu from 'Menu'

export default {
  data: function () {
    // var menu = {
    //   position: 'absolute',
    //   maxHeight: '200px',
    //   display: 'inline-block'
    // }

    return {
      originStyles: {
        display: 'inline-block',
        position: 'relative'
      },
      mergedStyles: null,
      menuStyles: {
        position: 'absolute',
        maxHeight: '200px',
        display: 'inline-block'
      },
      iconHeight: null,
      iconWidth: null
    }
  },
  props: {
    disabled: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    iconClass: String,
    link: String,
    style: Object,
    vertical: String,
    horizontal: String
  },
  components: {
    BaseMenu,
    IconButton,
    Menu
  },
  created: function() {
    this.mergedStyles = getStyles(this.style, this.originStyles)
  },
  ready: function() {
    const node = this.$el.children[1]
    const {height, width} = node.getBoundingClientRect()
    this.iconHeight = height
    this.iconWidth = width
    const vOrient = this.vertical=='top' ? 'bottom:0' : `top:${this.iconHeight}px`
    const hOrient = this.horizontal=='left' ? 'right:0' : 'left:0'
    node.style.cssText += `${vOrient};${hOrient}`
    // Object.assign(this.menuStyles, vOrient, hOrient)
  }
}
</script>
