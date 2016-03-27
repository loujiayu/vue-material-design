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
import getStyles from 'utils/getStyles'
import touchRipple from 'touchRipple'
import Transitions from 'styles/transitions'
import {baseTheme} from 'styles/muiTheme'
import {zDepthShadows} from 'styles/common'

export default {
  data: function() {
    const {button} = baseTheme
    return {
      originStyles: {
        minWidth: '58px',
        width: '100%',
        minHeight: button.height,
        border: '11px',
        padding: '0',
        margin: '0',
        position: 'relative',
        direction: this.iconFront ? 'rtl' : 'ltr',
        backgroundColor: this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)',
        boxSizing: "border-box",
        display: "block",
        fontFamily: 'Roboto, sans-serif',
        outline: 'none',
        textDecoration: 'none',
        transition: Transitions.easeOut(),
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '5px',
        boxShadow: this.shadowDepth&&!this.disabled ? zDepthShadows[this.shadowDepth-1] : 'none'
      },
      mergedStyles: null,
      labelStyle: {
        fontSize: '14px',
        letterSpacing: '0',
        color: this.labelColor,
        paddingLeft: '24px',
        paddingRight: '24px'
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
    labelColor: String,
    hover: Boolean,
    link: String,
    styleObj: Object
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles,this.styleObj)
  },
  components: {
    touchRipple
  },
  ready: function() {
    console.log('obj');
  },
  methods: {
    handleMouseEnter: function() {
      if (this.hover) {
        this.$el.style.backgroundColor = 'rgb(125, 121, 136)'
      }
    },
    handleMouseLeave: function() {
      if (!this.hover) {
        this.$el.style.backgroundColor = 'rgba(0, 0, 0, 0)'
      }
    },
    handleClick: function() {
      console.log('inside button');
      if (this.link && this.link.startsWith('http')) {
        window.open(link)
      } else if (this.link) {
        console.warn(`${this.link} is not a valid URL`)
      }
      // this.onClick && this.onClick
      // this.cursur += '<div></div>'
    }
  }
}
</script>
