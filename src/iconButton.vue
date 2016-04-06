<template>
  <button :style="mRootStyle"
      v-bind="{disabled: disabled}"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick" >
    <tooltip v-if="tooltip" :note="msg" :message="tooltip"></tooltip>
    <span :class="iconClass"></span>
    <touch-ripple v-if="!disabled" :center=true v-ref:touch></touch-ripple>
  </button>
</template>

<script type="text/javascript">
import touchRipple from 'touchRipple'
import getStyles from './utils/getStyles'
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
        display: 'inline-block',
        position: 'relative',
        outline: 'none',
        textDecoration: 'none',
        // overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0)',
        cursor: 'pointer'
      },
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      msg: true
    }
  },
  props: {
    disabled: Boolean,
    tooltip: String,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    iconClass: String,
    backgroundColor: String,
    link: String,
    styleObj: Object
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
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

      if (this.link && this.link.startsWith('http')) {
        window.open(link)
      } else if (this.link) {
        console.warn(`${this.link} is not a valid URL`)
      }
      console.log('icon button click');
      if (this.onClick) { this.onClick() }

    }
  }
}
</script>
