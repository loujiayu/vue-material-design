<template>
  <div :style="mRootStyle" @click="handleClick">
    <check-box-inline :trigger="trigger" v-if="!disabled"></check-box-inline>
    <check-box-outline :trigger="trigger" :disabled="disabled"></check-box-outline>
    <touch-ripple :style-obj="zoom" v-if="!disabled" :center=true></touch-ripple>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

import touchRipple from 'touchRipple'
import CheckBoxOutline from 'svg/CheckBoxOutline'
import CheckBoxInline from 'svg/CheckBoxInline'

export default {
  data: function() {
    const styles = {
      root: {
        display: 'inline-block',
        position: 'relative',
        height: '24px',
        width: '24px',
        cursor: this.disabled ? 'default' : 'pointer'
      },
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      zoom: {
        height: '200%',
        width: '200%',
        top: '-12px',
        left: '-12px'
      }
    }
  },
  props: {
    styleObj: Object,
    disabled: Boolean,
    trigger: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CheckBoxOutline,
    CheckBoxInline,
    touchRipple
  },
  methods: {
    handleClick: function() {
      if(!this.disabled) {
        this.trigger = !this.trigger
      }
    }
  }
}
</script>
