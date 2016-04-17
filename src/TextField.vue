<template>
  <div :style="mRootStyle">
    <label v-if="floatContent" for="sp" :style="mFloatStyle">{{floatContent}}</label>
    <div :style="mHintStyle" v-show="show" v-if="hintContent">
      {{hintContent}}
    </div>
    <div>
      <hr :style="mUnderlineStyle" />
      <hr :style="mForcusUnderlineStyle" />
    </div>
    <input :disabled="disabled" type="text" :style="mInputStyle" id="sp"
           @focus="handleForcus" @blur="handleBlur($event)"
           @input="handleInput($event)" :value="defaultContent"/>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'

export default {
  data: function() {
    const lineStyle = {
      border: 'none',
      width: '100%',
      borderBottom: this.disabled ? 'dotted 2px' : 'solid 1px',
      boxSizing: 'content-box',
      position: 'absolute',
      bottom: this.floatContent ? '25px' : '10px',
      borderColor: '#e0e0e0',
      margin: '0'
    }
    const forcusStyle = {
      borderColor: 'rgb(0, 188, 212)',
      transform: 'scaleX(0)',
      borderBottom: 'solid 2px',
      transition: Transitions.easeOut(),
    }
    const styles = {
      root: {
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
      float: {
        position: 'absolute',
        lineHeight: '22px',
        top: '25px',
        willChange: 'transform',
        transform: this.defaultContent ?
              'perspective(1px) scale(0.75) translate3d(0, -28px, 0)' :
              'scale(1) translate3d(0, 0, 0)',
        transition: Transitions.easeOut(),
        cursor: this.disabled ? 'default' : 'text',
        transformOrigin: 'left top',
        color: 'rgb(192, 198, 201)'
      },
      hint: {
        position:'absolute',
        lineHeight: '22px',
        top: this.floatContent ? '25px' : '13px',
        color: 'rgb(192, 198, 201)'
      },
      input: {
        padding: '0',
        width: '100%',
        height: '100%',
        border: 'none',
        outline: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 'inherit',
        fontFamily: 'inherit'
      },
      underline: {
        border: 'none',
        width: '100%',
        borderBottom: this.disabled ? 'dotted 2px' : 'solid 1px',
        boxSizing: 'content-box',
        position: 'absolute',
        bottom: this.floatContent ? '25px' : '10px',
        borderColor: '#e0e0e0',
        margin: '0'
      },
      forcusUnderline: Object.assign({}, lineStyle, forcusStyle),
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mFloatStyle: styles.float,
      mHintStyle: getStyles(styles.hint, this.hintStyle),
      mInputStyle: getStyles(styles.input, this.inputStyle),
      mUnderlineStyle: getStyles(styles.underline, this.underlineStyle),
      mForcusUnderlineStyle: styles.forcusUnderline,
      isForcused: false,
      show: (this.isForcused && this.floatContent && this.hintContent) ||
            (this.hintContent && !this.defaultContent && !this.floatContent)
    }
  },
  props: {
    styleObj: Object,
    floatStyle: Object,
    hintStyle: Object,
    inputStyle: Object,
    underlineStyle: Object,
    forcusUnderlineStyle: Object,
    backgroundColor: String,
    floatContent: String,
    disabled: {
      type: Boolean,
      default: false
    },
    hintContent: String,
    defaultContent: String
  },
  methods: {
    handleForcus: function() {
      this.isForcused = true
      this.show = event.target.value ? false : true
      this.$set('mForcusUnderlineStyle.transform', 'scaleX(1)')
      this.$set('mFloatStyle.transform', 'perspective(1px) scale(0.75) translate3d(0, -28px, 0)')
      this.$set('mFloatStyle.pointerEvents', 'none')
      this.$set('mFloatStyle.color', 'rgb(105, 189, 242)')
    },
    handleBlur: function(event) {
      this.isForcused = false
      this.show = (this.floatContent || event.target.value) ? false : true
      this.$set('mForcusUnderlineStyle.transform', 'scaleX(0)')
      if (!event.target.value) {
        this.$set('mFloatStyle.transform', 'scale(1) translate3d(0, 0, 0)')
        this.$set('mFloatStyle.pointerEvents', 'auto')
        this.$set('mFloatStyle.color', 'rgb(192, 198, 201)')
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
