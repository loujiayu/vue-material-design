<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <base-button @click="handleOpen" label="DIALOG" slot="ex"></base-button>
      <dialog :open.sync="open" slot="ex" title="DIALOG">
        <div slot="dialogBody">This is a dialog.</div>
        <base-button label="CANCEL" slot="dialogAction" @click="handleOpen"></base-button>
        <base-button label="SUBMIT" slot="dialogAction" @click="handleOpen"></base-button>
      </dialog>
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
import {TableWrapper,TableBody, TableHeader, Dialog, BaseButton} from 'mtv'

export default {
  data: function() {
    return {
      title: 'Dialog',
      description: 'Modal windows for dedicated user input.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.dialog,
      html: '<dialog title="DIALOG"> \
        \n  <div slot="dialogBody">This is a dialog.</div> \
        \n  <base-button label="CANCEL" slot="dialogAction"></base-button> \
        \n  <base-button label="SUBMIT" slot="dialogAction"></base-button> \
        \n</dialog>',
      open: false
    }
  },
  components: {
    BaseButton,
    Dialog,
    PageHeader,
    Example,
    Property,
    TableBody,
    TableHeader,
    TableWrapper
  },
  methods: {
    handleOpen: function() {
      this.open = !this.open
    }
  }
}

</script>

<style media="screen" lang="scss">
@import "../styles/common.scss";
</style>
