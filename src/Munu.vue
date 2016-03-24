<template>
  <div :style="">
    <slot name="item"></slot>
  </div>
</template>

<script type="text/javascript">
import {zDepthShadows} from 'styles/common'

export default {
  data: function() {
    return {
      boxShadow: this.shadowDepth ? zDepthShadows[this.shadowDepth-1] : zDepthShadows[0],
      overflowY: 'hidden',
      maxHeight: '200px'
    }
  },
  props: {
    shadowDepth: Number
  }
}
</script>
