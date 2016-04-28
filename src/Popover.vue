<template>
  <div :style="mRootStyle" v-show="open" :transition="verticalAnimation ? 'vertical-pop':'popover'">
    <slot name="popover"></slot>
  </div>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
export default {
  data: function() {
    const styles = {
      root: {
        boxShadow: zDepthShadows[0],
        position:'absolute',
        overflow: 'auto',
        maxHeight: '150px',
        willChange: 'transform',
        backgroundColor: 'white',
        transition: Transitions.easeOut('250ms', ['transform', 'opacity']),
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
    }
  },
  watch: {
    styleObj: function() {
      this.mRootStyle = Object.assign({}, this.mRootStyle, this.styleObj)
    }
  },
  props: {
    styleObj: Object,
    open: Boolean,
    verticalAnimation: Boolean
    // top: String,
    // left: String
  }
}
</script>
<style media="screen">
.vertical-pop-transition {
  transform: scaleY(1);
  opacity: 1;
  visibility: visible;
}
.vertical-pop-leave,
.vertical-pop-enter {
  transform: scaleY(0);
  opacity: 0;
  visibility: hidden;
}
.popover-transition {
  transform: scale(1);
  opacity: 1;
  visibility: visible;
}
.popover-leave,
.popover-enter {
  transform: scale(0);
  opacity: 0;
  visibility: hidden;
}
</style>
