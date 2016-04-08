<template>
  <div>
    <page-header :title="title" :description="description"></page-header>
    <example :code-html="html" class="button-examples">
      <base-button label="BUTTON" slot="ex"></base-button>
      <base-button label="FACEBOOK" slot="ex" :label-style="labelStyle" background-color="rgb(58, 87, 149)" :shadow-depth='1' icon-class="fa fa-facebook-official fa-2x"></base-button>
      <base-button label="LINUX" slot="ex" :label-style="labelStyle" background-color="rgb(73, 219, 114)" :shadow-depth='1' :icon-front=true icon-class="fa fa-linux fa-2x"></base-button>
      <base-button label="GITHUB" slot="ex" :shadow-depth='1' link='https://github.com' icon-class="fa fa-github fa-2x"></base-button>
      <base-button label="BUTTON" slot="ex" :disabled=true></base-button>
    </example>
  </div>
</template>

<script type="text/javascript">
import PageHeader from 'PageHeader'
import Example from 'Example'
import {BaseButton} from 'mtv'

export default {
  data: function() {
    return {
      title: 'Buttons',
      description: 'A button clearly communicates what action will occur when the user touches it.',
      labelStyle: {
        color: '#eff2f4'
      },
      html: '\t<base-button label="BUTTON"></base-button> \
              \n\t<base-button label="FACEBOOK" background-color="rgb(58, 87, 149)" :shadow-depth="1" icon-class="fa fa-facebook-official fa-2x"></base-button> \
              \n\t<base-button label="LINUX" background-color="rgb(73, 219, 114)" :shadow-depth="1" :icon-front=true icon-class="fa fa-linux fa-2x"></base-button> \
              \n\t<base-button label="GITHUB" :shadow-depth="1" link="https://github.com" icon-class="fa fa-github fa-2x"></base-button> \
              \n\t<base-button label="BUTTON" :disabled=true></base-button>'


    }
  },
  components: {
    PageHeader,
    Example,
    BaseButton
  }
}
</script>
<style media="screen" lang="less">
.button-examples {
  button {
    margin: 10px !important;
  }
}
</style>
