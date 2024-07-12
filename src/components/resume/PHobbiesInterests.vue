<script setup lang="ts">
import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import TitleContent from "@/components/utils/TitleContent.vue";
import { getStore } from '@/utils'
import { IHonors } from '@/store/interface/honors.ts'

defineProps<{
  title: string
}>()

const data = getStore<IHonors>('getHobbies');
</script>

<template>
  <ModuleTitle :title="title">
    <TitleContent :content="data.content" :margin="0" />
    <el-row style="margin-top: 10px; font-size: 13px">
      <el-col>
        <span v-for="key in Object.keys(data.checkedTags)" class="tags-item">{{key}}</span>
      </el-col>
    </el-row>
  </ModuleTitle>
</template>

<style scoped lang="scss">
.tags-item {
  display: inline-block;
  margin: 3px 15px 5px 0;
  padding: 5px 15px;
  border-radius: 18px;
  color: #555;
  position: relative;
  border: 1px solid rgba(78, 114, 130, 0.3);
  background-color: rgba(78, 114, 130, 0.04);
}
</style>
