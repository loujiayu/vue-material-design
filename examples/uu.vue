<template>
  <div class="">
    <nav-bar>
      <icon-button icon-class="fa fa-bars fa-2x" slot="leftNav"></icon-button>
      <base-button slot="title" label="title"></base-button>
      <icon-button slot="rightNav" icon-class="fa fa-github fa-2x">
      <!-- <base-button slot="rightNav" v-for="y in yy" :label="y"></base-button> -->
    </nav-bar>
  </div>
</template>

<script type="text/javascript">
import {Paper, BaseButton, NavBar, IconButton} from '../lib/mtv.js'

// console.log(paper);

export default {
  ready: function() {
    console.log('fas');
    var a = 314
  },
  components: {
    Paper,
    // 'base-button':BaseButton,
    BaseButton,
    NavBar,
    IconButton
  },
  data: function() {
    return {
      dp:9,
      labelaa:'fjaoij',
      yy:['a','b','c']
    }
  }
}
</script>
