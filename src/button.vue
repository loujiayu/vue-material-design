<template>
  <button :style="mergedStyles"
      v-bind="{disabled: disabled}"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick" >
    <span v-if="label" :style="labelStyle">{{label}}</span>
    <span v-if="iconClass" :class="iconClass" :style="iconStyle"></span>
    <touch-ripple v-if="!disabled"></touch-ripple>
  </button>
</template>

<script type="text/javascript">
import getStyles from './utils/getStyles'
import Transitions from './styles/transitions'
import touchRipple from './touchRipple'
import {zDepthShadows} from './styles/common'

export default {
  data: function() {
    return {
      originStyles: {
        width: '88px',
        height: '36px',
        lineHeight: '36px',
        border: '11px',
        padding: '0',
        position: 'relative',
        direction: this.iconFront ? 'rtl' : 'ltr',
        backgroundColor: this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)',
        boxSizing: "border-box",
        display: "inline-block",
        fontFamily: 'Roboto, sans-serif',
        outline: 'none',
        textDecoration: 'none',
        transition: Transitions.easeOut(),
        overflow: 'hidden',
        borderRadius: '2px',
        boxShadow: this.shadowDepth&&!this.disabled ? zDepthShadows[this.shadowDepth-1] : 'none'
      },
      mergedStyles: null,
      labelStyle: {
        fontSize: '14px',
        letterSpacing: '0',
        color: this.labelColor
      },
      iconStyle: {
        verticalAlign: 'middle',
      }
    }
  },
  props: {
    shadowDepth: Number,
    disabled: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    label: String,
    iconClass: String,
    backgroundColor: String,
    iconFront: Boolean,
    labelColor: String
  },
  created: function() {
    this.mergedStyles = getStyles(this.style, this.originStyles)
  },
  components: {
    'touch-ripple': touchRipple
  },
  methods: {
    handleMouseEnter: function() {
      this.$el.style.backgroundColor = 'rgb(125, 121, 136)'
    },
    handleMouseLeave: function() {
      this.$el.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    },
    handleClick: function() {
      // this.cursur += '<div></div>'
    }
  }
}
</script>
