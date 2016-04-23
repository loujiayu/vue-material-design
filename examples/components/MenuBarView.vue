<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <base-button label="BUTTON" @click="dockToggle" slot="ex"></base-button>
      <menu-bar :open.sync="dockOpen" :docked=false slot="ex">
        <menu-item slot="menuList" label="menu item 1"></menu-item>
        <menu-item slot="menuList" label="menu item 2"></menu-item>
      </menu-bar>
      <base-button label="BUTTON" @click="toggle" slot="ex"></base-button>
      <menu-bar :open="open" slot="ex">
        <menu-item slot="menuList" label="menu item 1"></menu-item>
        <menu-item slot="menuList" label="menu item 2"></menu-item>
      </menu-bar>
    </example>
    <property>
      <table-wrapper slot="pro">
        <table-header slot="header" :headers="tableHeader"></table-header>
        <table-body slot="body" :body-content="bodyContent" class="desc"></table-body>
      </table-wrapper>
    </property>
  </div>
</template>

<script type="text/javascript">
import PageHeader from 'PageHeader'
import Example from 'Example'
import Property from 'Property'
import desc from '../helpers/property'
import {TableWrapper,TableBody, TableHeader, MenuBar, MenuItem, BaseButton} from 'mtv'

export default {
  data: function() {
    return {
      title: 'MenuBar',
      description: '',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.menubar,
      html: '<base-button label="BUTTON" @click="dockToggle"></base-button> \
            \n<menu-bar :open.sync="dockOpen" :docked=false> \
            \n  <menu-item slot="menuList" label="menu item 1"></menu-item> \
            \n  <menu-item slot="menuList" label="menu item 2"></menu-item> \
            \n</menu-bar> \
            \n\n<base-button label="BUTTON" @click="toggle"></base-button> \
            \n<menu-bar :open="open" slot="ex"> \
            \n  <menu-item slot="menuList" label="menu item 1"></menu-item> \
            \n  <menu-item slot="menuList" label="menu item 2"></menu-item> \
            \n</menu-bar>',
      open: false,
      dockOpen: false,
    }
  },
  components: {
    BaseButton,
    MenuBar,
    MenuItem,
    PageHeader,
    Example,
    Property,
    TableBody,
    TableHeader,
    TableWrapper
  },
  methods: {
    toggle: function() {
      this.open = !this.open
    },
    dockToggle: function() {
      this.dockOpen = !this.dockOpen
    }
  }
}

</script>

<style media="screen" lang="scss">
@import "../styles/common.scss";

</style>
