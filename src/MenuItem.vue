<template>
  <div :style="mergedStyles">
    <base-button
      :shadow-depth="shadowDepth"
      :disabled="disabled"
      :on-click="onClick"
      :on-mouseEnter="onMouseEnter"
      :on-mouseLeave="onMouseLeave"
      :label="label"
      :icon-class="iconClass"
      :background-color="backgroundColor"
      :icon-front="iconFront"
      :label-color="labelColor"
      :link="link"
      :style="style">
    </base-button>
  </div>
</template>

<script type="text/javascript">
import BaseButton from 'BaseButton'
import getStyles from 'utils/getStyles'

export default {
  data: function() {
    return {
      originStyles: {
        display: this.isHorizen ? 'inline-block' : 'block'
      },
      mergedStyles: null
    }
  },
  props: {
    isHorizen: Boolean,
    shadowDepth: Number,
    disabled: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    label: String,
    iconClass: String,
    backgroundColor: String,
    iconFront: Boolean,
    labelColor: String,
    link: String,
    style: Object
  },
  components: {
    BaseButton
  },
  created: function() {
    this.mergedStyles = getStyles(this.style, this.originStyles)
  }
}
</script>
