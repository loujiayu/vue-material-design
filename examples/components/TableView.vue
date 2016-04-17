<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <div slot="ex" class="options">
        <check-box :trigger.sync="checkbox"></check-box>
        <span>checkbox enable</span>
      </div>
      <div slot="ex">
        <check-box :trigger.sync="selectable"></check-box>
        <span>table selectable</span>
      </div>
      <table-wrapper slot="ex">
        <table-header slot="header" :headers="exampleHeader"></table-header>
        <table-body slot="body" :body-content="exampleContents" :selectable=true></table-body>
      </table-wrapper>
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
import {TableWrapper,TableBody, TableHeader, CheckBox} from 'mtv'

export default {
  data: function() {
    return {
      title: 'Table',
      description: 'Organize data.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.table,

      exampleHeader: ['ID', 'First Name', 'Last Name'],
      exampleContents: [['1','Mark','Otto'],['2','Jacob', 'Thornton'],['3','Larry','the Bird']],

      checkbox: false,
      selectable: false,

    }
  },
  components: {
    CheckBox,
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
.options {
  vertical-align: middle;
}
</style>
