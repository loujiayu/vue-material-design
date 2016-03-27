<template>
  <div :style="originStyles" v-show="open" :class="className" transition="snack">
    <div :style="snackWrapper">
      <span :style="messageStyles">{{message}}</span>
      <base-button :style-obj="undoStyles" v-if="undo" label="UNDO" :hover=false></base-button>
    </div>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import BaseButton from 'BaseButton'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

export default {
  data: function(){
    return {
      originStyles: {
        minWidth: '288px',
        position: 'fixed',
        justifyContent: 'space-between',
        bottom: '0',
        willChange: 'transform',
        fontFamily: 'Roboto, sans-serif',
        left: '50%',
        backgroundColor: 'rgb(7, 7, 8)',
        transition: `${Transitions.easeOut('400ms', 'transform')},
                     ${Transitions.easeOut('400ms', 'visibility')}`,
      },
      mergedStyles:null,
      snackWrapper: {
        display: 'flex',
        width: '100%'
      },
      messageStyles: {
        textAlign: 'center',
        fontSize: '14px',
        color: 'white',
        padding: '14px 12px 14px 24px',
        verticalAlign: 'middle',
        letterSpacing: '0',
        textTransform: 'uppercase',
        flex: '1'
      },
      undoStyles: {
        color: 'red',
        width: '60px',
        flex: '1'
      }
    }
  },
  props: {
    open: Boolean,
    message: String,
    className: String,
    undo: Boolean,
    styleObj: Object
  },
  components: {
    BaseButton
  },
  created: function() {
    console.log(this.originStyles);
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
    console.log(this.mergedStyles);
  },
  ready: function() {
    window.addEventListener('click',this.clickAway)
  },
  destroyed: function() {
    window.removeEventListener('click', clickAway)
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
