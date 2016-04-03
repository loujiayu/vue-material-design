<template>
  <svg :style="mRootStyle" :viewBox='viewBox' v-show="trigger" transition="trigger">
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
export default {
  data: function() {
    const styles = {
      root: {
        position: 'absolute',
        transformOrigin: '50% 50%',
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
.trigger-enter {
  transform: scale(0);
  opacity: 0;
}
.trigger-leave {
  opacity: 0;
}
</style>
