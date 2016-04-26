<template>
  <div :style="mRootStyle"
      v-bind="{disabled: disabled}"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick" >
    <tooltip
      v-if="tooltip"
      :note="msg"
      :message="tooltip"
      :vertical-position="verticalPosition"
      :horizontal-position="horizontalPosition"
    >
    </tooltip>
    <span :class="iconClass" :style="centerStyle"></span>
    <touch-ripple v-if="!disabled" :center=true v-ref:touch></touch-ripple>
  </div>
</template>

<script type="text/javascript">
import touchRipple from 'touchRipple'

import Tooltip from 'Tooltip'
import {baseTheme} from 'styles/muiTheme'

export default {
  data: function() {
    const { button } = baseTheme
    const styles = {
      root: {
        borderRadius: '50%',
        height: button.iconHeight,
        width: '48px',
        border: '10px',
        padding: '0',
        margin: '0',
        lineHeight: '48px',
        display: 'inline-block',
        position: 'relative',
        outline: 'none',
        textDecoration: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        cursor: this.disabled ? 'default' : 'pointer'
      },
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      centerStyle: {
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        lineHeight: '48px'
      },
      msg: false
    }
  },
  props: {
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
    styleObj: Object
  },
  components: {
    touchRipple,
    Tooltip
  },
  methods: {
    handleMouseEnter: function() {
      this.msg = true
    },
    handleMouseLeave: function() {
      this.msg = false
    },
    handleClick: function() {
      // if(event.stopPropagation) {
      //   event.stopPropagation();
      // } else if(event.cancelBubble) {
      //   event.cancelBubble = true
      // }
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
