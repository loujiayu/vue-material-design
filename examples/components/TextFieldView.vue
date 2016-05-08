<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <text-field slot="ex" :style-obj="exStyle" default-content="haha" ></text-field>
      <text-field slot="ex" :style-obj="exStyle" float-content="float content" ></text-field>
      <text-field slot="ex" :style-obj="exStyle" hint-content="hint content" ></text-field>
      <text-field slot="ex" :style-obj="exStyle" float-content="float content" hint-content="hint content" ></text-field>
      <text-field slot="ex" :style-obj="exStyle" default-content="haha" float-content="float content" hint-content="hint content" ></text-field>
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
import {TableWrapper,TableBody, TableHeader, TextField} from 'material-vue'

export default {
  data: function() {
    return {
      title: 'Text Field',
      description: 'text input component.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.textfield,
      exStyle: {
        display: 'block',
      },
      html: '<text-field default-content="haha" ></text-field> \
             \n<text-field float-content="float content" ></text-field> \
             \n<text-field hint-content="hint content" ></text-field> \
             \n<text-field float-content="float content" hint-content="hint content" ></text-field> \
             \n<text-field default-content="haha" float-content="float content" hint-content="hint content" ></text-field>'
    }
  },
  components: {
    TextField,
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
