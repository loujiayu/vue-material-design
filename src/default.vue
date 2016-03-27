<template>
  <div :style="mergedStyles">

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

      },
      mergedStyles:null,
    }
  },
  props: {
    styleObj: Object
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  },
}
</script>
