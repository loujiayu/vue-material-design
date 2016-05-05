<template>
  <div :style="mRootStyle">
    <text-field :style-obj="mTextStyle"></text-field>
    <dialog :open="true" :wrapper-style="mDialogStyle">
      <div slot="dialogBody">
        <date-month date="jfiapf"></date-month>
        <div :style="weekRowStyle">
          <div v-for="t in weekShort" track-by="$index" :style="weekColStyle">
            {{t}}
          </div>
        </div>
        <div :style="calendarStyle">
          <div v-for="row in days" :style="rowStyle">
            <div key v-for="col in row" track-by="$index" :style="colStyle" @click="handleClick($event)">
              <div :style="dayStyle">
              </div>
              <span :style="numStyle">{{col}}</span>
            </div>
          </div>
        </div>
      </div>
      <base-button label="CANCEL" slot="dialogAction" :on-click="onClick"></base-button>
      <base-button label="OK" slot="dialogAction" :on-click="onClick"></base-button>
    </dialog>
  </div>
</template>

<script type="text/javascript">
import TextField from 'TextField'
import Dialog from 'Dialog'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import BaseButton from 'BaseButton'

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
        padding: '16px 14px 0',

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
      calendarStyle: styles.calender,
      dayStyle: styles.day,
      numStyle: styles.number,
      weekShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      days: [],
      prevSelect: null
    }
  },
  props: {
    styleObj: Object,
    textFieldStyle: Object,
    dialogStyle: Object,
    onClick: Function
  },
  components: {
    TextField,
    BaseButton,
    DateMonth,
    Dialog,
  },
  beforeCompile: function() {
    this.getMonthDays()
  },
  methods: {
    getDaysInMonth: function() {
      const today = new Date()
      const resultDate = new Date(today.getFullYear(), today.getMonth(), 1)
      resultDate.setMonth(resultDate.getMonth() + 1)
      resultDate.setDate(resultDate.getDate() - 1)
      return resultDate
    },
    getMonthDays: function() {
      var d = new Date(2016, 4, 1)
      var dayOfWeek = Array(d.getDay()).fill('')
      var lastDate = this.getDaysInMonth()
      var emptyDays = 7 - lastDate.getDay() - 1
      var daysOfMonth = dayOfWeek.concat(Object.keys([...Array(lastDate.getDate() + 1)]).slice(1))
      daysOfMonth = daysOfMonth.concat(Array(emptyDays).fill(''))
      var index = 0
      while (index < daysOfMonth.length) {
        index += 7
        this.days.push(daysOfMonth.slice(index-7, index))
      }
    },
    handleClick: function(event) {
      var node
      if (this.prevSelect) {
        this.prevSelect.style.backgroundColor = ''
        this.prevSelect.opacity = '0'
        this.prevSelect.style.transform = 'scale(0)'
      }
      if (node = event.target.closest('[key]').children[0]) {
        node.style.backgroundColor = 'rgb(126, 116, 230)'
        node.style.transform = 'scale(1)'
        node.style.opacity = '1'
        this.prevSelect = node
      }
    }
  }
}
</script>
