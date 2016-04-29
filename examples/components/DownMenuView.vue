<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <down-menu label="Default" slot="ex">
        <menu-item label="Action" slot="downList" ></menu-item>
        <menu-item label="Another action" slot="downList"></menu-item>
      </down-menu>
      <down-menu label="Default" :disabled=true slot="ex">
        <menu-item label="Action" slot="downList"></menu-item>
        <menu-item label="Another action" slot="downList"></menu-item>
      </down-menu>
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
import {MenuItem, TableWrapper,TableBody, TableHeader, DownMenu} from 'mtv'

export default {
  data: function() {
    return {
      title: 'DownMenu',
      description: 'Lists of clickable actions.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.downmenu,
      html: '<down-menu label="Default" > \
            \n  <menu-item label="Action" slot="downList"></menu-item> \
            \n  <menu-item label="Another action" slot="downList"></menu-item> \
            \n</down-menu> \
            \n<down-menu label="Default" :disabled=true> \
            \n  <menu-item label="Action" slot="downList"></menu-item> \
            \n  <menu-item label="Another action" slot="downList"></menu-item> \
            \n</down-menu> '
    }
  },
  components: {
    DownMenu,
    MenuItem,
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
