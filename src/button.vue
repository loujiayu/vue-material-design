<template>
  <button :style="mergedStyles"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick" >
    <touch-ripple></touch-ripple>
  </button>
</template>

<script type="text/javascript">
import getStyles from './utils/getStyles'
import Transitions from './styles/transitions'
import touchRipple from './touchRipple'

export default {
  data: function() {
    return {
      originStyles: {
        width: '88px',
        height: '36px',
        border: '11px',
        position: 'relative',
        backgroundColor: 'rgb(223, 232, 227)',
        boxSizing: "border-box",
        display: "inline-block",
        fontFamily: 'Roboto, sans-serif',
        outline: 'none',
        textDecoration: 'none',
        transition: Transitions.easeOut(),
        overflow: 'hidden'
      },
      mergedStyles: null
    }
  },
  props: {
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    cursur: String
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
      this.$el.style.backgroundColor = 'rgb(223, 232, 227)'
    },
    handleClick: function() {
      // this.cursur += '<div></div>'
    }
  }
}
</script>
