<template >
  <div :style="mRootStyle" v-show="open" transition="slide">
    <slot name="list"></slot>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import touchRipple from 'touchRipple'
import Transitions from 'styles/transitions'
import {baseTheme} from 'styles/muiTheme'
import {zDepthShadows} from 'styles/common'

export default {
  data: function() {
    const styles = {
      root: {
        height:'100%',
        width: '256px',
        position: 'fixed',
        top: '0',
        transition: Transitions.easeOut('200ms', 'left', ''),
        fontFamily: 'Roboto, sans-serif',
        boxShadow: zDepthShadows[this.shadowDepth - 1],
        overflow: 'scroll'
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj)
    }
  },
  props: {
    shadowDepth: {
      type: Number,
      default: 1
    },
    open: Boolean,
    styleObj: Object,
    docked: Boolean
  },
  created: function() {
    if (this.docked) {
      window.addEventListener('click',this.clickAway )
    }
  },
  destroyed: function() {
    if (this.docked) {
      window.removeEventListener('click', clickAway)
    }
  },
  methods: {
    clickAway: function() {
      if (!(this.$el && this.$el.contains(event.target) ) && this.open) {
        this.open = false
      }
    }
  }
}
</script>

<style media="screen">
.slide-transition {
  left: 0;
}
.slide-enter,
.slide-leave {
  left: -256px;
}
</style>
