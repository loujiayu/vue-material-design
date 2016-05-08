<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <radio slot="ex" :trigger=true :style-obj="radioStyle"></radio>
      <radio slot="ex" :style-obj="radioStyle"></radio>
      <radio slot="ex" :disabled=true :style-obj="radioStyle"></radio>
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
import {TableWrapper,TableBody, TableHeader, Radio} from 'material-vue'

export default {
  data: function() {
    return {
      title: 'Radio',
      description: 'radio is used to select option.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.radio,
      html: '<radio :trigger=true></radio> \
            \n<radio></radio>\
            \n<radio :disabled=true></radio>',
      radioStyle: {
        marginRight: '10px'
      }
    }
  },
  components: {
    Radio,
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
