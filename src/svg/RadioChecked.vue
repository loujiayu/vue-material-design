<template>
  <svg :style="mRootStyle" :viewBox='viewBox' v-show="trigger" transition="trigger">
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
  </svg>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
export default {
  data: function(){
    const styles = {
      root: {
        transformOrigin: '50% 50%',
        position: 'absolute',
        height: 'inherit',
        width: 'inherit',
        fill: "rgb(44, 107, 201)",
        transition: `${Transitions.easeOut('450ms', 'opacity', '0ms')}, ${
            Transitions.easeOut('450ms', 'transform', '0ms')
          }`,
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      viewBox: '0 0 24 24',
    }
  },
  props: {
    styleObj: Object,
    trigger: Boolean
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
