<script setup lang="ts">
import { getStore } from '@/utils'
import {CheckedTags, SkillsExpertise} from '@/store/interface'
import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import TitleContent from "@/components/utils/TitleContent.vue";
import form from "@/utils/form.ts";

defineProps<{
  title: string
}>()

const level = form.ProficiencyLevel.reduce((acc: {[key: number]: string}, curr) => {
  acc[curr.value] = curr.label;
  return acc;
}, {});

const data = getStore<SkillsExpertise>('getSkillsExpertise');
function format(tag: CheckedTags) {
  return () => (tag.isWord ? level[tag.level] : `${tag.level}%`)
}
</script>

<template>
  <ModuleTitle :title="title">
    <TitleContent :content="data.content" :margin="0" />
    <el-row :gutter="20" style="margin-top: 10px; font-size: 13px">
      <el-col v-for="key in Object.keys(data.checkedTags)" :span="8">
        <label v-text="key"></label>
        <el-progress :percentage="data.checkedTags[key].level" :format="format(data.checkedTags[key])" />
      </el-col>
    </el-row>
  </ModuleTitle>
</template>

<style scoped lang="scss">
</style>
