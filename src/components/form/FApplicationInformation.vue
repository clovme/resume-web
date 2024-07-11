<script setup lang="ts">
import {getStore} from "@/utils";
import { IBasicInfo } from '@/store/interface/basicinfo.ts'
import plus from "@/components/icon/plus.vue";

const data = getStore<IBasicInfo>('getBasicInfo');
</script>

<template>
  <div>
    <div class="split-row-module">
      <el-row class="split-row-1">
        <el-col :span="5">
          <div class="split-1">
            <label>报考院校</label>
            <el-input v-model="data.desiredPosition" placeholder="请输入报考院校" clearable />
          </div>
        </el-col>
        <el-col :span="5">
          <div class="split-1">
            <label>报考专业</label>
            <el-input v-model="data.desiredCity" placeholder="请输入专业名称" clearable />
          </div>
        </el-col>
        <el-col :span="14"></el-col>
      </el-row>
      <el-row class="split-row-1">
        <el-col>
          <div class="split-1">
            <el-row>
              <el-col :span="24" style="gap: 2px">
                <div><el-input style="width: 80px" clearable/></div>
                <div style="flex-direction: column;display: flex;gap: 2px">
                  <el-input style="width: 80px" clearable/>
                  <el-input style="width: 80px" clearable/>
                </div>
                <div style="flex-direction: column;display: flex;gap: 2px">
                  <el-input style="width: 80px" clearable/>
                  <el-input style="width: 80px" clearable/>
                </div>
                <div style="flex-direction: column;display: flex;gap: 2px">
                  <el-input style="width: 80px" clearable/>
                  <el-input style="width: 80px" clearable/>
                </div>
                <div style="flex-direction: column;display: flex;gap: 2px">
                  <el-input style="width: 80px" clearable/>
                  <el-input style="width: 80px" clearable/>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col>
          <el-divider border-style="dashed" style="border-color: #ffc69f"></el-divider>
        </el-col>
        <el-col :span="11">
          <div class="split-1">
            <el-input placeholder="专业课名称，例如：英语" clearable/>:
            <el-input placeholder="专业课成绩，例如：80" clearable/>
            <el-button class="el-c-button" :icon="plus" plain>添加专业课成绩</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
