<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <base-button @click="handleClick" slot="ex" label="ACTION"></base-button>
      <snack-bar :open.sync="open" slot="ex" message="Some action finished."></snack-bar>
      <base-button @click="handleUndoClick" slot="ex" label="UNDO ACTION"></base-button>
      <snack-bar :open.sync="undoOpen" slot="ex" message="Some action finished." :undo=true></snack-bar>
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
import {TableWrapper,TableBody, TableHeader, SnackBar, BaseButton} from 'material-vue'

export default {
  data: function() {
    return {
      title: 'Snack Bar',
      description: 'popup notification about an operation.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.snackbar,
      html: '<base-button @click="handleClick" label="ACTION"></base-button> \
             \n<snack-bar :open.sync="open" message="Some action finished."></snack-bar>\
             \n<base-button @click="handleUndoClick" label="UNDO ACTION"></base-button> \
             \n<snack-bar :open.sync="undoOpen" message="Some action finished." :undo=true></snack-bar>',
      open: false,
      undoOpen: false
    }
  },
  components: {
    SnackBar,
    BaseButton,
    PageHeader,
    Example,
    Property,
    TableBody,
    TableHeader,
    TableWrapper
  },
  methods: {
    handleClick: function() {
      this.open = !this.open
    },
    handleUndoClick: function() {
      this.undoOpen = !this.undoOpen
    }
  }
}

</script>

<style media="screen" lang="scss">
@import "../styles/common.scss";
</style>
