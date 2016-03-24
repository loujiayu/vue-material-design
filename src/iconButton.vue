<template>
  <button :style="mergedStyles"
      v-bind="{disabled: disabled}"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick" >
    <span :class="iconClass"></span>
    <touch-ripple v-if="!disabled" :center=true></touch-ripple>
  </button>
</template>

<script type="text/javascript">
import touchRipple from './touchRipple'
import getStyles from './utils/getStyles'
import {baseTheme} from 'styles/muiTheme'

export default {
  data: function() {
    const { button } = baseTheme
    return {
      originStyles: {
        borderRadius: '50%',
        height: button.iconHeight,
        width: '48px',
        border: '10px',
        display: 'inline-block',
        position: 'relative',
        outline: 'none',
        textDecoration: 'none',
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0)',
        cursor: 'pointer'
      }
    }
  },
  props: {
    disabled: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    iconClass: String,
    backgroundColor: String,
    link: String
  },
  created: function() {
    this.mergedStyles = getStyles(this.style, this.originStyles)
  },
  components: {
    touchRipple
  },
  methods: {
    handleMouseEnter: function() {
    },
    handleMouseLeave: function() {
    },
    handleClick: function() {
      if (this.link && this.link.startsWith('http')) {
        window.open(link)
      } else if (this.link) {
        console.warn(`${this.link} is not a valid URL`)
      }
    }
  }
}
</script>
