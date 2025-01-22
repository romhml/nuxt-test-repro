<template>
  <div>
    <button v-bind="$attrs"> <slot /> </button>
  </div>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false })
</script>
