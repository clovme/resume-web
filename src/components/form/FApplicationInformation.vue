<script setup lang="ts">
import {getStore} from "@/utils";
import plus from "@/components/icon/plus.vue";
import { IApplicationInfo } from '@/store/interface/applicationinfo.ts'

const data = getStore<IApplicationInfo>('getApplicationInfo');
</script>

<template>
  <div>
    <div class="split-row-module">
      <el-row class="split-row-1" style="margin-bottom: 15px">
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
        <el-col :span="14"></el-col>
      </el-row>
      <el-row class="split-row-1" v-if="data.gradeGrade.length > 0">
        <el-col style="margin-bottom: 15px">
          <div class="split-1">
            <el-row>
              <el-col :span="24">
                <table class="baokao-table">
                  <tr>
                    <td rowspan="2">
                      <input type="text" v-model="data.cname" />
                    </td>
                    <td v-for="item in data.gradeGrade">
                      <input type="text" v-model="item.name" />
                    </td>
                  </tr>
                  <tr>
                    <td v-for="item in data.gradeGrade">
                      <input type="text" v-model="item.score" />
                    </td>
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
        <el-col style="margin-bottom: 15px">
          <el-divider border-style="dashed" style="border-color: #ffc69f"><b>表格数据可任意编辑</b></el-divider>
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
table.baokao-table {
  border-collapse: collapse;

  td {
    border: 1px solid #aaa;
    text-align: center;
    font-weight: 400;
    width: 80px;
    height: 27px;
    white-space: nowrap;

    input {
      width: 100%;
      height: 100%;
      text-align: center;
      min-width: auto;
      max-width: unset;
    }

    input[type="text" i] {
      padding-block: 0;
      padding-inline: 0;
    }

    input,
    input:active,
    input:hover,
    input:focus,
    input:focus-visible,
    input:focus-visible{
      border: none;
      outline: none;
    }
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
