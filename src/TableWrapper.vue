<template>
  <div :style="mRootStyle">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
export default {
  data: function() {
    const styles = {
      root: {
        height: 'auto',
        // minWidth: '600px',
        overflow: 'auto',
        // WebkitOverflowScrolling: 'touch',
        // maxHeight: '100px'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
    }
  },
  props: {
    styleObj: Object
  }
}
</script>
