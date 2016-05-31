<template>
  <svg :style="mRootStyle" :viewBox='viewBox' v-show="!trigger" transition="trigger">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </svg>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import {baseTheme} from 'styles/muiTheme'

export default {
  data: function(){
    const styles = {
      root: {
        height: 'inherit',
        width: 'inherit',
        position: 'absolute',
        fill: this.disabled ? baseTheme.disabledColor : this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)",
        transition: `${Transitions.easeOut('450ms', 'opacity', '0ms')}, ${
            Transitions.easeOut('450ms', 'transform', '0ms')
          }`,
        transformOrigin: '50% 50%',
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      viewBox: '0 0 24 24',
    }
  },
  props: {
    styleObj: Object,
    trigger: Boolean,
    disabled: Boolean
  }
}
</script>
<style media="screen">
.trigger-transition {
  transform: scale(1);
  opacity: 1;
}
.trigger-enter,
.trigger-leave {
  transform: scale(.5);
  opacity: 0;
}
</style>
