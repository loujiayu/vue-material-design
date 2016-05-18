<template>
  <div :style="mRootStyle">
    <div :style="arrowStyle" @click="handleback">
      <arrow-left></arrow-left>
      <touch-ripple :style-obj="zoom" :center="true"></touch-ripple>
    </div>
    <span v-for="d in dateSet" :transition="d.direction" :style="dateStyle">{{d.date}}</span>
    <div :style="arrowStyle" @click="handleforward">
      <arrow-right></arrow-right>
      <touch-ripple :style-obj="zoom" :center="true"></touch-ripple>
    </div>
  </div>
</template>

<script type="text/javascript">

import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import ArrowLeft from 'svg/ArrowLeft'
import ArrowRight from 'svg/ArrowRight'
import touchRipple from 'touchRipple'
import { isIE } from 'utils/util'

const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
  'Oct', 'Nov', 'Dec'];

export default {
  data: function(){
    let useFlexbox = isIE() > 9
    const today = new Date()
    const month = monthList[today.getMonth()]
    const year = today.getFullYear()
    const styles = {
      root: {
        display: useFlexbox ? '-ms-flexbox' : 'flex',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        MsFlexPack: 'justify',
        alignItems: 'center',
        MsFlexAlign: 'center',
        position: 'relative'
      },
      date: {
        willChange: 'transform, opacity',
        position: 'absolute',
        top: '6px',
        left: '135px',
        textAlign: 'center',
        transition: Transitions.easeOut(),
      },
      arrow: {
        position: 'relative',
        width: '48px',
        height: '48px',
        cursor: 'pointer'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      dateStyle: styles.date,
      arrowStyle: styles.arrow,
      curYear: year,
      curMonth: today.getMonth(),
      curDate: `${month} ${year}`,
      dateSet: [{date: `${month} ${year}`, direction: 'upSlide'}]
    }
  },
  props: {
    styleObj: Object,
  },
  components: {
    touchRipple,
    ArrowLeft,
    ArrowRight
  },
  methods: {
    handleback: function() {
      this.dateSet.$set(this.dateSet.length-1, {date:this.curDate, direction: 'upSlide'})
      if (this.curMonth === 0) {
        this.curMonth = 11
        this.curYear -= 1
      } else {
        this.curMonth -= 1
      }
      this.curDate = `${monthList[this.curMonth]} ${this.curYear}`
      this.dateSet.push({date:this.curDate, direction: 'upSlide'})
      this.$dispatch('back', new Date(this.curYear, this.curMonth))
      this.dateSet.shift()
    },
    handleforward: function() {
      this.dateSet.$set(this.dateSet.length-1, {date:this.curDate, direction: 'downSlide'})
      if (this.curMonth === 11) {
        this.curMonth = 0
        this.curYear += 1
      } else {
        this.curMonth += 1
      }
      this.curDate = `${monthList[this.curMonth]} ${this.curYear}`
      this.dateSet.push({date:this.curDate, direction:'downSlide'})
      this.$dispatch('forward', new Date(this.curYear, this.curMonth))
      this.dateSet.shift()
    },
    showLast: function(d, index) {
      return this.dateSet[this.dateSet.length - 1] === d
    }
  }
}
</script>

<style media="screen">
.upSlide-transition,
.downSlide-transition {
  opacity: 1;
  transform: translateY(0);
}
.upSlide-enter {
  opacity: 0;
  transform: translateY(-100%);
}
.upSlide-leave {
  opacity: 0;
  transform: translateY(100%);
}

.downSlide-enter {
  opacity: 0;
  transform: translateY(100%);
}
.downSlide-leave {
  opacity: 0;
  transform: translateY(-100%);
}

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
