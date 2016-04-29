<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex">
        <menu-item label="Some Action" slot="iconList"></menu-item>
        <menu-item label="Another Action" slot="iconList"></menu-item>
      </icon-menu>
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex" vertical-position="bottom" horizontal-position="right">
        <menu-item label="Some Action" slot="iconList"></menu-item>
        <menu-item label="Some Action" slot="iconList"></menu-item>
      </icon-menu>
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex" vertical-position="top" horizontal-position="left">
        <menu-item label="Some Action" slot="iconList"></menu-item>
        <menu-item label="Some Action" slot="iconList"></menu-item>
      </icon-menu>
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex" vertical-position="top" horizontal-position="right">
        <menu-item label="Some Action" slot="iconList"></menu-item>
        <menu-item label="Some Action" slot="iconList"></menu-item>
      </icon-menu>
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
import {MenuItem, IconMenu, TableWrapper,TableBody, TableHeader} from 'mtv'

export default {
  data: function() {
    return {
      title: 'IconMenu',
      description: 'Lists of clickable actions.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.iconmenu,
      html: '<icon-menu icon-class="fa fa-list fa-2x"> \
             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
             \n</icon-menu> \
             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="bottom" horizontal-position="right"> \
              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
              \n</icon-menu> \
             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="top" horizontal-position="left"> \
             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
             \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
             \n</icon-menu> \
             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="top" horizontal-position="right"> \
              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
              \n  <menu-item label="Some Action" slot="iconList"></menu-item> \
              \n</icon-menu> '
    }
  },
  components: {
    MenuItem,
    IconMenu,
    PageHeader,
    Example,
    Property,
    TableBody,
    TableHeader,
    TableWrapper
  }
}

</script>

<style media="screen" lang="scss">
@import "../styles/common.scss";
</style>
