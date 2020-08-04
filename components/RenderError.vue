<template>
  <div>{{ invalid.missing }}</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class RenderError extends Vue {}
</script>
