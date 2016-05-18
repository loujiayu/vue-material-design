<template>
  <div v-show="open" transition="dialog" :style="mRootStyle">
    <div :style="mContentStyle" @click="clickAway($event)">
      <div :style="mWrapperStyle">
        <h3 v-if="title">{{title}}</h3>
        <slot name="dialogBody"></slot>
        <div :style="mActionStyle">
          <slot name="dialogAction"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

import Event from 'utils/events'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import { isIE } from 'utils/util'

export default {
  data: function() {
    let useFlexbox = isIE() > 9
    const styles = {
      root: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: '100vh',
        zIndex: '2',
      },
      content: {
        display: useFlexbox ? '-ms-flexbox' : 'flex',
        justifyContent: 'center',
        MsFlexPack: 'center',
        alignItems: 'center',
        MsFlexAlign: 'center',
        width: '100%',
        height: '100%'
      },
      wrapper: {
        backgroundColor: 'white',
        width: '70%',
        textAlign: 'left',
        padding: '20px'
      },
      action: {
        display: 'block',
        float: 'right',
        padding: '10px',
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mWrapperStyle: Object.assign(styles.wrapper, this.wrapperStyle),
      mActionStyle: styles.action,
      mContentStyle: styles.content
    }
  },
  props: {
    styleObj: Object,
    title: String,
    wrapperStyle: Object,
    open: false
  },
  watch: {
    open: function() {
      if (this.open) {
        Event.on(window, 'keydown', this.escKeyDown)
      } else {
        Event.off(window, 'keydown', this.escKeyDown)
      }
    }
  },
  beforeCompile: function() {
    this.open && Event.on(window, 'keydown', this.escKeyDown)
  },
  methods: {
    clickAway: function(event) {
      var panel = this.$el.children[0].children[0]
      if (!(panel.contains(event.target)) && this.open) {
        this.open = false
      }
    },
    escKeyDown: function(event) {
      if (Event.keyCodes.esc === event.keyCode) {
        this.open = false
      }
    }
  }
}
</script>
<style media="screen">
.dialog-transition {
  opacity: 1;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);*/
  transform: scale(1);
}
.dialog-leave,
.dialog-enter {
  opacity: 0;
  transform: scale(1.1);
}
</style>
