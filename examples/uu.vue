<template>
  <div class="">
    <menu>
      <menu-item :is-horizen=true label="ljfafankfhaiofafanfasny" slot="list"></menu-item>
      <menu-item :is-horizen=true label="ykf" slot="list"></menu-item>
    </menu>
    <!-- <nav-bar>
      <icon-button icon-class="fa fa-google fa-2x" slot="leftNav"></icon-button>
      <base-button v-for="y in yy" slot="title" label="title"></base-button>
      <icon-button icon-class="fa fa-google fa-2x" slot="rightNav"></icon-button>
    </nav-bar> -->
  </div>
</template>

<script type="text/javascript">
import { BaseButton, NavBar, IconButton, Menu, MenuItem} from '../lib/mtv.js'

// console.log(paper);

export default {
  ready: function() {
    console.log('fas');
    var a = 314
  },
  components: {
    Menu,
    MenuItem,
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
