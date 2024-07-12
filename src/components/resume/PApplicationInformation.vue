<script setup lang="ts">

import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import { getStore } from '@/utils'
import { IApplicationInfo } from '@/store/interface/applicationinfo.ts'

defineProps<{
  title: string
}>()

const data = getStore<IApplicationInfo>('getApplicationInfo');
</script>

<template>
  <ModuleTitle :title="title">
    <ul class="baokao-list" style="font-size: 14px;">
      <li>报考院校：{{data.name}}</li>
      <li>报考专业：{{data.major}}</li>
    </ul>
    <table class="baokao-table">
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
