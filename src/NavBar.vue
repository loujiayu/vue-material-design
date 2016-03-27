<template >
  <div :style="mergedStyles">
    <div :style="">
      <slot name="leftNav"></slot>
    </div>
    <div :style="titleStyle">
      <slot name="title"></slot>
    </div>
    <div :style="">
      <slot name="rightNav"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import BaseButton from 'BaseButton'
import IconButton from 'IconButton'
import {baseTheme} from 'styles/muiTheme'

export default {
  data: function() {
    const {button, navBar} = baseTheme
    return {
      originStyle: {
        display: 'flex',
        backgroundColor: 'transparent',
        paddingLeft: navBar.padding,
        paddingRight: navBar.padding,
        lineHeight: navBar.lineHeight
      },
      mergedStyles: null,
      titleStyle: {
        flex: '1'
      }
    }
  },
  props: {
    barLeft: Array,
    barRight: Array,
    title: Array,
    styleObj: Object
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  },
  ready: function() {
    console.log('obj');
  },
  components: {
    BaseButton,
    IconButton
  }
}
</script>
