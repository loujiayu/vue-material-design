<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <div slot="ex" class="options">
        <label for="tg1">checkbox enable</label>
        <toggle :trigger.sync="checkbox" class="vertical" label-id="tg1"></toggle>
      </div>
      <div slot="ex" class="options">
        <label for="tg2">table selectable</label>
        <toggle :trigger.sync="selectable" class="vertical" label-id="tg2"></toggle>
      </div>
      <table-wrapper slot="ex">
        <table-header slot="header" :headers="exampleHeader" :checkbox="checkbox"></table-header>
        <table-body slot="body" :body-content="exampleContents" :selectable="selectable" :checkbox="checkbox"></table-body>
      </table-wrapper>
    </example>
    <property>
      <table-wrapper slot="pro" class="groupTable">
        <table-header slot="header" :headers="tableHeader1"></table-header>
        <table-body slot="body" :body-content="bodyContent1" class="desc"></table-body>
      </table-wrapper>
      <table-wrapper slot="pro" class="groupTable">
        <table-header slot="header" :headers="tableHeader2"></table-header>
        <table-body slot="body" :body-content="bodyContent2" class="desc"></table-body>
      </table-wrapper>
      <table-wrapper slot="pro" class="groupTable">
        <table-header slot="header" :headers="tableHeader3"></table-header>
        <table-body slot="body" :body-content="bodyContent3" class="desc"></table-body>
      </table-wrapper>
    </property>
  </div>
</template>

<script type="text/javascript">
import PageHeader from 'PageHeader'
import Example from 'Example'
import Property from 'Property'
import desc from '../helpers/property'
import {TableWrapper,TableBody, TableHeader, CheckBox, Toggle} from 'mtv'

export default {
  data: function() {
    return {
      title: 'Table',
      description: 'Organize data.',
      tableHeader1: ['table property','type','default','description'],
      bodyContent1: desc.table,
      tableHeader2: ['table header property','type','default','description'],
      bodyContent2: desc.tableheader,
      tableHeader3: ['table body property','type','default','description'],
      bodyContent3: desc.tablebody,
      exampleHeader: ['ID', 'First Name', 'Last Name'],
      exampleContents: [['1','Mark','Otto'],['2','Jacob', 'Thornton'],['3','Larry','the Bird']],
      html: '\t<div> \
        \n\t  <label for="tg1">checkbox enable</label> \
        \n\t  <toggle :trigger.sync="checkbox" label-id="tg1"></toggle>\
      \n\t</div>\
      \n\n\t<div>\
        \n\t  <label for="tg2">table selectable</label>\
        \n\t  <toggle :trigger.sync="selectable" label-id="tg2"></toggle>\
      \n\t</div>\
      \n\n\t<table-wrapper>\
        \n\t  <table-header slot="header" :headers="exampleHeader" :checkbox="checkbox"></table-header>\
        \n\t  <table-body slot="body" :body-content="exampleContents" :selectable="selectable" :checkbox="checkbox"></table-body>\
      \n\t</table-wrapper>',

      checkbox: false,
      selectable: false,
    }
  },
  components: {
    Toggle,
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
.groupTable {
  margin-bottom: 20px;
}
.vertical {
  vertical-align: middle;
  // margin-left: 50px;
}
.options {
  line-height: 30px;
  width: 200px;
  label {
    display: inline-block;
    cursor: pointer;
    width: calc(100% - 50px)
  }
}
</style>
