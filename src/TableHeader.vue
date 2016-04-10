<template>
  <div>
    <table :style="mRootStyle">
      <thead>
        <tr>
          <td v-if="select" :style="mSelectStyle"><check-box :disabled=true></check-box></td>
          <th v-for="col in headers" :style="mThStyle">
            {{col | capitalize}}
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script type="text/javascript">
import getStyles from 'utils/getStyles'
import {zDepthShadows} from 'styles/common'
import Transitions from 'styles/transitions'
import CheckBox from 'CheckBox'

export default {
  data: function(){
    const styles = {
      root: {
        backgroundColor: '#fff',
        padding: '0 24px',
        borderCollapse: 'collapse',
        width: '100%',
        borderSpacing: '0',
        tableLayout: 'fixed',
        fontFamily: 'Roboto, sans-serif',
        borderBottom: '1px solid #e0e0e0'
      },
      th: {
        fontWeight: 'normal',
        fontSize: '16px',
        paddingLeft: '24px',
        paddingRight: '24px',
        height: '56px',
        textAlign: 'left',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        color: '#9e9e9e',
        position: 'relative',
      },
      select: {
        width: '24px'
      }
    }
    return {
      mRootStyle: getStyles(styles.root, this.styleObj),
      mThStyle: getStyles(styles.th, this.thStyle),
      mSelectStyle: getStyles(Object.assign({}, styles.th, styles.select), this.thStyle)
    }
  },
  props: {
    styleObj: Object,
    headers: Array,
    select: Boolean
  },
  components: {
    CheckBox
  }
}
</script>
