<script setup lang="ts">
import {getStore} from "@/utils";
import plus from "@/components/icon/plus.vue";
import { IApplicationInfo } from '@/store/interface/applicationinfo.ts'

const data = getStore<IApplicationInfo>('getApplicationInfo');
</script>

<template>
  <div>
    <div class="split-row-module">
      <el-row class="split-row-1">
        <el-col :span="5">
          <div class="split-1">
            <label>报考院校</label>
            <el-input v-model="data.name" placeholder="请输入报考院校" clearable />
          </div>
        </el-col>
        <el-col :span="5">
          <div class="split-1">
            <label>报考专业</label>
            <el-input v-model="data.major" placeholder="请输入专业名称" clearable />
          </div>
        </el-col>
        <el-col :span="14">
          <div class="split-1" style="justify-content: flex-end">
            <el-button class="el-c-button" :icon="plus" plain>添加专业课成绩</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row class="split-row-1">
        <el-col v-if="data.gradeGrade.length > 0">
          <div class="split-1">
            <el-row>
              <el-col :span="24">
                <table class="baokao-table">
                  <tr>
                    <td rowspan="2">{{data.cname}}</td>
                    <td v-for="item in data.gradeGrade">{{ item.name }}</td>
                  </tr>
                  <tr>
                    <td v-for="item in data.gradeGrade">{{ item.score }}</td>
                  </tr>
                  <tr>
                    <td>删除</td>
                    <td v-for="item in data.gradeGrade">
                      <i class="icon-circle-with-minus" />
                    </td>
                  </tr>
                </table>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
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

  tr:last-child {
    td {
      padding: 2px;

      i.icon-circle-with-minus {
        color: red;
        opacity: .6;
        font-size: 22px;
        transition: .3s;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
