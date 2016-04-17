<template>
  <div @click="handleClick($event)" :style="mRootStyle">
    <base-button
      v-ref:downb
      :disabled="disabled"
      :label="label"
      :style-obj="mButtonstyle"
      >
    </base-button>
    <div :style="mMenuStyles" v-show="open" transition="downSlide" v-if="!disabled">
      <slot name="downList"></slot>
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
    const styles = {
      root: {
        display: 'inline-block',
        position: 'relative',
        fontFamily: 'Roboto, sans-serif'
      },
      button: {
        display: 'block',
        width: '100%'
      },
      menu: {
        position:'absolute',
        display: 'inline-block',
        left: '0',
        top: '0',
        backgroundColor: 'white',
        willChange: 'transform',
        overflow: 'scroll',
        transition: Transitions.easeOut('550ms', ['max-height', 'opacity']),
        boxShadow: zDepthShadows[0],
        padding: '8px 0'
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mMenuStyles: Object.assign(styles.menu, this.menuStyle),
      mButtonstyle: this.buttonStyle,
      open: false
    }
  },
  props: {
    disabled: Boolean,
    label: String,
    buttonStyle: Object,
    styleObj: Object,
    menuStyle: Object
  },
  components: {
    BaseButton
  },
  ready: function() {
    window.addEventListener('click',this.clickAway)
    // locate menu position
    var height = this.$refs.downb.$el.offsetHeight
    // var {height, width} = this.$refs.downb.$el.getBoundingClientRect()
    this.mMenuStyles.top = `${height}px`
  },
  destroyed: function() {
    window.removeEventListener('click', clickAway)
  },
  methods: {
    handleClick: function(event) {
      if(event.stopPropagation) {
        event.stopPropagation();
      } else if(event.cancelBubble) {
        event.cancelBubble = true
      }
      if (!this.disabled) {
        this.open = true
      }
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
.downSlide-transition {
  max-height: 200px;
  opacity: 1;
  visibility: visible;
}
[slot="downList"] {
  width: 100%;
  display: block;
  text-align: left;
}
.downSlide-enter,
.downSlide-leave {
  max-height: 0;
  opacity: 0;
  visibility: hidden;
}
</style>
