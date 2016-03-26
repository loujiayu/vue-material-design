<template>
  <div @click="handleClick($event)" :style="originStyles">
    <icon-button
      v-ref:iconb
      :disabled="disabled"
      :on-click="onClick"
      :on-mouseEnter="onMouseEnter"
      :icon-class="iconClass"
      :link="link"
      >
    </icon-button>

    <div :style="menuWrapper">
      <div :style="menuStyles">
        <slot name="list"></slot>
      </div>
    </div>

  </div>
</template>

<script type="text/javascript">
import BaseMenu from 'BaseMenu'
import IconButton from 'IconButton'
import getStyles from 'utils/getStyles'
import Transitions from 'styles/transitions'
import Menu from 'Menu'

export default {
  data: function () {
    return {
      originStyles: {
        display: 'inline-block',
        position: 'relative'
      },
      mergedStyles: null,
      menuStyles: {
        // position: 'absolute',
        maxHeight: '200px',
        display: 'inline-block',
        willChange: 'transform',
        opacity: '0',
        transition: Transitions.easeOut('250ms', ['transform', 'opacity']),
        transform: 'scale(0)',
      },
      menuWrapper: {
        position:'absolute',
        visibility: 'hidden',
        display: 'inline-block'
      },
      open: false
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
    window.addEventListener('click', function(event) {
      if (!(this.$el && this.$el.contains(event.target) ) && this.open) {
        this.clickAway()
      }
    }.bind(this))
    const node = this.$el.children[1]
    const {height, width} = this.$refs.iconb.$el.getBoundingClientRect()
    const vOrient = this.vertical=='top' ? `top:${height}px` :`bottom:${height}px`
    const hOrient = this.horizontal=='left' ? 'left:0' :'right:0'
    var transformOrigin = this.horizontal=='left' ? '0 ' : `100% `
    transformOrigin += this.vertical=='top' ? '0' : '100%'
    node.style.cssText += `${vOrient};${hOrient};${transformOrigin};`
    this.menuStyles.transformOrigin = transformOrigin
  },
  destroyed: function() {
    window.removeEventListener('click')
  },
  methods: {
    handleClick: function(event) {
      if(event.stopPropagation) {
        event.stopPropagation();
      }
      else if(event.cancelBubble) {
        event.cancelBubble = true
      }
      this.menuStyles.transform = 'scale(1)'
      this.menuStyles.opacity = '1'
      this.menuWrapper.visibility = 'visible'
      this.open = true
      // setTimeout(() => this.open = true, 0)
    },
    clickAway: function() {
      this.open = false
      this.menuStyles.transform = 'scale(0)'
      this.menuStyles.opacity = '0'
      this.menuWrapper.visibility = 'hidden'
    }
  }

}
</script>
