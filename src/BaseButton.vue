<template>
  <div :style="mRootStyle"
      v-bind="{disabled: disabled}"
      @focus="handleForcus($event)"
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
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mLabelStyle: Object.assign(styles.label, this.labelStyle),
      mIconStyle: Object.assign(styles.icon, this.iconStyle),
      touch: false,
      tabPressed: false,
      tabListening: false,
      focused: false,
      forcusTimeout: null
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
    keyboardFocus: {
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
  methods: {
    // TODO: safari forcus issue..
    handleForcus: function() {
      this.forcusTimeout = setTimeout(() => {
        if (this.tabPressed) {
          this.focused = true
        }
      }, 150)

      console.log(`${this.label} forcus`);
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
      if (cancelFocusTimeout)
      console.log(`${this.label} blur haha`);
    },
    handleMouseEnter: function() {
      // disable hover for mobile device
      if (this.touch) {
        this.hover = false
      }
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
    handleTouchStart: function(event) {
      this.touch = true
    },
    handleTouchEnd: function(event) {

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
