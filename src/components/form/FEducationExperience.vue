<script setup lang="ts">
import {getStore} from "@/utils";
import RichText from "@/components/utils/RichText.vue";
import plus from "@/components/icon/plus.vue";
import form from "@/utils/form.ts";
import { IEducation } from '@/store/interface/education.ts'

const datas = getStore<IEducation[]>('getEducation');
</script>

<template>
  <div>
    <div class="split-row-module" v-for="data in datas">
      <el-row class="split-row-1">
        <el-col :span="5">
          <div class="split-1">
            <label>学校名称</label>
            <el-input v-model="data.name" placeholder="请输入学校名称" clearable />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="split-1">
            <label>所学专业</label>
            <el-input v-model="data.major" placeholder="请输入专业名称" clearable />
          </div>
        </el-col>
        <el-col :span="6">
          <div class="split-1" style="width: 320px">
            <label>就读时间</label>
            <el-date-picker v-model="data.startAt" style="width: 120px" type="month" placeholder="请选开始时间" />-
            <el-date-picker v-model="data.endAt" style="width: 120px" type="month" placeholder="请选结束时间" />
            <el-checkbox v-model="data.toNow" label="至今" />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="split-1">
            <label>学历</label>
            <el-select style="width: 100px" v-model="data.degree" placeholder="请选择学历">
              <el-option v-for="item in form.xueli" :key="item" :label="item" :value="item"/>
            </el-select>
          </div>
        </el-col>
        <el-col :span="2">
          <div class="split-1">
            <el-button class="el-c-button" type="success" round>上移</el-button>
            <el-button class="el-c-button" type="success" round>下移</el-button>
            <el-button class="el-c-button" type="danger" round>删除</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="split-row-1">
        <el-col>
          <div class="split-1">
            <RichText v-model="data.content" placeholder="所修课程、成绩排名、在校的职务、参赛获奖情况等有利于突出个人优势的信息。尽量简洁，突出重点。" />
          </div>
        </el-col>
        <el-col>
          <el-divider border-style="dashed" style="border-color: #ffc69f"></el-divider>
        </el-col>
      </el-row>
    </div>
    <el-row>
      <el-col>
        <el-button type="success" size="large" :icon="plus" round>新增一条教育经历</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
</style>
