<template>
  <div class="">
    <icon-menu icon-class="fa fa-at fa-2x" vertical="top" horizontal="right">
      <menu-item  label="ljy" slot="list"></menu-item>
      <menu-item  label="ykf" slot="list"></menu-item>
    </icon-menu>
    <!-- <menu>
      <menu-item  label="ljy" slot="list"></menu-item>
      <menu-item  label="ykf" slot="list"></menu-item>
    </menu> -->
    <!-- <nav-bar>
      <icon-button icon-class="fa fa-google fa-2x" slot="leftNav"></icon-button>
      <base-button v-for="y in yy" slot="title" label="title"></base-button>
      <icon-button icon-class="fa fa-google fa-2x" slot="rightNav"></icon-button>
    </nav-bar> -->
  </div>
</template>

<script type="text/javascript">
import { BaseButton, NavBar, IconButton, Menu, MenuItem, IconMenu} from '../lib/mtv.js'

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
    IconButton,
    IconMenu
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
