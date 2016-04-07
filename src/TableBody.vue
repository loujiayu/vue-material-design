<template>
  <div>
    <table :style="mRootStyle">
      <tbody>
        <tr v-for="row in bodyContent" :style="mTrStyle" @click="handleClick"
            key="{{$index}}" :class="selectedRow[$index] ? 'selected':''">
          <td v-if="select" :style="mSelectStyle"><check-box :trigger="selectedRow[$index]"></check-box></td>
          <td v-for="col in row" :style="mTdStyle">
            {{col.val}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import CheckBox from 'CheckBox'

export default {
  data: function() {
    const styles = {
      root: {
        backgroundColor: '#fff',
        padding: '0 24px',
        borderCollapse: 'collapse',
        width: '100%',
        borderSpacing: '0',
        tableLayout: 'fixed',
        fontFamily: 'Roboto, sans-serif'
      },
      td: {
        fontWeight: 'normal',
        fontSize: '13px',
        paddingLeft: '24px',
        paddingRight: '24px',
        height: '56px',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        position: 'relative',
      },
      tr: {
        borderBottom: '1px solid #e0e0e0'
      },
      select: {
        width: '24px'
      },
    }
    return {
      mTrStyle: Object.assign(styles.tr, this.trStyle),
      mRootStyle: getStyles(styles.root, this.styleObj),
      mTdStyle: getStyles(styles.td, this.tdStyle),
      mSelectStyle: getStyles(Object.assign({}, styles.td, styles.select), this.tdStyle),
      selectedRow: Array(this.bodyContent.length).fill(false)
    }
  },
  props: {
    styleObj: Object,
    bodyContent: Array,
    striped: Boolean,
    selectable: Boolean,
    select: {
      type: Boolean,
      default: true
    }
  },
  components: {
    CheckBox
  },
  methods: {
    handleClick: function(e) {
      var node
      if (e.target.nodeName === 'TR') {
        node = e.target.nodeName
      } else {
        node = e.target.closest('tr')
      }
      const rowIndex = node.getAttribute('key')
      const prev = this.selectedRow[rowIndex]
      this.selectedRow.$set(rowIndex, !prev)
      // console.log(obj);
      // this.$refs.sel.$el.click()
    }
  }
}
</script>

<style media="screen">
  .selected {
    background-color: rgb(224, 224, 224);
  }
</style>
