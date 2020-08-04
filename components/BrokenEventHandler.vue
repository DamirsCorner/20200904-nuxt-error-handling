<template>
  <button @click="handle()">Click me!</button>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class BrokenEventHandler extends Vue {
  handle() {
    throw new Error('event error')
  }
}
</script>
