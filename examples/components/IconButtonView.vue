<template>
  <div class="">
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html">
      <div slot="ex">
        <icon-button icon-class="fa fa-google fa-2x" link="http://google.com"></icon-button>
        <icon-button icon-class="fa fa-github fa-2x" link="http://github.com"></icon-button>
      </div>
      <div slot="ex">
        <icon-button icon-class="fa fa-bell-o fa-2x" slot="ex"></icon-button>
        <icon-button icon-class="fa fa-bell-o fa-2x" slot="ex" :disabled=true></icon-button>
      </div>
      <div slot="ex">
        <icon-button
          icon-class="fa fa-cog fa-2x"
          tooltip="message position"
          slot="ex"
          vertical-position="top"
          horizontal-position="left"
        >
        </icon-button>
        <icon-button
          icon-class="fa fa-cog fa-2x"
          tooltip="message position"
          slot="ex"
          vertical-position="top"
          horizontal-position="right"
        >
        </icon-button>
        <icon-button
          icon-class="fa fa-cog fa-2x"
          tooltip="message position"
          slot="ex"
          vertical-position="top"
          horizontal-position="center"
        >
        </icon-button>
        <icon-button
          icon-class="fa fa-cog fa-2x"
          tooltip="message position"
          slot="ex"
          vertical-position="bottom"
          horizontal-position="left"
        >
        </icon-button>
        <icon-button
          icon-class="fa fa-cog fa-2x"
          tooltip="message position"
          slot="ex"
          vertical-position="bottom"
          horizontal-position="right"
        >
        </icon-button>
        <icon-button
          icon-class="fa fa-cog fa-2x"
          tooltip="message position"
          slot="ex"
          vertical-position="bottom"
          horizontal-position="center"
        >
        </icon-button>
      </div>
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
import PageHeader from "PageHeader"
import Example from "Example"
import Property from "Property"
import desc from "../helpers/property"
import {IconButton, TableWrapper,TableBody, TableHeader} from "mtv"

export default {
  data: function() {
    return {
      title: "IconButton",
      description: "button element with an icon.",
      tableHeader: ["property","type","default","description"],
      bodyContent: desc.icon,
      html: '<icon-button icon-class="fa fa-google fa-2x" link="http://google.com"></icon-button> \
            \n<icon-button icon-class="fa fa-google fa-2x" link="http://google.com"></icon-button>\n \
            \n<icon-button icon-class="fa fa-bell-o fa-2x"></icon-button> \
            \n<icon-button icon-class="fa fa-bell-o fa-2x" :disabled=true></icon-button>\n \
            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="top" horizontal-position="left"></icon-button> \
            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="top" horizontal-position="right"></icon-button> \
            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="top" horizontal-position="center"></icon-button> \
            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="bottom" horizontal-position="left"></icon-button> \
            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="bottom" horizontal-position="right"></icon-button> \
            \n<icon-button icon-class="fa fa-cog fa-2x" tooltip="message position"  vertical-position="bottom" horizontal-position="center"></icon-button>'
    }
  },
  components: {
    PageHeader,
    Example,
    Property,
    TableBody,
    IconButton,
    TableHeader,
    TableWrapper
  }
}
</script>

<style media="screen" lang="scss">
@import "../styles/common.scss";

</style>
