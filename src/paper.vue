<template >
  <div v-bind:style="ms">
  </div>
</template>

<script type="text/javascript">
import getStyles from './utils/getStyles'

export default {
  data: function() {
    return {
      originStyle: {
        backgroundColor: 'red',
        boxSizing: 'border-box',
        width: '100px',
        height: '100px'
      },
      ms: {}
    }
  },
  props:{
    style: Object,
    circle: Boolean,
    shadowDepth: Number
  },
  created: function () {
    this.ms = getStyles(this.style, this.initStyle())
    console.log(this.ms);
  },
  methods: {
    initStyle: function() {
      var target = Object.create(null)
      var tmp = {
        borderRadius: this.circle ? '50%' : '0px'
      }
      Object.assign(target, this.originStyle, tmp)
      return target
    }
  }
}
</script>
