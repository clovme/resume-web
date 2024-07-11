<script setup lang="ts">
import {getStore} from "@/utils";
import RichText from "@/components/utils/RichText.vue";
import plus from "@/components/icon/plus.vue";
import { IWorksExperience } from '@/store/interface/works.ts'

const datas = getStore<IWorksExperience[]>('getWorks');
</script>

<template>
  <div>
    <div class="split-row-module" v-for="data in datas">
      <el-row class="split-row-1">
        <el-col :span="5">
          <div class="split-1">
            <label>公司名称</label>
            <el-input v-model="data.name" placeholder="请输入公司名称" clearable />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="split-1">
            <label>职位</label>
            <el-input v-model="data.title" placeholder="请输入职位名称" clearable />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="split-1">
            <label>在职时间</label>
            <el-date-picker v-model="data.startAt" style="width: 130px" type="month" placeholder="请选开始时间" value-format="YYYY-MM" />-
            <el-date-picker v-model="data.endAt" style="width: 130px" type="month" placeholder="请选结束时间" value-format="YYYY-MM" v-if="!data.toNow" />
            <el-checkbox v-model="data.toNow" label="至今" />
          </div>
        </el-col>
        <el-col :span="7">
          <div class="split-1" style="justify-content: flex-end">
            <el-button class="el-c-button" type="success" round>上移</el-button>
            <el-button class="el-c-button" type="success" round>下移</el-button>
            <el-button class="el-c-button" type="danger" round>删除</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="split-row-1">
        <el-col>
          <div class="split-1">
            <RichText v-model="data.content" placeholder="详细描述你的职责范围、工作任务及取得的成绩，描述尽量具体简洁，工作经验的描述尽量与目标岗位的招聘要求匹配。" />
          </div>
        </el-col>
        <el-col>
          <el-divider border-style="dashed" style="border-color: #ffc69f"></el-divider>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col>
        <el-button type="success" size="large" :icon="plus" round>新增一条工作经历</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
</style>
