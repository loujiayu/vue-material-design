<template>
  <div :style="mRootStyle"
      v-delayfocus="true"
      @focus="handleFocus($event)"
      @blur="handleBlur($event)"
      @touchstart="handleTouchStart($event)"
      @touchend="handleTouchEnd($event)"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      :tabIndex="keyboardFocus ? 0 : -1">
    <tooltip
      v-if="tooltip"
      :note="msg"
      :message="tooltip"
      :vertical-position="verticalPosition"
      :horizontal-position="horizontalPosition">
    </tooltip>

    <span :class="iconClass" :style="centerStyle"></span>
    <touch-ripple v-ref:touch :tab-pressed="focused" v-if="!disabled" :center="true" ></touch-ripple>
  </div>
</template>

<script type="text/javascript">
import Event from 'utils/events'
import touchRipple from 'touchRipple'
import {zDepthShadows} from 'styles/common'
import Tooltip from 'Tooltip'
import {baseTheme} from 'styles/muiTheme'
import { delayfocus } from 'utils/directive'
export default {
  data: function() {
    const { button, disabledColor } = baseTheme
    const styles = {
      root: {
        borderRadius: '50%',
        height: button.iconHeight,
        width: '48px',
        border: '10px',
        lineHeight: '48px',
        display: 'inline-block',
        position: 'relative',
        color: this.disabled ? disabledColor : 'none',
        outline: 'none',
        textDecoration: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        cursor: this.disabled ? 'default' : 'pointer',
        boxShadow: this.shadowDepth && !this.disabled ? zDepthShadows[this.shadowDepth] : 'none'
      },
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      centerStyle: {
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        lineHeight: '48px'
      },
      msg: false,
      tabPressed: false,
      tabListening: false,
      focused: false,
      forcusTimeout: null
    }
  },
  props: {
    shadowDepth: {
      type: Number,
      default: -1
    },
    disabled: Boolean,
    tooltip: String,
    verticalPosition: {
      type: String,
      default: "bottom"
    },
    horizontalPosition: {
      type: String,
      default: "left"
    },
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    iconClass: String,
    link: String,
    styleObj: Object,
    keyboardFocus: {
      type: Boolean,
      default: true
    },
    isFloat: {
      type: Boolean,
      default: true
    },
  },
  components: {
    touchRipple,
    Tooltip
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
    handleTouchStart: function(event) {
      if (this.isFloat) {
        this.mRootStyle.boxShadow = zDepthShadows[this.shadowDepth + 1]
      }
    },
    handleTouchEnd: function(event) {
      if (this.isFloat) {
        this.mRootStyle.boxShadow = zDepthShadows[this.shadowDepth]
      }
    },
    handleMouseEnter: function() {
      if (!this.disabled) {
        this.msg = true
      }
    },
    handleMouseLeave: function() {
      if (!this.disabled) {
        this.msg = false
      }
    },
    handleClick: function() {
      if (this.disabled) {
        return
      }
      if (this.link && this.link.startsWith('http')) {
        window.open(this.link)
      } else if (this.link) {
        console.warn(`${this.link} is not a valid URL`)
      }
      if (this.onClick) { this.onClick() }

    }
  }
}
</script>
