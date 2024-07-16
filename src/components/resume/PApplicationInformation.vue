<script setup lang="ts">

import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import { getStore } from '@/utils'
import { IApplicationInfo, ICourseGrade } from '@/store/interface/applicationinfo.ts'
import { ref, watch } from 'vue'

defineProps<{
  title: string
}>()

const baokaoListStyle = ref({
  fontSize: '14px',
  padding: '0 0 10px 0',
  listStyle: 'none',
  display: 'flex'
})

const data = getStore<IApplicationInfo>('getApplicationInfo');
const courseGrade = getStore<ICourseGrade[]>('getCourseGrade');

if (!courseGrade.value || courseGrade.value.length <= 0) {
  baokaoListStyle.value.padding = '0'
}

watch(courseGrade.value, (newValue) => {
  baokaoListStyle.value.padding = newValue.length <= 0 ? '0' : '0 0 10px 0'
})

watch(data.value, (newValue) => {
  baokaoListStyle.value.padding = newValue.name || newValue.major ? '0' : '0 0 10px 0'
})
</script>

<template>
  <ModuleTitle :title="title">
    <ul v-if="data.name || data.major || courseGrade.length > 0" class="baokao-list" :style="baokaoListStyle">
      <li style="flex: 1">报考院校：{{data.name}}</li>
      <li style="flex: 1">报考专业：{{data.major}}</li>
    </ul>
    <table style="border-collapse: collapse;" v-if="courseGrade.length > 0">
      <tr>
        <td style="border: 1px solid #aaa;padding: 5px;text-align: center;font-weight: 400;min-width: 70px;white-space: nowrap;" rowspan="2">{{data.cname}}</td>
        <td style="border: 1px solid #aaa;padding: 5px;text-align: center;font-weight: 400;min-width: 70px;white-space: nowrap;" v-for="item in courseGrade">{{ item.name }}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #aaa;padding: 5px;text-align: center;font-weight: 400;min-width: 70px;white-space: nowrap;" v-for="item in courseGrade">{{ item.score }}</td>
      </tr>
    </table>
  </ModuleTitle>
</template>

<style scoped lang="scss">

</style>
