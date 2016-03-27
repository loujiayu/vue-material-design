<template>
  <div class="test">
    <!-- <icon-menu :open="open" icon-class="fa fa-at fa-2x" vertical="bottom" horizontal="left">
      <menu-item  label="ljy" slot="list"></menu-item>
      <menu-item  label="ykf" slot="list"></menu-item>
    </icon-menu> -->
    <!-- <nav-bar>
      <icon-button icon-class="fa fa-google fa-2x" slot="leftNav"></icon-button>
      <base-button v-for="y in yy" slot="title" label="title"></base-button>
      <icon-button icon-class="fa fa-google fa-2x" slot="rightNav"></icon-button>
    </nav-bar> -->
    <!-- <base-button v-for="y in yy" slot="title" label="title"></base-button>
    <snack-bar message="hahaha" :open=true :undo=true>
    </snack-bar> -->
    <base-button label="title"></base-button>
  </div>
</template>

<script type="text/javascript">
import { BaseButton, NavBar, IconButton, Menu, MenuItem, IconMenu,MenuBar, DownMenu, SnackBar} from '../lib/mtv.js'

// console.log(paper);
export default {
  ready: function() {
    console.log('fas');
    var a = 314
  },
  components: {
    // Menu,
    // MenuItem,
    // DownMenu,
    // SnackBar,
    // 'base-button':BaseButton,
    BaseButton,
    // NavBar,
    // IconButton,
    // IconMenu,
    // MenuBar
  },
  data: function() {
    return {
      open: false,
      dp:9,
      labelaa:'fjaoij',
      yy:['a','b','c']
    }
  },
  methods: {
    handleClick: function() {
      this.open = !this.open
    }
  }
}
</script>

<style>
.test {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  /*.test {

  }*/
</style>
