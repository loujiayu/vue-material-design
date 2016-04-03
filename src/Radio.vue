<template>
  <div :style="mRootStyle" @click="handleClick">
    <radio-checked :trigger="trigger" v-if="!disabled"></radio-checked>
    <radio-unchecked :trigger="trigger" :disabled="disabled"></radio-unchecked>
    <touch-ripple :style-obj="zoom" v-if="!disabled" :center=true></touch-ripple>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

import touchRipple from 'touchRipple'
import RadioChecked from 'svg/RadioChecked'
import RadioUnchecked from 'svg/RadioUnchecked'

export default {
  data: function() {
    const styles = {
      root: {
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
    trigger: {
      type: Boolean,
      default: false
    },
    disabled: Boolean
  },
  components: {
    RadioChecked,
    RadioUnchecked,
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
