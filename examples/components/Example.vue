<template id="">
  <div class="examples">
    <div class="case">
      <slot name="ex"></slot>
    </div>
    <pre class="snippet-code"><code class="html">{{codeHtml}}</code></pre>
  </div>
</template>

<script type="text/javascript">

export default {
  props: {
    codeHtml: String
  }
}
</script>

<style media="screen" lang="scss">
.examples {
  border: 1px solid rgba(141, 143, 141, .3);
  border-radius: 4px;
  // padding: 20px;
  &::before {
    font-family: Roboto, sans-serif;
    content: 'example';
    text-transform: uppercase;
    color: #959595;
    display: block;
    font-weight: 700;
    margin-left: 16px;
    margin-top: 16px;
  }
}
.case {
  margin-bottom: 10px;
  padding: 10px;
}
.snippet-code {
  line-height: 18px;
  overflow: auto;
  white-space: pre;
  word-wrap: normal;
  word-break: break-all;
  background-color: #333;
  margin: 0;
  padding: 1.5rem;
  code {
    // padding: 16px;
    width: 100%;
    font-weight: bolder;
    color: #aed581;
    font-size: 13px;
  }
}
</style>
