<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <check-box :trigger=true slot="ex" :style-obj="style"></check-box>
      <check-box :trigger=false slot="ex" :style-obj="style"></check-box>
      <check-box :disabled=true slot="ex" :style-obj="style"></check-box>
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
import { TableWrapper,TableBody, TableHeader, CheckBox} from 'material-vue'

export default {
  data: function() {
    return {
      title: 'CheckBox',
      description: 'checkbox is used to select option.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.checkbox,
      style: {
        marginRight: '10px'
      },
      html:'<check-box :trigger=true></check-box> \
            \n<check-box :trigger=false></check-box> \
            \n<check-box :disabled=true></check-box>'
    }
  },
  components: {
    PageHeader,
    Example,
    Property,
    CheckBox,
    TableBody,
    TableHeader,
    TableWrapper
  }
}

</script>

<style media="screen" lang="scss">
@import "../styles/common.scss";

</style>
