<template >
  <div :style="mergedStyles" v-show="open" transition="slide">
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
    return {
      originStyles: {
        height:'100%',
        width: '256px',
        position: 'fixed',
        // transform: this.open ? 'translateX(0)' : 'translateX(-100%)',
        left: '0',
        top: '0',
        transition: Transitions.easeOut(null, 'transform', null),
        fontFamily: 'Roboto, sans-serif',
        boxShadow: zDepthShadows[1],
        overflow: 'scroll'
      },
      mergedStyles: null
    }
  },
  props: {
    open: Boolean,
    styleObj: Object
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  }
}
</script>

<style media="screen">
.slide-transition {
  transform: translate(0);
}
.slide-enter,
.slide-leave {
  transform: translateX(-100%);
}
</style>
