<template>
  <svg :style="mRootStyle" :viewBox='viewBox' >
    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
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
