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
    <popover :open="open" :style-obj="mMenuStyle">
      <slot name="iconList" slot="popover"></slot>
    </popover>
  </div>
</template>

<script type="text/javascript">
import Event from 'utils/events'
import IconButton from 'IconButton'
import Popover from 'Popover'
import Transitions from 'styles/transitions'
import {zDepthShadows} from 'styles/common'

export default {
  data: function () {
    var transformOrigin = this.horizontalPosition == 'left' ? '0 ' : `100% `
    transformOrigin += this.verticalPosition=='top' ? '100%' : '0%'
    const styles = {
      root: {
        display: 'inline-block',
        position: 'relative'
      },
      menu: {
        transformOrigin: transformOrigin
      },
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mMenuStyle: Object.assign(styles.menu, this.menuStyle),
      open: false,
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
    IconButton,
    Popover
  },
  ready: function() {
    Event.on(window, 'click', this.clickAway)
    const height = this.$refs.iconb.$el.offsetHeight
    const vOrient = this.verticalPosition=='top' ? { bottom:`${height}px` } : {top:`${height}px`}
    const hOrient = this.horizontalPosition=='left' ? {left:0} :{right:0}
    this.mMenuStyle = Object.assign({}, this.mMenuStyle, vOrient, hOrient)
  },
  destroyed: function() {
    Event.off(window, 'click', this.clickAway)
  },
  methods: {
    handleClick: function(event) {
      this.open = true
    },
    clickAway: function(event) {
      if (!(this.$el && this.$el.contains(event.target) ) && this.open) {
        this.open = false
      }
    }
  }
}
</script>
