<template>
  <div :style="mRootStyle" @click="handleClick">
    <span :style="mThumbStyle">
    </span>
    <span :style="mCircleStyle">
      <touch-ripple :center=true v-if="!disabled" :style-obj="zoom"></touch-ripple>
    </span>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import touchRipple from 'touchRipple'

export default {
  data: function(){
    const styles = {
      root: {
        display: 'inline-block',
        height: '24px',
        width: '36px',
        position: 'relative',
        cursor: this.disabled ? 'default' : 'pointer'
      },
      thumb: {
        transition: Transitions.easeOut(),
        top: '50%',
        transform: 'translateY(-50%)',
        height: '14px',
        width: '100%',
        backgroundColor: this.disabled ? 'rgb(189, 189, 189)' : this.trigger ? 'rgba(0, 188, 212, 0.498039)' : 'rgb(189, 189, 189)',
        borderRadius: '30px',
        position: 'absolute'
      },
      circle: {
        transition: Transitions.easeOut(),
        borderRadius: '50%',
        backgroundColor: this.disabled ? '#e0e0e0' : this.trigger ? 'rgb(0, 188, 212)' : 'rgb(245, 245, 245)',
        top: '50%',
        left: this.disabled ? '0' : this.trigger ? '16px' : '0',
        transform: 'translateY(-50%)',
        height: '20px',
        width: '20px',
        position: 'absolute',
        boxShadow: zDepthShadows[0],
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mThumbStyle: Object.assign(styles.thumb, this.thumbStyle),
      mCircleStyle: Object.assign(styles.circle, this.circleStyle),
      zoom: {
        height: '200%',
        width: '200%',
        top: '-10px',
        left: '-10px'
      }
    }
  },
  watch: {
    trigger: function() {
      if (!this.disabled) {
        this.mThumbStyle.backgroundColor = this.trigger ? 'rgba(0, 188, 212, 0.498039)' : 'rgb(189, 189, 189)'
        this.mCircleStyle.backgroundColor = this.trigger ? 'rgb(0, 188, 212)' : 'rgb(245, 245, 245)'
        this.mCircleStyle.left = this.trigger ? '16px' : '0'
      }
    }
  },
  props: {
    styleObj: Object,
    trigger: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    circleStyle: Object,
    thumbStyle: Object
  },
  components: {
    touchRipple
  },
  methods: {
    handleClick: function() {
      this.trigger = !this.trigger
    }
  }
}
</script>
