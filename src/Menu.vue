<template>
  <div :style="mergedStyles">
    <slot name="list"></slot>
  </div>
</template>

<script type="text/javascript">
import MenuItem from 'MenuItem'
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'

export default {
  data: function() {
    return {
      originStyles: {
        boxShadow: this.shadowDepth ? zDepthShadows[this.shadowDepth-1] : zDepthShadows[0],
        maxHeight: '200px'
      },
      mergedStyles: null
    }
  },
  props: {
    shadowDepth: Number,
  },
  components: {
    MenuItem
  },
  created: function() {
    this.mergedStyles = getStyles(this.style, this.originStyles)
  }
}
</script>
