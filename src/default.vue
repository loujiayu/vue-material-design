<template>
  <div :style="mRootStyle">

  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
export default {
  data: function(){
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
    }
  },
  props: {
    styleObj: Object
  }
}
</script>
