<template>
  <div :style="mergedStyles" :class="className">
    <label v-if="floatContent" for="sp" :style="floatStyle">{{floatContent}}</label>
    <div :style="hintStyle" v-show="show">
      {{hintContent}}
    </div>
    <div>
      <hr :style="underlineStyle" />
      <hr :style="forcusUnderlineStyle" />
    </div>
    <input :disabled="disabled" type="text" :style="inputStyle" id="sp"
           @focus="handleForcus" @blur="handleBlur($event)"
           @input="handleInput($event)" />
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

import TextFieldHint from './TextFieldHint'

export default {
  data: function() {
    const lineStyle = {
      border: 'none',
      width: '100%',
      borderBottom: this.disabled ? 'dotted 2px' : 'solid 1px',
      boxSizing: 'content-box',
      position: 'absolute',
      bottom: this.floatContent ? '25px' : '15px',
      borderColor: '#e0e0e0',
      margin: '0'
    }
    const forcusStyle = {
      borderColor: 'rgb(0, 188, 212)',
      transform: 'scaleX(0)',
      borderBottom: 'solid 2px',
      transition: Transitions.easeOut(),
    }
    return {
      originStyles: {
        fontSize: '16px',
        lineHeight: '24px',
        width: '256px',
        height: this.floatContent ? '72px' : '48px',
        display: 'inline-block',
        position: 'relative',
        backgroundColor: this.backgroundColor,
        fontFamily: 'Roboto, sans-serif',
        transition: Transitions.easeOut('200ms', 'height'),
      },
      floatStyle: {
        position: 'absolute',
        lineHeight: '22px',
        top: '25px',
        willChange: 'transform',
        transition: Transitions.easeOut(),
        cursor: this.disabled ? 'default' : 'text',
        transformOrigin: 'left top',
        color: 'rgb(192, 198, 201)'
      },
      hintStyle: {
        position:'absolute',
        lineHeight: '22px',
        top: this.floatContent ? '25px' : '13px',
        color: 'rgb(192, 198, 201)'
      },
      inputStyle: {
        padding: '0',
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 'inherit',
        fontFamily: 'inherit'
      },
      underlineStyle: lineStyle,
      forcusUnderlineStyle: Object.assign({}, lineStyle, forcusStyle),
      mergedStyles:null,
      isForcused: false,
      show: (this.isForcused && this.floatContent && this.hintContent) ||
            (this.hintContent && !this.defaultContent && !this.floatContent)
    }
  },
  props: {
    styleObj: Object,
    className: String,
    backgroundColor: String,
    floatContent: String,
    shrink: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    hintContent: String,
    defaultContent: String
  },
  created: function() {
    this.mergedStyles = getStyles(this.originStyles, this.styleObj)
  },
  components: {
    TextFieldHint
  },
  methods: {
    handleForcus: function() {
      this.isForcused = true
      this.show = event.target.value ? false : true
      this.$set('forcusUnderlineStyle.transform', 'scaleX(1)')
      this.$set('floatStyle.transform', 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)')
      this.$set('floatStyle.pointerEvents', 'none')
      this.$set('floatStyle.color', 'rgb(105, 189, 242)')
    },
    handleBlur: function(event) {
      this.isForcused = false
      this.show = (this.floatContent || event.target.value) ? false : true
      this.$set('forcusUnderlineStyle.transform', 'scaleX(0)')
      if (!event.target.value) {
        this.$set('floatStyle.transform', 'scale(1) translate3d(0, 0, 0)')
        this.$set('floatStyle.pointerEvents', 'auto')
        this.$set('floatStyle.color', 'rgb(192, 198, 201)')
      }
    },
    handleInput: function(event) {
      this.show = event.target.value ? false :
                  (this.isForcused && this.floatContent && this.hintContent) ? true :
                  !this.floatContent && this.hintContent ? true : false
    }
  }
}
</script>
