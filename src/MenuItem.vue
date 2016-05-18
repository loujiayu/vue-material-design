<template>
  <div :style="mRootStyle">
    <base-button
      :style-obj="mButtonStyle"
      :shadow-depth="shadowDepth"
      :label="label"
      :hover="ripple"
      :link="link"
      :label-style="labelStyle"
      :ripple="ripple"
      :on-click="labelOnClick"
    >
    </base-button>
    <icon-button
      v-if="iconClass"
      :style-obj="mIconStyle"
      :icon-style="iconStyle"
      :icon-class="iconClass"
      :on-click="iconOnClick"
    >
    </icon-button>
  </div>
</template>

<script type="text/javascript">
import BaseButton from 'BaseButton'
import IconButton from 'IconButton'
import { isIE } from 'utils/util'
export default {
  data: function() {
    let useFlexbox = isIE() > 9
    const styles = {
      root: {
        display: useFlexbox ? '-ms-flexbox' : 'flex',
        justifyContent: 'space-between',
        MsFlexPack: 'justify',
      },
      icon: {
        flex: '2'
      },
      button: {
        flex: '5',
        lineHeight: '48px',
        width: '100%'
        // paddingLeft:'20%'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      mButtonStyle: Object.assign(styles.button, this.buttonStyle),
      mIconStyle: Object.assign(styles.icon, this.iconStyle)
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
    iconOnClick: Function,
    labelOnClick: Function
  },
  components: {
    BaseButton,
    IconButton
  },
  methods: {

  }
}
</script>
