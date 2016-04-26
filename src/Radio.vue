<template>
  <div :style="mRootStyle" @click="handleClick">
    <input :style="mInputStyle" type="checkbox" :id="labelId">
    <radio-checked :trigger="trigger" v-if="!disabled"></radio-checked>
    <radio-unchecked :trigger="trigger" :disabled="disabled"></radio-unchecked>
    <touch-ripple :style-obj="zoom" v-if="!disabled" :center=true></touch-ripple>
  </div>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

import touchRipple from 'touchRipple'
import RadioChecked from 'svg/RadioChecked'
import RadioUnchecked from 'svg/RadioUnchecked'

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
      input: {
        position: 'absolute',
        opacity: '0',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mInputStyle: styles.input,
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
    labelId: String,
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
