<template>
  <div :style="mergedStyles" v-if="fuck">
    {{hintContent}}
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
        position:'absolute',
        lineHeight: '22px',
        top: this.hasFloat ? '25px' : '13px',
        color: 'rgb(192, 198, 201)'
      },
      mergedStyles:null,
    }
  },
  props: {
    styleObj: Object,
    hintContent: String,
    fuck: Boolean,
    hasFloat: Boolean
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  },
}
</script>
