<template>
  <svg :style="mRootStyle" :viewBox='viewBox'>
    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
  </svg>
</template>

<script type="text/javascript">

export default {
  data: function(){
    const styles = {
      root: {
        position: 'absolute',
        height: '24px',
        width: '24px',
        top: '12px',
        left: '12px'
      }
    }
    return {
      mRootStyle: Object.assign(styles.root, this.styleObj),
      viewBox: '0 0 24 24',
    }
  },

}
</script>
