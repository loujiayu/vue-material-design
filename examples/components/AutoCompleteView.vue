<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <auto-complete slot="ex" :style-obj="exStyle" :completion="completion"></auto-complete>
      <auto-complete slot="ex" :style-obj="exStyle" :completion="completion" hint-content="case insensitive" :match-case="false"></auto-complete>
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
import {TableWrapper,TableBody, TableHeader, AutoComplete, MenuItem} from 'mtv'

export default {
  data: function() {
    return {
      title: 'Auto Complete',
      description: 'auto-complete the input dynamically.',
      tableHeader: ['property','type','default','description'],
      completion: ['Bruce', 'Chuck', 'Jackie'],
      exStyle: {
        display: 'block',
      },
      html: '<auto-complete :completion="completion"></auto-complete> \
            \n<auto-complete :completion="completion" hint-content="case insensitive"></auto-complete>',

      bodyContent: desc.autocomplete
    }
  },
  components: {
    MenuItem,
    AutoComplete,
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
