<template>
  <div :style="mRootStyle">
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
    const styles = {
      root: {
        display: this.isHorizen ? 'inline-block' : 'block'
      },
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj)
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
    styleObj: Object
  },
  components: {
    BaseButton
  }
}
</script>
