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
      :on-blur="onBlur"
      :on-focus="onFocus"
      :value="value"
    >
    </text-field>
    <popover :open="open" :style-obj="mMenuStyle" v-if="!disabled" :vertical-animation="true" v-ref:popover>
      <menu-item v-for="comp in completion | filterBy defaultFilter "
                 :label="comp"
                 slot="popover"
                 :key="comp"
                 :label-on-click="handleClick">
      </menu-item>
    </popover>
  </div>
</template>

<script type="text/javascript">
import TextField from 'TextField'
import Popover from 'Popover'
import Event from 'utils/events'
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
      value:null,
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
  ready: function() {
    Event.on(window, 'click', this.clickAway)
  },
  destroyed: function() {
    Event.off(window, 'click', this.clickAway)
  },
  methods: {
    handleClick: function(event, label) {
      this.value = label
      this.open = false
    },
    handleInput: function(event) {
      var value = event.target.value
      this.inputValue = this.matchCase ? value : value.toLowerCase()
      this.open = value ? true : false
    },
    clickAway: function(event) {
      if (!this.$refs.popover.$el.contains(event.target) && this.open) {
        this.open = false
      }
    },
    defaultFilter: function(comp) {
      var str = this.matchCase ? comp : comp.toLowerCase()
      var index = str.indexOf(this.inputValue)
      return index >= 0
    }
  }
}
</script>
