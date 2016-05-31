<template>
  <div :style="mRootStyle"
    @click="handleClick"
    @touchstart="handleTouchStart($event)"
    @touchend="handleTouchEnd($event)"
  >
    <div v-show="tabPressed" :style="tabRippleStyle" transition="tab"></div>
    <div v-for="ripple in ripples" :style="ripple.style" transition="touch"></div>
  </div>
</template>

<script type="text/javascript">
import Transitions from './styles/transitions'
import {baseTheme} from 'styles/muiTheme'

function calcDiag(a, b) {
  return Math.sqrt((a * a) + (b * b))
}

export default {
  data: function() {
    const styles = {
      root: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: '0',
        left: '0',
        overflow: 'hidden'
      },
      center: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
        transition: `${Transitions.easeOut('2s', 'opacity')}, ${
          Transitions.easeOut('1s', 'transform')}`,
        backgroundColor: baseTheme.defaultActiveColor
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      ripples: [],
      centerStyle: styles.center,
      tabRippleStyle: {},
    }
  },
  props: {
    styleObj: Object,
    center: Boolean,
    tabPressed: Boolean
  },
  ready: function() {
    this.tabRippleStyle = this.getRippleStyle(null, true)
  },
  methods: {
    handleClick: function(event) {
      console.log('fire click');
      event.preventDefault()
      this.addRipple(event)
    },
    handleTouchStart: function(event) {
      if (event.touches) {
        this.firstTouchY = event.touches[0].clientY;
        this.firstTouchX = event.touches[0].clientX;
        this.startTime = Date.now()
      }
    },
    handleTouchEnd: function(event) {
      const deltaY = Math.abs(event.changedTouches[0].clientY - this.firstTouchY)
      const deltaX = Math.abs(event.changedTouches[0].clientX - this.firstTouchX)
      if (deltaY < 6 && deltaX < 6) {
        this.addRipple(event)
      }
    },
    addRipple: function(event) {
      const ripple = Object.create(null)
      ripple.style = this.center ? this.centerStyle : this.getRippleStyle(event)
      this.ripples.push(ripple)
      setTimeout(() => {
        this.ripples.shift()
      }, 2000)
    },
    getRippleStyle(event, focus) {
      const style = Object.create(null)
      const el = this.$el
      const elHeight = el.offsetHeight
      const elWidth = el.offsetWidth
      const rect = el.getBoundingClientRect()
      const offsetTop = rect.top + document.body.scrollTop
      const offsetLeft = rect.left + document.body.scrollLeft
      const isTouchEvent = event && event.touches && event.touches.length
      const pageX = isTouchEvent ? event.touches[0].pageX : focus ? elWidth/2 + offsetLeft : event.pageX
      const pageY = isTouchEvent ? event.touches[0].pageY : focus ? elHeight/2 + offsetTop : event.pageY
      const pointerX = pageX - offsetLeft
      const pointerY = pageY - offsetTop
      const topLeftDiag = calcDiag(pointerX, pointerY)
      const topRightDiag = calcDiag(elWidth - pointerX, pointerY)
      const botRightDiag = calcDiag(elWidth - pointerX, elHeight - pointerY)
      const botLeftDiag = calcDiag(pointerX, elHeight - pointerY)
      const rippleRadius = Math.max(
        topLeftDiag, topRightDiag, botRightDiag, botLeftDiag
      )
      const rippleSize = rippleRadius * 2
      const left = pointerX - rippleRadius
      const top = pointerY - rippleRadius

      style.height = `${rippleSize}px`
      style.width = `${rippleSize}px`
      style.top = `${top}px`
      style.left = `${left}px`

      return Object.assign({},this.centerStyle, style)
    }
  }
}
</script>

<style media="screen">
.tab-transition {
  animation-name: forcus;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(.42, 0, .58, 1);
  animation-iteration-count: infinite;
  animation-duration: 1s;
}
.tab-enter,
.tab-leave {
  transform: scale(0);
  opacity: 0;
}
.touch-transition {
  transform: scale(1);
  opacity: 0;
}
.touch-enter {
  transform: scale(0);
  opacity:1;
}

@keyframes forcus{
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(.65);
  }
  100% {
    transform: scale(0.5);
  }
}
</style>
