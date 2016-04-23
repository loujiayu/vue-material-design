<template >
  <div :style="mRootStyle">
    <div :style="">
      <slot name="leftNav"></slot>
    </div>
    <div :style="mTitleStyle">
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
    const styles = {
      root: {
        display: 'flex',
        position: 'fixed',
        // backgroundColor: '#4fc08d',
        width: '100%',
        backgroundColor: 'rgb(41, 43, 38)',
        lineHeight: navBar.lineHeight,
        height: navBar.lineHeight
      },
      title: {
        flex: '1',
        padding: '0 20px',
        color: 'white',
        fontWeight: '700',
        fontSize: '20px'
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mTitleStyle: getStyles(styles.title, this.titleStyle)
    }
  },
  props: {
    barLeft: Array,
    barRight: Array,
    title: Array,
    styleObj: Object,
    titleStyle: Object
  },
  components: {
    BaseButton,
    IconButton
  }
}
</script>
