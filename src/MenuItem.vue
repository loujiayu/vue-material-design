<template>
  <div :style="mRootStyle">
    <base-button
      :style="mButtonStyle"
      :shadow-depth="shadowDepth"
      :label="label"
      :hover="ripple"
      :link="link"
      :style-obj="buttonStyle"
      :label-style="labelStyle"
      :ripple="ripple"
    >
    </base-button>
    <icon-button
      v-if="iconClass"
      :style="mIconStyle"
      :icon-style="iconStyle"
      :icon-class="iconClass"
      :on-click="onClick"
    >
    </icon-button>
  </div>
</template>

<script type="text/javascript">
import BaseButton from 'BaseButton'
import IconButton from 'IconButton'
import getStyles from 'utils/getStyles'

export default {
  data: function() {
    const styles = {
      root: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      icon: {
        flex: '2'
      },
      button: {
        flex: '5'
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mButtonStyle: getStyles(styles.button, this.buttonStyle),
      mIconStyle: getStyles(styles.icon, this.iconStyle)
    }
  },
  props: {
    styleObj: Object,
    isHorizen: Boolean,

    shadowDepth: Number,
    label: String,
    hover: Boolean,
    link: String,
    buttonStyle: Object,
    labelStyle: Object,
    ripple: {
      type: Boolean,
      default: true
    },

    iconClass: String,
    iconStyle: Object,
    onClick: Function
  },
  components: {
    BaseButton,
    IconButton
  },
  methods: {

  }
}
</script>
