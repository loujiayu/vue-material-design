<template>
  <div :style="mRootStyle">
    <text-field :style-obj="mTextStyle"></text-field>
    
  </div>
</template>

<script type="text/javascript">
import TextField from 'TextField'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

export default {
  data: function() {
    const styles = {
      root: {

      },
      textField: {

      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mTextStyle: Object.assign(styles.textField, this.textFieldStyle)
    }
  },
  props: {
    styleObj: Object,
    textFieldStyle: Object
  },
  components: {
    TextField
  }
}
</script>
