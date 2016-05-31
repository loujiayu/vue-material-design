<template >
  <div >
    <div class="mask" v-show="!docked && open" transition="mask"></div>
    <div :style="mRootStyle" @click="handleClick($event)" v-show="open" transition="slide">
      <slot name="menuList"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import Event from 'utils/events'
import touchRipple from 'touchRipple'
import Transitions from 'styles/transitions'
import {baseTheme} from 'styles/muiTheme'
import {zDepthShadows} from 'styles/common'

export default {
  data: function() {
    const styles = {
      root: {
        height:'100%',
        width: '150px',
        position: 'fixed',
        top: '0',
        left: '0',
        backgroundColor: 'white',
        fontFamily: 'Roboto, sans-serif',
        willChange: 'transform',
        transition: Transitions.easeOut('200ms', 'transform', ''),
        boxShadow: zDepthShadows[this.shadowDepth - 1],
        height: '100%',
        overflowY: 'auto',
        zIndex: '1'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      added: false
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
      Event.on(window, 'click', this.clickAway,true)

      this.added = true
    }
  },
  destroyed: function() {
    if (!this.docked) {
      Event.off(window, 'click', this.clickAway,true)
    }
  },
  watch: {
    open: function() {
      if (this.open && !this.docked) {
        Event.on(window, 'click', this.clickAway,true)
      } else {
        Event.off(window, 'click', this.clickAway,true)
      }
    }
  },
  methods: {
    clickAway: function(event) {
      if (!(this.$el.children[1] && this.$el.children[1].contains(event.target) ) && this.open && !this.docked) {
        this.open = false
      }
    },
    handleClick: function(event) {
      var itemNode = event.target.closest('[slot="menuList"]')
      if (!this.docked && itemNode.contains(event.target)) {
        this.open=false
      }
    },
  }
}
</script>

<style media="screen">
.mask {
  top: 0;
  right: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
  transition-duration: .5s;
}
.mask-transition {
  opacity: 1;
}
.mask-enter,
.mask-leave {
  opacity: 0;
}
.slide-transition {
  transform: translateX(0);
}
.slide-enter,
.slide-leave {
  transform: translateX(-100%);
}
</style>
