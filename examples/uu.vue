<template>
  <div class="test">
    <nav-bar>
      <icon-button icon-class="fa fa-bars fa-2x fa-hover" slot="leftNav" @click="handleClick"></icon-button>
      <span slot="title" class="">title</span>
      <icon-button icon-class="fa fa-github fa-2x" slot="rightNav"></icon-button>
    </nav-bar>
    <menu-bar :open="open">
      <menu-item class="header item" slot="list" label="HOME" icon-class="fa fa-caret-left"></menu-item>
      <menu-item class="item" slot="list" label="function"></menu-item>
      <menu-item class="item" slot="list" label="function"></menu-item>
      <menu-item class="item" slot="list" label="function"></menu-item>
      <menu-item class="item" slot="list" label="function"></menu-item>
    </menu-bar>
  </div>
</template>

<script type="text/javascript">
import { BaseButton, NavBar, IconButton, Menu, MenuItem, IconMenu,MenuBar, TextField,DownMenu, SnackBar} from '../lib/mtv.js'

export default {
  components: {
    Menu,
    MenuItem,
    DownMenu,
    SnackBar,
    TextField,
    BaseButton,
    NavBar,
    IconButton,
    IconMenu,
    MenuBar
  },
  data: function() {
    return {
      open: false
    }
  },
  methods: {
    handleClick: function() {
      this.open = true
    }
  }
}
</script>

<style>
.header {
  background-color: rgb(41, 43, 38);

}
.item {
  line-height: 48px;
  height: 48px;
}

.fa {
  color: white;
}

</style>
