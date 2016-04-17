<template >
  <div :style="mRootStyle" v-show="open" transition="slide">
    <div :style="mMuneStyle">
      <slot name="menuList"></slot>
    </div>
    <div class="mask" v-if="!docked" v-show="open" transition="mask">
    </div>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import touchRipple from 'touchRipple'
import Transitions from 'styles/transitions'
import {baseTheme} from 'styles/muiTheme'
import {zDepthShadows} from 'styles/common'

export default {
  data: function() {
    const styles = {
      root: {
        height:'100%',
        width: '256px',
        position: 'fixed',
        top: '0',
        backgroundColor: 'white',
        transition: Transitions.easeOut('200ms', 'left', ''),
        fontFamily: 'Roboto, sans-serif',
        boxShadow: zDepthShadows[this.shadowDepth - 1],
      },
      munu: {
        width: '100%',
        height: '100%',
        overflowY: 'scroll',
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mMuneStyle: styles.menu
    }
  },
  props: {
    shadowDepth: {
      type: Number,
      default: 1
    },
    open: Boolean,
    styleObj: Object,
    docked: {
      type: Boolean,
      default: true
    }
  },
  created: function() {
    if (!this.docked) {
      window.addEventListener('click',this.clickAway, true)
    }
  },
  destroyed: function() {
    if (!this.docked) {
      window.removeEventListener('click', this.clickAway)
    }
  },
  // watch: {
  //   open: function() {
  //     if (!this.docked) {
  //       if (this.open) {
  //         document.body.style.backgroundColor = 'rgba(0,0,0,.3)'
  //       } else {
  //         document.body.style.backgroundColor = ''
  //       }
  //     }
  //   }
  // },
  methods: {
    clickAway: function(event) {
      if (!(this.$el.children[0] && this.$el.children[0].contains(event.target) ) && this.open) {
        this.open = false
      }
    }
  }
}
</script>

<style media="screen">
.mask {
  top: 0;
  right: 0;
  position: fixed;
  width: calc(100% - 256px);
  height: 100%;
  will-change: background-color;
  transition-property: background-color;
  transition-timing-function: ease-out;
  transition-duration: .5s;
}
.mask-transition {
  background-color: rgba(0, 0, 0, 0.5);
}
.mask-enter,
.mask-leave {
  background-color: rgba(0, 0, 0, 0);
}
.slide-transition {
  left: 0;
}
.slide-enter,
.slide-leave {
  left: -256px;
}
</style>
