<script setup lang="ts">
import { getStore } from '@/utils'
import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import TitleContent from "@/components/utils/TitleContent.vue";
import form from "@/utils/form.ts";
import { ICheckedTags, ISkillsExpertise } from '@/store/interface/skillsexpertise.ts'

defineProps<{
  title: string
}>()

const level = form.ProficiencyLevel.reduce((acc: {[key: number]: string}, curr) => {
  acc[curr.value] = curr.label;
  return acc;
}, {});

const data = getStore<ISkillsExpertise>('getSkillsExpertise');
function format(tag: ICheckedTags) {
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
