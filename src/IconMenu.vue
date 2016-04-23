<template>
  <div @click="handleClick($event)" :style="mRootStyle">
    <icon-button
      v-ref:iconb
      :disabled="disabled"
      :on-click="onClick"
      :on-mouseEnter="onMouseEnter"
      :icon-class="iconClass"
      >
    </icon-button>
    <div  v-show="open" :style="mMenuStyles" transition="iconSlide">
      <slot name="iconList"></slot>
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
    const styles = {
      root: {
        display: 'inline-block',
        position: 'relative'
      },
      menu: {
        boxShadow: zDepthShadows[0],
        position:'absolute',
        display: 'inline-block',
        overflow: 'auto',
        maxHeight: '150px',
        display: 'inline-block',
        willChange: 'transform',
        backgroundColor: 'white',
        transition: Transitions.easeOut('250ms', ['transform', 'opacity']),
        // WebkitOverflowScrolling: 'touch',
      },
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mMenuStyles: getStyles(styles.menu, this.menuStyle),
      open: false
    }
  },
  props: {
    disabled: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    iconClass: String,
    styleObj: Object,
    menuStyle: Object,
    verticalPosition: {
      type: String,
      default: 'bottom'
    },
    horizontalPosition: {
      type: String,
      default: 'left'
    },
  },
  components: {
    IconButton
  },
  ready: function() {
    window.addEventListener('click',this.clickAway )
    const node = this.$el.children[1]
    const {height, width} = this.$refs.iconb.$el.getBoundingClientRect()
    const vOrient = this.verticalPosition=='top' ? `bottom:${height}px` : `top:${height}px`
    const hOrient = this.horizontalPosition=='left' ? 'left:0' :'right:0'
    var transformOrigin = this.horizontalPosition=='left' ? '0 ' : `100% `
    transformOrigin += this.verticalPosition=='top' ? '100%' : '0%'
    // transformOrigin += '0'
    node.style.cssText += `${vOrient};${hOrient};transform-origin:${transformOrigin};`
    // console.log(this.open);
    // console.log('iconmune');
  },
  destroyed: function() {
    window.removeEventListener('click', clickAway)
  },
  methods: {
    handleClick: function(event) {
      this.open = true
      // console.log(this.open);
    },
    clickAway: function(event) {
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
[slot="iconList"] {
  width: 100%;
  display: block;
  text-align: left;
}
.iconSlide-leave,
.iconSlide-enter {
  transform: scale(0);
  opacity: 0;
  visibility: hidden;
}
</style>
