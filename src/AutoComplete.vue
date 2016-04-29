<template>
  <div :style="mRootStyle"
       @input="handleInput($event)"
       >
    <text-field
      :style-obj="mTextStyle"
      :float-style="floatStyle"
      :hint-style="hintStyle"
      :input-style="inputStyle"
      :underline-style="underlineStyle"
      :forcusUnderline-style="forcusUnderlineStyle"
      :background-color="backgroundColor"
      :float-content="floatContent"
      :disabled="disabled"
      :hint-content="hintContent"
      :default-content="defaultContent"
      :on-blur="handleBlur"
      :on-focus="onFocus"
    >
    </text-field>
    <popover :open="open" :style-obj="mMenuStyle" v-if="!disabled" :vertical-animation="true">
      <menu-item v-for="comp in completion | filterBy defaultFilter " :label="comp" slot="popover"></menu-item>
    </popover>
  </div>
</template>

<script type="text/javascript">
import TextField from 'TextField'
import Popover from 'Popover'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import MenuItem from 'MenuItem'

export default {
  data: function() {
    const styles = {
      root: {
        display: 'inline-block'
      },
      menu: {
        transformOrigin: '50% 0%'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mMenuStyle: Object.assign(styles.menu, this.menuStyle),
      open: false,
      inputValue: ''
    }
  },
  props: {
    styleObj: Object,
    menuStyle: Object,
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
    defaultContent: String,
    onBlur: Function,
    onFocus: Function,
    matchCase: {
      type: Boolean,
      default: true
    },
    completion: Array
  },
  components: {
    MenuItem,
    TextField,
    Popover
  },
  methods: {
    handleInput: function(event) {
      var value = event.target.value
      this.inputValue = this.matchCase ? value : value.toLowerCase()
      this.open = value ? true : false
    },
    handleBlur: function() {
      this.open = false

      if (this.onBlur) { this.onBlur() }
    },
    defaultFilter: function(comp) {
      var str = this.matchCase ? comp : comp.toLowerCase()
      var index = str.indexOf(this.inputValue)
      return index >= 0
    }
  }
}
</script>
