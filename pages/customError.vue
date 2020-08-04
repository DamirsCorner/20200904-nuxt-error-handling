<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Context } from '@nuxt/types'

@Component({
  asyncData: (ctx: Context) => {
    ctx.error({ message: 'Error fetching data...' })
  },
})
export default class AsyncErrorPage extends Vue {}
</script>
