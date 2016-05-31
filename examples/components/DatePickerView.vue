<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <date-picker slot="ex"></date-picker>
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
import {TableWrapper,TableBody, TableHeader, DatePicker} from 'material-vue'

export default {
  data: function() {
    return {
      title: 'Date Picker',
      description: 'Date Pickers are used to select a single date for an input.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.dialog,
      html:'<date-picker></date-picker>'
    }
  },
  components: {
    PageHeader,
    Example,
    Property,
    DatePicker,
    TableBody,
    TableHeader,
    TableWrapper
  },
  beforeCompile: function() {
  },
  methods: {
  }
}

</script>

<style media="screen" lang="scss">
@import "../styles/common.scss";
</style>
