<template>
  <div>
    <icon-button
      slot="click"
      :icon-class="iconClass"
      :background-color="backgroundColor"
      :onClick="onClick"
      :disabled="disabled"
      :link="link">
    </icon-button>
    <slot name="list" slot="menu"></slot>
  </div>
</template>

<script type="text/javascript">
import BaseMenu from 'BaseMenu'

export default {
  data: {
    return {

    }
  },
  props: {

  },
  components: {
    BaseMenu
  }
}
</script>
