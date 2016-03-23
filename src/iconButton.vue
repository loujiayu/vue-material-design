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
export default {
  data: function() {
    originStyles: {
      borderRadius: '50%',
      height: '48px',
      width: '48px',
      display: 'inline-block',
      position: 'relative',
      outline: 'none',
      textDecoration: 'none',
      overflow: 'hidden'
    }
  },
  props: {
    disabled: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    iconClass: String,
    backgroundColor: String
  },
  created: function() {
    this.mergedStyles = getStyles(this.style, this.originStyles)
  },
  components: {
    'touch-ripple': touchRipple
  },
  methods: {
    handleMouseEnter: function() {
    },
    handleMouseLeave: function() {
    },
    handleClick: function() {
    }
  }
}
</script>
