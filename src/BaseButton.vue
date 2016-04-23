<template>
  <div :style="mRootStyle"
      v-bind="{disabled: disabled}"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick" >
    <span v-if="label" :style="mLabelStyle" @click="testclick($event)">{{label}}</span>
    <span v-if="iconClass" :class="iconClass" :style="mIconStyle"></span>
    <touch-ripple v-if="!disabled && ripple"></touch-ripple>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import touchRipple from 'touchRipple'
import Transitions from 'styles/transitions'
import ColorManipulator from 'styles/colorManipulator';
import {baseTheme} from 'styles/muiTheme'
import {zDepthShadows} from 'styles/common'

export default {
  data: function() {
    const {button} = baseTheme
    const styles = {
      root: {
        minWidth: '58px',
        minHeight: button.height,
        height: '100%',
        border: '11px',
        padding: '0',
        margin: '0',
        position: 'relative',
        direction: this.isIconFront ? 'rtl' : 'ltr',
        backgroundColor: this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)',
        boxSizing: "border-box",
        display: "inline-block",
        whiteSpace: 'nowrap',
        fontFamily: "Roboto, sans-serif",
        outline: 'none',
        lineHeight: '36px',
        textDecoration: 'none',
        transition: Transitions.easeOut(),
        overflow: 'hidden',
        cursor: this.disabled ? 'default' : 'pointer',
        borderRadius: '2px',
        boxShadow: this.shadowDepth&&!this.disabled ? zDepthShadows[this.shadowDepth-1] : 'none'
      },
      label: {
        fontSize: '14px',
        letterSpacing: '0',
        paddingLeft: '24px',
        paddingRight: '24px',
        fontWeight: '600'
      },
      icon: {
        verticalAlign: 'middle',
        marginLeft: this.isIconFront ? '10px' : '0',
        marginRight: this.isIconFront ? '0' : '10px'
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mLabelStyle: getStyles(styles.label, this.labelStyle),
      mIconStyle: getStyles(styles.icon, this.iconStyle)
    }
  },
  props: {
    shadowDepth: Number,
    disabled: Boolean,
    label: String,
    onClick: Function,
    iconClass: String,
    backgroundColor: String,
    isIconFront: Boolean,
    hover: {
      type: Boolean,
      default: true
    },
    link: String,
    styleObj: Object,
    labelStyle: Object,
    iconStyle: Object,
    ripple: {
      type: Boolean,
      default: true
    }
  },
  components: {
    touchRipple
  },
  ready: function() {
  },
  methods: {
    testclick: function() {
      console.log('test click');
    },
    handleMouseEnter: function() {
      if (this.hover) {
        if (this.backgroundColor) {
          this.$el.style.backgroundColor = ColorManipulator.fade(this.backgroundColor, 0.8)
        } else {
          this.$el.style.backgroundColor = 'rgba(163, 163, 163, 0.71)';
        }
      }
    },
    handleMouseLeave: function() {
      if (this.hover) {
        this.$el.style.backgroundColor = this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)'
      }
    },
    handleClick: function() {
      console.log('my button ');
      if (this.disabled) {
        return
      }
      if (this.link && this.link.startsWith('http')) {
        window.open(this.link)
      } else if (this.link) {
        console.warn(`${this.link} is not a valid URL`)
      }
      if (this.onClick) {this.onClick()}
    }
  }
}
</script>
