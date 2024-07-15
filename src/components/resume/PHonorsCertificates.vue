<script setup lang="ts">
import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import TitleContent from "@/components/utils/TitleContent.vue";
import { getStore } from '@/utils'
import { IHonors } from '@/store/interface/honors.ts'

defineProps<{
  title: string
}>()

const data = getStore<IHonors>('getHonors');
</script>

<template>
  <ModuleTitle :title="title">
    <TitleContent v-if="data.id" :content="data.content" :margin="0" />
    <el-row v-if="data.id" style="margin-top: 10px; font-size: 13px">
      <el-col>
        <span v-for="key in Object.keys(data.checkedTags)" class="tags-item">{{key}}</span>
      </el-col>
    </el-row>
  </ModuleTitle>
</template>

<style scoped lang="scss">

</style>
