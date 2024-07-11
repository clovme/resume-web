<script setup lang="ts">
import {getStore} from "@/utils";
import RichText from "@/components/utils/RichText.vue";
import plus from "@/components/icon/plus.vue";
import { IProjectExperience } from '@/store/interface/project.ts'

const datas = getStore<IProjectExperience[]>('getProject');
</script>

<template>
  <div>
    <div class="split-row-module" v-for="data in datas">
      <el-row class="split-row-1">
        <el-col :span="5">
          <div class="split-1">
            <label>项目名称</label>
            <el-input v-model="data.name" placeholder="请输入项目名称" clearable />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="split-1">
            <label>参与角色</label>
            <el-input v-model="data.title" placeholder="请输入角色名称" clearable />
          </div>
        </el-col>
        <el-col :span="8">
          <div class="split-1">
            <label>项目时间</label>
            <el-date-picker v-model="data.startAt" value-format="YYYY-MM" style="width: 130px" type="month" placeholder="请选开始时间" />-
            <el-date-picker v-model="data.endAt" value-format="YYYY-MM" style="width: 130px" type="month" placeholder="请选结束时间" v-if="!data.toNow" />
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
            <RichText v-model="data.content" placeholder="请输入项目内容、成果和感悟，简洁突出重点。" />
          </div>
        </el-col>
        <el-col>
          <el-divider border-style="dashed" style="border-color: #ffc69f"></el-divider>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col>
        <el-button type="success" size="large" :icon="plus" round>新增一条项目经验</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
</style>
