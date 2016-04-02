<template>
  <svg :style="mRootStyle" :viewBox='viewBox'>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
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
        height: 'inherit',
        width: 'inherit',
        fill: this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)",
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      viewBox: '0 0 24 24',
    }
  },
  watch: {
    trigger: function() {
      this.mRootStyle.fill = this.trigger ? "rgb(44, 107, 201)" : "rgb(0,0,0)"
    }
  },
  props: {
    styleObj: Object,
    trigger: Boolean
  }
}
</script>

<style media="screen">

</style>
