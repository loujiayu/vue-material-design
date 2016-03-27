<template>
  <div @click="handleClick($event)" :style="mergedStyles">
    <icon-button
      v-ref:iconb
      :disabled="disabled"
      :on-click="onClick"
      :on-mouseEnter="onMouseEnter"
      :icon-class="iconClass"
      :link="link"
      >
    </icon-button>
    <div :style="menuStyles" v-show="open" transition="iconSlide">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import IconButton from 'IconButton'
import getStyles from 'utils/getStyles'
import Transitions from 'styles/transitions'
import {zDepthShadows} from 'styles/common'

export default {
  data: function () {
    return {
      originStyles: {
        display: 'inline-block',
        position: 'relative'
      },
      mergedStyles: null,
      menuStyles: {
        boxShadow: zDepthShadows[0],
        position:'absolute',
        display: 'inline-block',
        overflow: 'scroll',
        maxHeight: '150px',
        display: 'inline-block',
        willChange: 'transform',
        transition: Transitions.easeOut('250ms', ['transform', 'opacity']),
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
    styleObj: Object,
    vertical: String,
    horizontal: String
  },
  components: {
    IconButton
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  },
  ready: function() {
    window.addEventListener('click',this.clickAway )
    const node = this.$el.children[1]
    const {height, width} = this.$refs.iconb.$el.getBoundingClientRect()
    const vOrient = this.vertical=='top' ? `top:${height}px` :`bottom:${height}px`
    const hOrient = this.horizontal=='left' ? 'left:0' :'right:0'
    var transformOrigin = this.horizontal=='left' ? '0 ' : `100% `
    transformOrigin += this.vertical=='top' ? '0' : '100%'
    node.style.cssText += `${vOrient};${hOrient};transform-origin:${transformOrigin};`
  },
  destroyed: function() {
    window.removeEventListener('click', clickAway)
  },
  methods: {
    handleClick: function(event) {
      if(event.stopPropagation) {
        event.stopPropagation();
      }
      else if(event.cancelBubble) {
        event.cancelBubble = true
      }
      this.open = true
    },
    clickAway: function() {
      if (!(this.$el && this.$el.contains(event.target) ) && this.open) {
        this.open = false
      }
    }
  }

}
</script>

<style media="screen">
.icon-transition {
  transform: scale(1);
  opacity: 1;
  visibility: visible;
}
.iconSlide-leave,
.iconSlide-enter {
  transform: scale(0);
  opacity: 0;
  visibility: hidden;
}
</style>
