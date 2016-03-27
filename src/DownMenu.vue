<template>
  <div @click="handleClick($event)" :style="originStyles">
    <base-button
      v-ref:downb
      :disabled="disabled"
      :label="label"
      :label-color="labelColor"
      :style="style"
      >
    </base-button>
    <div :style="menuStyles" v-show="open" transition="downSlide">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import BaseButton from 'BaseButton'
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

export default {
  data: function() {
    return {
      originStyles: {
        display: 'inline-block',
        position: 'relative',
        fontFamily: 'Roboto, sans-serif'
      },
      menuStyles: {
        position:'absolute',
        display: 'inline-block',
        left: '0',
        willChange: 'transform',
        overflow: 'scroll',
        transition: Transitions.easeOut('550ms', ['max-height', 'opacity']),
        boxShadow: zDepthShadows[0],
        padding: '8px 0'
      },
      menuWrapper: {
        position:'absolute',
        visibility: 'hidden',
        display: 'inline-block',
        left: '0',
      },
      open: false,
      mergedStyles: null
    }
  },
  props: {
    disabled: Boolean,
    label: String,
    labelColor: String,
    styleObj: Object
  },
  components: {
    BaseButton
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  },
  ready: function() {
    window.addEventListener('click',this.clickAway)
    const {height, width} = this.$refs.downb.$el.getBoundingClientRect()
    this.menuStyles.top = `${height}px`
  },
  destroyed: function() {
    window.removeEventListener('click', clickAway)
  },
  methods: {
    handleClick: function(event) {
      console.log('fasiufiusacm@!#~');
      if(event.stopPropagation) {
        event.stopPropagation();
      } else if(event.cancelBubble) {
        event.cancelBubble = true
      }
      this.open = true
    },
    clickAway: function() {
      if (!(this.$el && this.$el.contains(event.target) ) && this.open) {
        this.open = false
      }
    }
  }
}
</script>

<style media="screen">
/*.downSlide-enter*/
.downSlide-transition {
  max-height: 200px;
  opacity: 1;
  visibility: visible;
}
.downSlide-enter,
.downSlide-leave {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
}
</style>
