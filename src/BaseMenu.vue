<template>
  <div :style="">
    <slot name="click"></slot>
    <slot name="menu">
    <!-- <menu>
      <slot name="menu" slot="uuuu">

      </slot>
    </menu> -->

    <!-- <div :style="">

    </div> -->
  </div>

</template>

<script type="text/javascript">
import IconButton from 'IconButton'

export default {
  data:function() {
    return {

    }
  },
  props: {
    disabled: Boolean,
    onClick: Function,
    onMouseEnter: Function,
    onMouseLeave: Function,
    iconClass: String,
    backgroundColor: String,
    link: String
  },
  components: {
    IconButton
  },
  create: function() {

  },
}
</script>
