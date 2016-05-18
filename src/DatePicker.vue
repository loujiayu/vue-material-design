<template>
  <div :style="mRootStyle">
    <text-field :style-obj="mTextStyle" :on-focus="handleFocus" :default-content="selectedString"></text-field>
    <dialog :open.sync="open" :wrapper-style="mDialogStyle" v-ref:dialog>
      <div slot="dialogBody">
        <date-month></date-month>
        <div :style="weekRowStyle">
          <div v-for="t in weekShort" track-by="$index" :style="weekColStyle">
            {{t}}
          </div>
        </div>
        <div :style="calendarStyle">
          <div v-for="calender in calenders" :transition="calender.direction" :style="calInnerStyle">
            <div v-for="row in calender.days" :style="rowStyle">
              <div key v-for="col in row" track-by="$index" :style="colStyle" @click="handleClick($event)">
                <div :style="dayStyle">
                </div>
                <span :style="numStyle">{{col}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <base-button label="CANCEL" slot="dialogAction" :on-click="handleCancel"></base-button>
      <base-button label="OK" slot="dialogAction" :on-click="handleOK"></base-button>
    </dialog>
  </div>
</template>

<script type="text/javascript">
import TextField from 'TextField'
import Dialog from 'Dialog'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import BaseButton from 'BaseButton'
import 'utils/polyfill'

import DateMonth from './DateMonth'

export default {
  data: function() {
    const styles = {
      root: {

      },
      textField: {

      },
      dialog: {
        width: '320px',
        padding: '0',
        fontSize: '12px',
        lineHeight: '36px'
      },
      calender: {
        transition: Transitions.easeOut(),
        height: '216px',
        position: 'relative',
        overflow: 'hidden'
      },
      calInner: {
        willChange: 'transform, opacity',
        boxSizing: 'border-box',
        padding: '16px 14px 0',
        position: 'absolute',
        transition: Transitions.easeOut(),
        top:'0',
        left:'0',
        width: '100%',
        height: '100%'
      },
      rowStyle: {
        height: '40px',
        textAlign: 'center'
      },
      colStyle: {
        display: 'inline-block',
        width: '40px',
        padding: '4px 2px',
        boxSizing: 'border-box',
        cursor: 'pointer'
      },
      day: {
        borderRadius: '50%',
        position: 'absolute',
        height: '36px',
        width: '36px',
        opacity: '0',
        transform:'scale(0)',
        transition: Transitions.easeOut('200ms', ['transform', 'opacity'], '')
      },
      number: {
        position: 'relative',
      },
      weekRowStyle: {
        padding: '0 14px',
        lineHeight: '12px',
        opacity: '0.5',
        height: '12px',
        fontWeight: '500',
        textAlign: 'center'
      },
      weekColStyle: {
        width: '40px',
        display: 'inline-block'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mTextStyle: Object.assign(styles.textField, this.textFieldStyle),
      mDialogStyle: Object.assign(styles.dialog, this.dialogStyle),
      rowStyle: styles.rowStyle,
      colStyle: styles.colStyle,
      weekRowStyle: styles.weekRowStyle,
      weekColStyle: styles.weekColStyle,
      calInnerStyle: styles.calInner,
      calendarStyle: styles.calender,
      dayStyle: styles.day,
      numStyle: styles.number,
      weekShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      calenders: [],
      prevSelect: null,
      open: false,
      dateSelected: new Date(),
      selectedString: ''
    }
  },
  props: {
    styleObj: Object,
    textFieldStyle: Object,
    dialogStyle: Object,
  },
  components: {
    TextField,
    BaseButton,
    DateMonth,
    Dialog,
  },
  beforeCompile: function() {
    this.$on('back', (date) => {
      this.handleSlide(date, 'leftSlide', true)
    })
    this.$on('forward', (date) => {
      this.handleSlide(date, 'rightSlide', true)
    })
    this.handleSlide(new Date(), 'leftSlide')
  },
  methods: {
    handleSlide: function(date, direction, shift) {
      this.calenders.push({days: this.getMonthDays(date), direction: direction})
      if (shift) {
        this.calenders.shift()
      }
    },
    getDaysInMonth: function(date) {
      const resultDate = new Date(date.getFullYear(), date.getMonth(), 1)
      resultDate.setMonth(resultDate.getMonth() + 1)
      resultDate.setDate(resultDate.getDate() - 1)
      return resultDate
    },
    getMonthDays: function(d) {

      var days = []
      var firstDay = new Date(d.getFullYear(), d.getMonth(), 1)
      var dayOfWeek = Array(firstDay.getDay()).fill('')
      var lastDate = this.getDaysInMonth(d)
      var emptyDays = 6 - lastDate.getDay()

      var daysOfMonth = dayOfWeek.concat(Object.keys([...Array(lastDate.getDate() + 1)]).slice(1))
      daysOfMonth = daysOfMonth.concat(Array(emptyDays).fill(''))
      var index = 0
      while (index < daysOfMonth.length) {
        index += 7
        days.push(daysOfMonth.slice(index-7, index))
      }
      this.dateSelected = d
      this.calendarStyle.height = days.length === 5 ? '216px' : '256px'
      return days
    },
    handleClick: function(event) {
      var node
      var parent = event.target.closest('[key]')
      if (this.prevSelect) {
        this.prevSelect.style.backgroundColor = ''
        this.prevSelect.opacity = '0'
        this.prevSelect.style.transform = 'scale(0)'
      }

      if (node = parent.children[0]) {
        node.style.backgroundColor = 'rgb(126, 116, 230)'
        node.style.transform = 'scale(1)'
        node.style.opacity = '1'
        this.prevSelect = node
        this.dateSelected.setDate(parent.textContent.trim())
        console.log(this.dateSelected);
      }
    },
    handleFocus: function() {
      this.open = true
    },
    handleCancel: function() {
      this.open = false
    },
    handleOK: function() {
      this.open = false
      this.selectedString = this.dateSelected.toLocaleDateString()
    }
  }
}
</script>

<style media="screen">
.leftSlide-transition,
.rightSlide-transition {
  opacity: 1;
  transform: translateX(0);
}
.leftSlide-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.leftSlide-leave {
  transform: translateX(100%);
  opacity: 0;
}
.rightSlide-enter {
  transform: translateX(-100%);
  opacity: 0;
}
.rightSlide-leave {
  transform: translateX(100%);
  opacity: 0;
}
</style>
