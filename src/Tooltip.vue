<template>
  <div :style="mergedStyles" v-show="note" transition="tooltip" @click="handleClick">
    {{message}}
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

export default {
  data: function(){
    return {
      originStyles: {
        position: 'absolute',
        color: '#fff',
        fontSize: '10px',
        // lineHeight: '22px',
        fontFamily: 'Roboto, sans-serif',
        overflow: 'hidden',
        minWidth: '50px',
        maxWidth: '150px',
        fontWeight: '500',
        backgroundColor: 'rgba(97, 97, 97, .9)',
        borderRadius: '2px',
        willChange: 'transform',
        padding: '8px',
        transformOrigin: `${this.verticalPosition} ${this.horizontalPosition}`,
        transition: Transitions.easeOut('150ms',null),
        top: this.verticalPosition==='top' ? '100%' : '-50%',
        left: this.horizontalPosition==='left' ? '0' :
              this.horizontalPosition==='center' ? '-50%' : '-100%',
      },
      mergedStyles:null
    }
  },
  props: {
    styleObj: Object,
    note: Boolean,
    message: String,
    verticalPosition: {
      type: String,
      default: 'top'
    },
    horizontalPosition: {
      type: String,
      default: 'left'
    }
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  },
  methods: {
    handleClick: function() {
      this.$parent.$refs.touch.$el.click()
    }
  }
}
</script>
<style media="screen">
.tooltip-transition {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.tooltip-enter,
.tooltip-leave {
  visibility: hidden;
  opacity: 0;
  transform: scale(0);
}
</style>
