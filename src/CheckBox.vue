<template>
  <div :style="mRootStyle" @click="handleClick">
    <check-box-inline :trigger="trigger"></check-box-inline>
    <check-box-outline :trigger="trigger"></check-box-outline>
    <touch-ripple :style-obj="zoom" v-if="!disabled" :center=true></touch-ripple>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

import touchRipple from 'touchRipple'
import CheckBoxOutline from 'taggle/CheckBoxOutline'
import CheckBoxInline from 'taggle/CheckBoxInline'

export default {
  data: function() {
    const styles = {
      root: {
        position: 'relative',
        height: '24px',
        width: '24px',
      },
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      trigger: true,
      zoom: {
        height: '200%',
        width: '200%',
        top: '-12px',
        left: '-12px'
      }
    }
  },
  props: {
    styleObj: Object
  },
  components: {
    CheckBoxOutline,
    CheckBoxInline,
    touchRipple
  },
  methods: {
    handleClick: function() {
      this.trigger = !this.trigger
    }
  }
}
</script>
