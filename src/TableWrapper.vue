<template>
  <div :style="mRootStyle">
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
export default {
  data: function() {
    const styles = {
      root: {
        height: 'auto',
        // minWidth: '600px',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        // maxHeight: '100px'
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
    }
  },
  props: {
    styleObj: Object
  }
}
</script>
