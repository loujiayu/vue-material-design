<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <down-menu label="Default" slot="ex">
        <base-button label="Action" slot="downList" ></base-button>
        <base-button label="Another action" slot="downList"></base-button>
      </down-menu>
      <down-menu label="Default" :disabled=true slot="ex">
        <base-button label="Action" slot="downList"></base-button>
        <base-button label="Another action" slot="downList"></base-button>
      </down-menu>
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
import {BaseButton, TableWrapper,TableBody, TableHeader, DownMenu} from 'mtv'

export default {
  data: function() {
    return {
      title: 'DownMenu',
      description: 'Lists of clickable actions.',
      tableHeader: ['property','type','default','description'],
      bodyContent: desc.downmenu,
      html: '\t<down-menu label="Default" > \
            \n\t  <base-button label="Action" slot="downList"></base-button> \
            \n\t  <base-button label="Another action" slot="downList"></base-button> \
            \n\t</down-menu> \
            \n\t<down-menu label="Default" :disabled=true> \
            \n\t  <base-button label="Action" slot="downList"></base-button> \
            \n\t  <base-button label="Another action" slot="downList"></base-button> \
            \n\t</down-menu> '
    }
  },
  components: {
    DownMenu,
    BaseButton,
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
