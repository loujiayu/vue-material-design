<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <toggle slot="ex" :style-obj="toggleStyle" :trigger=true></toggle>
      <toggle slot="ex" :style-obj="toggleStyle"></toggle>
      <toggle slot="ex" :disabled=true :style-obj="toggleStyle"></toggle>
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
import {TableWrapper,TableBody, TableHeader, Toggle} from 'material-vue'

export default {
  data: function() {
    return {
      title: 'Toggle',
      description: 'Toggle is used to select option.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.toggle,
      html: '<toggle :trigger=true></toggle>\
             \n<toggle></toggle> \
             \n<toggle :disabled=true></toggle>',
      toggleStyle: {
        marginRight: '10px'
      }
    }
  },
  components: {
    Toggle,
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
