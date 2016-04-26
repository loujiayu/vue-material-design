<template>
  <div :style="mRootStyle" @click="handleClick">
    {{message}}
  </div>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

export default {
  data: function() {
    const styles = {
      root: {
        position: 'absolute',
        color: '#fff',
        fontSize: '10px',
        fontFamily: 'Roboto, sans-serif',
        overflow: 'hidden',
        minWidth: '50px',
        lineHeight: '3',
        // maxWidth: '150px',
        whiteSpace: 'nowrap',
        fontWeight: '500',
        height: '30px',
        boxSizing: 'border-box',
        top: '-1000em',
        // visibility: 'hidden',
        opacity: '1',
        backgroundColor: 'rgba(97, 97, 97, .9)',
        borderRadius: '2px',
        willChange: 'transform',
        padding: '0px 8px',
        transition: Transitions.easeOut('250ms',['transform', 'opacity'],null),
        // left: this.horizontalPosition==='left' ? '0' :
        //       this.horizontalPosition==='center' ? '-20%' : '-100%',
      }
    }
    var vo = this.verticalPosition === 'top' ? '-30px' : '30px'
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      verticalOffset: vo
    }
  },
  ready: function() {
    var parentWidth = +this.$parent.$el.style.width.replace('px','')
    var width = +this.$el.offsetWidth
    var offset = parentWidth - width
    this.$el.style.left = this.horizontalPosition === 'left' ? '0':
                          this.horizontalPosition === 'center' ? `${offset/2}px` : `${offset}px`

  },
  watch: {
    note: function() {
      if (this.note) {
        this.$el.style.top = this.verticalPosition === 'top' ? '0px' : '18px'
        this.$el.style.visibility = 'visible'
        this.$el.style.opacity = '1'
        this.$el.style.transform = `translate(0px, ${this.verticalOffset})`
      } else {
        this.$el.style.top = '-1000em'
        this.$el.style.visibility = 'hidden'
        this.$el.style.opacity = '0'
        this.$el.style.transform = 'translate(0, 0)'
      }
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
  // created: function() {
  //   this.mergedStyles = Object.assign(this.originStyles, this.styleObj)
  // },
  methods: {
    handleClick: function() {
      this.$parent.$refs.touch.$el.click()
    },
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
