<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  asyncData: () => {
    return Promise.reject('Async data error')
  },
})
export default class AsyncErrorPage extends Vue {}
</script>
