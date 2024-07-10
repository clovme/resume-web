<script setup lang="ts">

import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import TitleContent from "@/components/utils/TitleContent.vue";

defineProps<{
  title: string
}>()

</script>

<template>
  <ModuleTitle :title="title">
    <TitleContent time="2024-6-20" title="成都网安科技发展有限公司" name="Python开发工程师" />
    <TitleContent time="2024-6-20" title="成都网安科技发展有限公司" name="Python开发工程师" />
  </ModuleTitle>
</template>

<style scoped lang="scss">
</style>
