<template>
  <div @click="handleClick($event)" :style="mRootStyle">
    <base-button
      v-ref:downb
      :disabled="disabled"
      :label="label"
      :style-obj="mButtonstyle"
      >
    </base-button>
    <popover :open="open" :style-obj="mMenuStyle" v-if="!disabled" :vertical-animation="true">
      <slot name="downList" slot="popover"></slot>
    </popover>
  </div>
</template>

<script type="text/javascript">
import Event from 'utils/events'
import BaseButton from 'BaseButton'
import Popover from 'Popover'
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
        transformOrigin: '50% 0%'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mMenuStyle: Object.assign(styles.menu, this.menuStyle),
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
    Popover,
    BaseButton
  },
  ready: function() {
    Event.on(window, 'click', this.clickAway)
    // locate menu position
    var height = this.$refs.downb.$el.offsetHeight
    this.mMenuStyle.top = `${height}px`
  },
  destroyed: function() {
    Event.off(window, 'click', this.clickAway)
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
