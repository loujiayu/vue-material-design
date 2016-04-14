<template>
  <div class="test">
    <nav-bar>
      <icon-button icon-class="fa fa-bars fa-2x fa-hover anti-color" slot="leftNav" @click="handleClick"></icon-button>
      <span slot="title" class="">title</span>
      <icon-button icon-class="fa fa-github fa-2x anti-color" slot="rightNav"></icon-button>
    </nav-bar>
    <menu-bar :open="open" v-ref:sidebar>
      <menu-item class="header item"
                 slot="list"
                 label="HOME"
                 :icon-on-click="hideMenu"
                 :label-on-click="linkTo"
                 icon-class="fa fa-caret-left fa-2x"
                 :ripple=false>
      </menu-item>
      <menu-item class="item" slot="list" label="Button" @click="linkTo('/components/button')"></menu-item>
      <menu-item class="item" slot="list" label="CheckBox" @click="linkTo('/components/checkbox')"></menu-item>
      <menu-item class="item" slot="list" label="IconButton" @click="linkTo('/components/iconbutton')"></menu-item>
      <menu-item class="item" slot="list" label="DownMenu" @click="linkTo('/components/downmenu')"></menu-item>
    </menu-bar>
    <router-view v-ref:mainview class="router" transition="switch" :class="open ? 'view' : 'resView'" keep-alive></router-view>
  </div>
</template>

<script type="text/javascript">
import { NavBar, IconButton, MenuItem, MenuBar } from 'mtv.js'

export default {
  components: {
    MenuItem,
    NavBar,
    IconButton,
    MenuBar
  },
  data: function() {
    return {
      // inline style overwrite in firfox when open set to false
      open: true,
    }
  },
  methods: {
    handleClick: function() {
      this.open = true
    },
    hideMenu: function() {
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
  transition: all .2s ease;
}
.switch-enter, .switch-leave {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}
.view {
  margin-left: 256px;
}
.item {
  line-height: 48px;
  height: 48px;
}
.anti-color {
  color: white;
}

</style>
