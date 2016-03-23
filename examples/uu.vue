<template>
  <basebutton :shadow-depth="2" :label="labelaa" icon-class="fa fa-archive"></basebutton>
  <!-- <paper circle="ffannnvznvina" :shadow-depth='fass'></paper> -->
</template>

<script type="text/javascript">
import {Paper as paper, BaseButton as basebutton} from '../lib/mtv.js'

console.log(paper);

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
      dp:9,
      labelaa:'fjaoij'
    }
  }
}
</script>
