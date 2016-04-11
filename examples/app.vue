<template>
  <div class="test">
    <nav-bar>
      <icon-button icon-class="fa fa-bars fa-2x fa-hover anti-color" slot="leftNav" @click="handleClick"></icon-button>
      <span slot="title" class="">title</span>
      <icon-button icon-class="fa fa-github fa-2x anti-color" slot="rightNav"></icon-button>
    </nav-bar>
    <menu-bar :open="open">
      <menu-item class="header item"
                 slot="list"
                 label="HOME"
                 :icon-on-click="hideMenu"
                 :label-on-click="linkTo"
                 icon-class="fa fa-caret-left fa-2x"
                 :ripple=false>
      </menu-item>
      <menu-item class="item" slot="list" label="button" @click="linkTo('/components/button')"></menu-item>
      <menu-item class="item" slot="list" label="function"></menu-item>
      <menu-item class="item" slot="list" label="function"></menu-item>
      <menu-item class="item" slot="list" label="function"></menu-item>
    </menu-bar>
    <router-view class="router" transition="switch" :class="open ? 'view' : 'resView'" keep-alive></router-view>
  </div>
</template>

<script type="text/javascript">
import { TableWrapper, TableBody,TableHeader,Toggle, Radio,CheckBox, BaseButton, NavBar, IconButton, MenuItem, IconMenu,MenuBar, TextField,DownMenu, SnackBar} from 'mtv.js'

export default {
  components: {
    TableWrapper,
    TableBody,
    TableHeader,
    MenuItem,
    DownMenu,
    SnackBar,
    TextField,
    BaseButton,
    NavBar,
    CheckBox,
    IconButton,
    IconMenu,
    Radio,
    Toggle,
    MenuBar
  },
  data: function() {
    return {
      open: true,
    }
  },
  methods: {
    handleClick: function() {
      this.open = true
    },
    hideMenu: function() {
      console.log('hideMenu');
      console.log(this.open);
      this.open = false
    },
    linkTo: function(path) {
      if (!path) {
        this.$route.router.go('/')
      } else {
        this.$route.router.go(path)
      }
    }
  }
}
</script>

<style lang="less">
.table {
  width: 800px;
}
.test {
  // top: 100px;
  // left: 100px;
  // position: absolute;
}
.header {
  background-color: rgb(41, 43, 38);
  button {
    color: #fff;
  }
}
.router {
  padding: 36px 48px;
  transition: all .5s ease;
}
.switch-enter, .switch-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
.view {
  margin-left: 256px;
}
.resView {
  padding: 36px 48px;
}
.item {
  line-height: 48px;
  height: 48px;
}
.anti-color {
  color: white;
}

</style>
