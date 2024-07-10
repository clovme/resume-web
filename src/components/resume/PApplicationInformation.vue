<script setup lang="ts">

import ModuleTitle from "@/components/utils/ModuleTitle.vue";

defineProps<{
  title: string
}>()

</script>

<template>
  <ModuleTitle :title="title">
    <table border="1">
      <tr>
        <td rowspan="2">xxxx</td>
        <td>xxxx</td>
        <td>xxxx</td>
        <td>xxxx</td>
      </tr>
      <tr>
        <td>xxxx</td>
        <td>xxxx</td>
        <td>xxxx</td>
      </tr>
    </table>
  </ModuleTitle>
</template>

<style scoped lang="scss">
</style>
