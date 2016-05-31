<template>
  <div :style="mRootStyle">

  </div>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
export default {
  data: function(){
    const styles = {
      root: {

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
