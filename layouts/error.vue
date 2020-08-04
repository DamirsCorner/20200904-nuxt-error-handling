<template>
  <div>Custom error page: {{ error.message }}</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { NuxtError } from '@nuxt/types'

@Component
export default class ErrorLayout extends Vue {
  @Prop({ type: Object, required: true }) readonly error!: NuxtError
}
</script>
