<template>
  <div class="test">
    <nav-bar>
      <icon-button icon-class="fa fa-bars fa-2x fa-hover anti-color" slot="leftNav" @click="handleClick"></icon-button>
      <span slot="title" class="">title</span>
      <icon-button icon-class="fa fa-github fa-2x anti-color" slot="rightNav"></icon-button>
    </nav-bar>
    <menu-bar :open.sync="open" v-ref:sidebar :docked="!small">
      <menu-item class="header item"
                 slot="menuList"
                 label="HOME"
                 :icon-on-click="hideMenu"
                 :label-on-click="linkTo"
                 icon-class="fa fa-caret-left fa-2x"
                 :ripple="false">
      </menu-item>
      <menu-item class="item" slot="menuList" label="Auto Complete" @click="linkTo('/components/autocomplete')"></menu-item>
      <menu-item class="item" slot="menuList" label="Button" @click="linkTo('/components/button')"></menu-item>
      <menu-item class="item" slot="menuList" label="Check Box" @click="linkTo('/components/checkbox')"></menu-item>
      <menu-item class="item" slot="menuList" label="Dialog" @click="linkTo('/components/dialog')"></menu-item>
      <menu-item class="item" slot="menuList" label="Date Picker" @click="linkTo('/components/datepicker')"></menu-item>
      <menu-item class="item" slot="menuList" label="Icon Button" @click="linkTo('/components/iconbutton')"></menu-item>
      <menu-item class="item" slot="menuList" label="Icon Menu" @click="linkTo('/components/iconmenu')"></menu-item>
      <menu-item class="item" slot="menuList" label="Down Menu" @click="linkTo('/components/downmenu')"></menu-item>
      <menu-item class="item" slot="menuList" label="Menu Bar" @click="linkTo('/components/menubar')"></menu-item>
      <menu-item class="item" slot="menuList" label="Radio" @click="linkTo('/components/radio')"></menu-item>
      <menu-item class="item" slot="menuList" label="Snack Bar" @click="linkTo('/components/snackbar')"></menu-item>
      <menu-item class="item" slot="menuList" label="Table" @click="linkTo('/components/table')"></menu-item>
      <menu-item class="item" slot="menuList" label="Text Field" @click="linkTo('/components/textfield')"></menu-item>
      <menu-item class="item" slot="menuList" label="Toggle" @click="linkTo('/components/toggle')"></menu-item>
    </menu-bar>
    <router-view v-ref:mainview class="router" :class="open&&!small ? 'view' : 'resView'" keep-alive></router-view>
  </div>
</template>

<script type="text/javascript">
import { NavBar, IconButton, MenuItem, MenuBar } from 'material-vue.js'

export default {
  components: {
    MenuItem,
    NavBar,
    IconButton,
    MenuBar
  },
  data: function() {
    return {
      open: window.innerWidth < 750  ? false : true,
      small: window.innerWidth < 750 ? true : false
    }
  },
  ready: function() {
    var throttle = function (type, name, obj) {
      obj = obj || window
      var running = false
      var func = function() {
        if (running) { return }
        running = true
        requestAnimationFrame(function() {
          obj.dispatchEvent(new CustomEvent(name))
          running = false
        })
      }
      obj.addEventListener(type, func)
    }
    throttle("resize", "optimizedResize")
    window.addEventListener("optimizedResize", () => {
      const width = window.innerWidth
      const size = 750
      if(width < size) {
        this.open = false
        this.small = true
      } else {
        this.open = true
        this.small = false
      }
    })
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
.fa-2x {
  font-size: 1.5em;
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
  padding: 72px 36px 48px;
}
.view {
  margin-left: 150px;
}
.item {
  line-height: 48px;
  height: 48px;
}
.anti-color {
  color: white;
}
</style>
