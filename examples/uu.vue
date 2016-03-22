<template>
  <basebutton :show='true'></basebutton>
  <!-- <paper circle="ffannnvznvina" :shadow-depth='fass'></paper> -->
</template>

<script type="text/javascript">
import {Paper as paper, BaseButton as basebutton} from '../lib/mtv.js'

// console.log(Paper);

export default {
  ready: function() {
    console.log('fas');
    var a = 314
  },
  components: {
    paper,
    basebutton
  },
  data: function() {
    return {
      dp:9
    }
  }
}
</script>
