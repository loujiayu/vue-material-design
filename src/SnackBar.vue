<template>
  <div :style="mRootStyle" v-show="open" transition="snack">
    <div :style="mSnackWrapper">
      <span :style="mMessageStyles">{{message}}</span>
      <base-button :style-obj="mUndoStyles" v-if="undo" label="UNDO" :hover=false></base-button>
    </div>
  </div>
</template>

<script type="text/javascript">

import BaseButton from 'BaseButton'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

export default {
  data: function(){
    const styles = {
      root: {
        minWidth: '288px',
        position: 'fixed',
        justifyContent: 'space-between',
        bottom: '0',
        willChange: 'transform',
        fontFamily: 'Roboto, sans-serif',
        left: '50%',
        whiteSpace: 'nowrap',
        backgroundColor: 'rgb(7, 7, 8)',
        transition: `${Transitions.easeOut('400ms', 'transform')},
                     ${Transitions.easeOut('400ms', 'visibility')}`,
      },
      snack: {
        display: 'flex',
        width: '100%',
        alignItems: 'center'
      },
      message: {
        textAlign: 'center',
        fontSize: '14px',
        color: 'white',
        padding: '14px 10px 14px 10px',
        verticalAlign: 'middle',
        letterSpacing: '0',
        textTransform: 'uppercase',
        flex: '1'
      },
      undo: {
        color: 'red',
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mSnackWrapper: styles.snack,
      mMessageStyles: Object.assign(styles.message, this.messageStyle),
      mUndoStyles: Object.assign(styles.undo, this.undoStyle)
    }
  },
  props: {
    open: Boolean,
    message: String,
    undo: Boolean,
    styleObj: Object,
    snackStyle: Object,
    messageStyle: Object,
    undoStyle: Object
  },
  components: {
    BaseButton
  },
  ready: function() {
    window.addEventListener('click',this.clickAway, true)
  },
  destroyed: function() {
    window.removeEventListener('click', clickAway)
  },
  watch: {
    open: function() {
      if (this.open) {
        setTimeout(() => { this.open = false }, 5000)
      }
    }
  },
  methods: {
    clickAway: function() {
      if (!(this.$el && this.$el.contains(event.target) ) && this.open) {
        this.open = false
      }
    }
  }
}
</script>

<style media="screen">
  .snack-transition {
    transform: translate(-50%, 0);
    visibility: visible;
  }
  .snack-enter,
  .snack-leave {
    visibility: hidden;
    transform: translate(-50%, 80px);
  }
</style>
