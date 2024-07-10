<script setup lang="ts">
import {getStore} from "@/utils";
import {IBasicInfo} from "@/store/interface";
import plus from "@/components/icon/plus.vue";
import form from "@/utils/form.js";
import { ref } from 'vue';
import {ElNotification} from "element-plus";
import DatePicker from "@/components/utils/DatePicker.vue";

const customInfo = ref({key: '', value: ''})
const data = getStore<IBasicInfo>('getBasicInfo');

function addCustomInfo() {
  if (!customInfo.value.key || customInfo.value.key.trim() === '') {
    ElNotification({title: '提示信息', message: '自定义Label不能为空。', type: 'warning'})
    return
  }
  if (!customInfo.value.value || customInfo.value.value.trim() === '') {
    ElNotification({title: '提示信息', message: '自定义Value不能为空。', type: 'warning'})
    return
  }
  data.value.customInfo[customInfo.value.key] = customInfo.value.value;
  customInfo.value = {key: '', value: ''}
}
</script>

<template>
  <div>
    <el-row class="split-row-2">
      <el-col :span="6">
        <div class="split-2">
          <label>您的姓名</label><el-input v-model="data.name" placeholder="请输入您的姓名" clearable />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>性别</label>
          <el-select v-model="data.gender" placeholder="请选择性别">
            <el-option v-for="item in form.Gender" :key="item" :label="item" :value="item"/>
          </el-select>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>出生年月</label>
          <div style="width: 100%;display: flex;align-items: center;gap: 5px;">
            <DatePicker v-model="data.birthday" placeholder="请选择出生年月" />
            <el-checkbox v-model="data.isAge" label="转年龄" />
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>照片设置</label>
          <div style="width: calc(100% - 10px);display: flex;align-items: center;gap: 5px;">
            <el-upload v-model="data.photo" accept="image/png,image/jpeg"><el-button class="el-c-button" type="success" round>上传照片</el-button></el-upload>
            <el-checkbox v-model="data.iShowPhoto" label="展示照片" />
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>工作年限</label>
          <el-select v-model="data.workExperienceYears" placeholder="请选择工作年限">
            <el-option v-for="item in form.WorkExperienceYears()" :key="item" :label="item" :value="item"/>
          </el-select>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>联系电话</label>
          <el-input v-model="data.phoneNumber" placeholder="请输入电话" clearable />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>联系邮箱</label>
          <el-input v-model="data.emailAddress" placeholder="请输入邮箱" clearable />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>婚姻状况</label>
          <el-select v-model="data.maritalStatus" placeholder="请选择婚姻状况">
            <el-option v-for="item in form.MaritalStatus" :key="item" :label="item" :value="item"/>
          </el-select>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>身高体重</label>
          <div style="width: 100%;display: flex;align-items: center;gap: 5px;">
            <el-input v-model="data.height" placeholder="身高" /><span>CM</span>&nbsp;&nbsp;
            <el-input v-model="data.weight" placeholder="体重" /><span>KG</span>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>民族</label>
          <el-input v-model="data.ethnicGroup" placeholder="请输入民族" clearable />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>籍贯</label>
          <el-input v-model="data.nativePlace" placeholder="请输入籍贯" clearable />
        </div>
      </el-col>
      <el-col :span="6">
        <div class="split-2">
          <label>政治面貌</label>
          <el-select v-model="data.politicalStatus" placeholder="请选择政治面貌">
            <el-option v-for="item in form.Politics" :key="item" :label="item" :value="item"/>
          </el-select>
        </div>
      </el-col>
    </el-row>
    <el-divider v-if="Object.keys(data.customInfo).length > 0"><i class="icon-shoutibao" /></el-divider>
    <el-row class="split-row-2" v-if="Object.keys(data.customInfo).length > 0">
      <el-col v-for="key in Object.keys(data.customInfo)" :span="6">
        <div class="split-2">
          <label v-text="key"></label>
          <el-input style="width: calc(100% - 15px)" v-model="data.customInfo[key]" clearable />
          <i class="icon-circle-with-minus" @click="()=>{delete data.customInfo[key]}" />
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row class="split-row-2">
      <el-col :span="12" style="gap: 5px">
        <div class="split-2">
          <el-input v-model="customInfo.key" placeholder="自定义" clearable />
          <el-input v-model="customInfo.value" placeholder="自定义" clearable />
          <el-button class="el-c-button" @click="addCustomInfo" :icon="plus" plain>添加自定义信息</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">

</style>
