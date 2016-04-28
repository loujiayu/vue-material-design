<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex">
        <base-button label="Some Action" slot="iconList"></base-button>
        <base-button label="Another Action" slot="iconList"></base-button>
      </icon-menu>
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex" vertical-position="bottom" horizontal-position="right">
        <base-button label="Some Action" slot="iconList"></base-button>
        <base-button label="Some Action" slot="iconList"></base-button>
      </icon-menu>
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex" vertical-position="top" horizontal-position="left">
        <base-button label="Some Action" slot="iconList"></base-button>
        <base-button label="Some Action" slot="iconList"></base-button>
      </icon-menu>
      <icon-menu icon-class="fa fa-list fa-2x" slot="ex" vertical-position="top" horizontal-position="right">
        <base-button label="Some Action" slot="iconList"></base-button>
        <base-button label="Some Action" slot="iconList"></base-button>
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
import {BaseButton, IconMenu, TableWrapper,TableBody, TableHeader} from 'mtv'

export default {
  data: function() {
    return {
      title: 'IconMenu',
      description: 'Lists of clickable actions.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.iconmenu,
      html: '<icon-menu icon-class="fa fa-list fa-2x"> \
             \n  <base-button label="Some Action" slot="iconList"></base-button> \
             \n  <base-button label="Some Action" slot="iconList"></base-button> \
             \n</icon-menu> \
             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="bottom" horizontal-position="right"> \
              \n  <base-button label="Some Action" slot="iconList"></base-button> \
              \n  <base-button label="Some Action" slot="iconList"></base-button> \
              \n</icon-menu> \
             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="top" horizontal-position="left"> \
             \n  <base-button label="Some Action" slot="iconList"></base-button> \
             \n  <base-button label="Some Action" slot="iconList"></base-button> \
             \n</icon-menu> \
             \n\n<icon-menu icon-class="fa fa-list fa-2x" vertical-position="top" horizontal-position="right"> \
              \n  <base-button label="Some Action" slot="iconList"></base-button> \
              \n  <base-button label="Some Action" slot="iconList"></base-button> \
              \n</icon-menu> '
    }
  },
  components: {
    BaseButton,
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
