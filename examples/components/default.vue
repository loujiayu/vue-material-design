<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
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
import {TableWrapper,TableBody, TableHeader} from 'material-vue'

export default {
  data: function() {
    return {
      title: '',
      description: '',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.
    }
  },
  components: {
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
