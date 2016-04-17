<template>
  <div class="top">
    <h3 class="title">{{title}}</h3>
    <p> {{description | capitalize}} </p>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    title: String,
    description: String
  }
}
</script>

<style media="screen" lang="scss">
.title {
  border-bottom: 1px solid #eee;
  padding-bottom: .3em;
}
.top {
  margin-bottom: 20px;
}
</style>
