<script setup lang="ts">

import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import { getStore } from '@/utils'
import { IApplicationInfo } from '@/store/interface/applicationinfo.ts'
import { ref, watch } from 'vue'

defineProps<{
  title: string
}>()

const baokaoListStyle = ref({
  fontSize: '14px',
  padding: '0 0 10px 0'
})

const data = getStore<IApplicationInfo>('getApplicationInfo');

if (data.value.gradeGrade.length <= 0) {
  baokaoListStyle.value.padding = '0'
}

watch(data.value, (newValue) => {
  if (newValue.gradeGrade.length <= 0) {
    baokaoListStyle.value.padding = '0'
  }
})
</script>

<template>
  <ModuleTitle :title="title">
    <ul class="baokao-list" :style="baokaoListStyle">
      <li>报考院校：{{data.name}}</li>
      <li>报考专业：{{data.major}}</li>
    </ul>
    <table class="baokao-table" v-if="data.gradeGrade.length > 0">
      <tr>
        <td rowspan="2">{{data.cname}}</td>
        <td v-for="item in data.gradeGrade">{{ item.name }}</td>
      </tr>
      <tr>
        <td v-for="item in data.gradeGrade">{{ item.score }}</td>
      </tr>
    </table>
  </ModuleTitle>
</template>

<style scoped lang="scss">
ul.baokao-list {
  list-style: none;
  display: flex;
  padding: 0 0 10px 0;

  li {
    flex: 1;
  }
}
table.baokao-table {
  border-collapse: collapse;

  td {
    border: 1px solid #aaa;
    padding: 5px;
    text-align: center;
    font-weight: 400;
    min-width: 70px;
    white-space: nowrap;
  }
}
</style>
