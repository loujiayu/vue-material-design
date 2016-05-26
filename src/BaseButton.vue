<template>
  <div :style="mRootStyle"
      v-delayfocus="isIE"
      @focus="handleFocus($event)"
      @blur="handleBlur($event)"
      @touchstart="handleTouchStart($event)"
      @touchend="handleTouchEnd($event)"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      :tabIndex="keyboardFocus ? 0 : -1">
    <span v-if="label" :style="mLabelStyle" >{{label}}</span>
    <span v-if="iconClass" :class="iconClass" :style="mIconStyle"></span>
    <touch-ripple v-if="!disabled && ripple" :tab-pressed="focused"></touch-ripple>
  </div>
</template>

<script type="text/javascript">
import Event from 'utils/events'
import touchRipple from 'touchRipple.vue'
import Transitions from 'styles/transitions'
import ColorManipulator from 'styles/colorManipulator';
import {baseTheme} from 'styles/muiTheme'
import {zDepthShadows} from 'styles/common'
import { delayfocus } from 'utils/directive'
import { isIE } from 'utils/util'

export default {
  data: function() {
    const { button, disabledColor } = baseTheme
    const styles = {
      root: {
        minWidth: '58px',
        minHeight: button.height,
        height: '100%',
        position: 'relative',
        color: this.disabled ? disabledColor : 'none',
        direction: this.isIconFront ? 'rtl' : 'ltr',
        backgroundColor: this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)',
        boxSizing: "border-box",
        display: "inline-block",
        whiteSpace: 'nowrap',
        fontFamily: "Roboto, sans-serif",
        lineHeight: '36px',
        textDecoration: 'none',
        transition: Transitions.easeOut(),
        outline: 'none',
        overflow: 'hidden',
        cursor: this.disabled ? 'default' : 'pointer',
        borderRadius: '2px',
        boxShadow: this.shadowDepth && !this.disabled ? zDepthShadows[this.shadowDepth] : 'none'
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
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mLabelStyle: Object.assign(styles.label, this.labelStyle),
      mIconStyle: Object.assign(styles.icon, this.iconStyle),
      touch: false,
      tabPressed: false,
      tabListening: false,
      focused: false,
      forcusTimeout: null,
      isIE: !!isIE()
    }
  },
  props: {
    shadowDepth: {
      type: Number,
      default: -1
    },
    disabled: Boolean,
    label: String,
    onClick: Function,
    iconClass: String,
    backgroundColor: String,
    isIconFront: Boolean,
    keyboardFocus: {
      type: Boolean,
      default: true
    },
    isFloat: {
      type: Boolean,
      default: true
    },
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
    if (!this.tabListening) {
      Event.on(window, 'keydown', (event) => {
        this.tabPressed = Event.keyCodes.tab === event.keyCode
      })
      this.tabListening = true
    }
  },
  directives: {
    'delayfocus': delayfocus
  },
  methods: {
    // TODO: safari forcus issue..
    handleFocus: function() {
      // wait for keydown fire
      this.forcusTimeout = setTimeout(() => {
        if (this.tabPressed) {
          this.focused = true
        }
      }, 150)
    },
    cancelFocusTimeout: function() {
      if (this.forcusTimeout) {
        clearTimeout(this.forcusTimeout)
        this.forcusTimeout = null
      }
    },
    handleBlur: function() {
      this.tabPressed = false
      this.focused = false
      this.cancelFocusTimeout()
    },
    handleMouseEnter: function() {
      // disable hover for mobile device
      if (this.touch || this.disabled) {
        this.hover = false
      }
      if (this.hover) {
        if (this.backgroundColor) {
          this.$el.style.backgroundColor = ColorManipulator.fade(this.backgroundColor, 0.8)
        } else {
          this.$el.style.backgroundColor = baseTheme.defaultActiveColor
        }
      }
    },
    handleMouseLeave: function() {
      if (this.hover) {
        this.$el.style.backgroundColor = this.backgroundColor ? this.backgroundColor : 'rgba(0, 0, 0, 0)'
      }
    },
    handleTouchStart: function(event) {
      this.touch = true
      if (this.isFloat) {
        this.mRootStyle.boxShadow = zDepthShadows[this.shadowDepth + 1]
      }
    },
    handleTouchEnd: function(event) {
      if (this.isFloat) {
        this.mRootStyle.boxShadow = zDepthShadows[this.shadowDepth]
      }
    },
    handleClick: function() {
      this.tabPressed = false
      this.focused = false
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
