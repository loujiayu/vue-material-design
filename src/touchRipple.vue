<template>
  <div :style="originStyle"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <div v-for="ripple in ripples" :style="ripple.style" transition="touch"></div>
  </div>
</template>

<script type="text/javascript">
import getStyles from './utils/getStyles'
import Transitions from './styles/transitions'

function calcDiag(a, b) {
  return Math.sqrt((a * a) + (b * b))
}

export default {
  data: function() {
    return {
      originStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        overflow: 'hidden'
      },
      mergedStyles: null,
      ripples: [],
      centerStyle: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        transition: `${Transitions.easeOut('2s', 'opacity')}, ${
        Transitions.easeOut('1s', 'transform')}`,
        backgroundColor: 'rgb(251, 158, 53)'
      }
    }
  },
  props: {
    center: Boolean
  },
  methods: {
    handleMouseDown: function(event) {
      this.addRipple(event)
    },
    handleMouseUp: function() {
      // this.removeRipple(event)
    },
    addRipple: function(event) {
      const ripple = Object.create(null)
      ripple.style = this.center ? getStyles(this.centerStyle, null) : this.getRippleStyle(event)
      this.ripples.push(ripple)
      setTimeout(() => this.ripples.shift(), 2000)
      console.log('add one');
    },
    removeRipple: function(event) {

    },
    getRippleStyle(event) {
      const style = Object.create(null)
      const el = this.$el
      const elHeight = el.offsetHeight
      const elWidth = el.offsetWidth
      const rect = el.getBoundingClientRect()
      const offsetTop = rect.top + document.body.scrollTop
      const offsetLeft = rect.left + document.body.scrollLeft
      const isTouchEvent = event.touches && event.touches.length;
      const pageX = isTouchEvent ? event.touches[0].pageX : event.pageX;
      const pageY = isTouchEvent ? event.touches[0].pageY : event.pageY;
      const pointerX = pageX - offsetLeft;
      const pointerY = pageY - offsetTop;
      const topLeftDiag = calcDiag(pointerX, pointerY);
      const topRightDiag = calcDiag(elWidth - pointerX, pointerY);
      const botRightDiag = calcDiag(elWidth - pointerX, elHeight - pointerY);
      const botLeftDiag = calcDiag(pointerX, elHeight - pointerY);
      const rippleRadius = Math.max(
        topLeftDiag, topRightDiag, botRightDiag, botLeftDiag
      );
      const rippleSize = rippleRadius * 2;
      const left = pointerX - rippleRadius;
      const top = pointerY - rippleRadius;

      style.height = `${rippleSize}px`;
      style.width = `${rippleSize}px`;
      style.top = `${top}px`;
      style.left = `${left}px`;

      return getStyles(this.centerStyle, style)
    }
  }
}
</script>

<style media="screen">
.touch-transition {
  transform: scale(1);
  opacity: 0;
}
.touch-enter {
  transform: scale(0);
  opacity:1
}
</style>
