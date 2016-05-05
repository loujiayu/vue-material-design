<template>
  <div :style="mRootStyle">
    <icon-button icon-class="leftArrow"></icon-button>
    <span :style="dateStyle">{{date}}</span>
    <icon-button icon-class="rightArrow"></icon-button>
  </div>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import IconButton from 'IconButton'

export default {
  data: function(){
    const styles = {
      root: {
        display: 'flex',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      date: {
        flex: '1',
        textAlign: 'center'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      dateStyle: styles.date
    }
  },
  props: {
    styleObj: Object,
    date: String
  },
  components: {
    IconButton,
  }
}
</script>

<style media="screen">
.leftArrow:after,
.leftArrow:before {
  content: ' ';
  position: absolute;
  height: 0;
  width: 0;
  right: 20px;
  border: solid transparent;
}

.rightArrow:after,
.rightArrow:before {
  content: ' ';
  position: absolute;
  height: 0;
  width: 0;
  border: solid transparent;
  left: 20px;
}

.leftArrow:after {
  border-right-color: white;
  border-width: 9px;
  top: 15px;
}
.leftArrow:before {
  border-right-color: black;
  border-width: 12px;
  top: 12px;
}
.rightArrow:after {
  border-left-color: white;
  border-width: 9px;
  top: 15px;
}
.rightArrow:before {
  border-left-color: black;
  border-width: 12px;
  top: 12px;
}
</style>
