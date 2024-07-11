<script setup lang="ts">
import {getStore} from "@/utils";
import RichText from "@/components/utils/RichText.vue";
import CheckButton from "@/components/utils/CheckButton.vue";
import plus from "@/components/icon/plus.vue";
import {ref, watch} from "vue";
import {ElNotification} from "element-plus";
import { ISkillsExpertise } from '@/store/interface/skillsexpertise.ts'

const customTag = ref('')
const data = getStore<ISkillsExpertise>('getSkillsExpertise');

// 监听 tags 属性的变化
watch(data.value.tags, (newValue) => {
  for (const sTag of Object.keys(newValue)) {
    if (newValue[sTag]) {
      data.value.checkedTags[sTag] = {level: 50, isWord: true}
    }
    for (const tag of Object.keys(data.value.checkedTags)) {
      if (tag === sTag && !newValue[sTag]) {
        delete data.value.checkedTags[tag]
      }
    }
  }
})

function addCustomTag() {
  if (!customTag.value || customTag.value.trim() === '') {
    ElNotification({title: '提示信息', message: '自定义特长不能为空。', type: 'warning'})
    return
  }
  data.value.checkedTags[customTag.value] = {level: 50, isWord: true}
  customTag.value = ''
}

function removeCustomTag(tag: string) {
  delete data.value.checkedTags[tag]
  data.value.tags[tag] = false
}
</script>

<template>
  <div>
    <el-row class="split-row-2">
      <el-col :span="24">
        <div class="split-2">
          <RichText placeholder="荣誉证书内容描述，非必填。" v-model="data.content"/>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="split-2">
          <CheckButton class="el-c-button" v-for="key in Object.keys(data.tags)" v-model="data.tags[key]" :title="key"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="split-2">
          <el-input v-model="customTag" @keyup.enter="addCustomTag" placeholder="请输入荣誉证书名称" clearable/>
          <el-button class="el-c-button" :icon="plus" plain @click="addCustomTag">添加自定义荣誉证书</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="Object.keys(data.checkedTags).length > 0">
      <el-col :span="24">
        <ul class="f-honorsc-ertificates-box split-2">
          <li v-for="key in Object.keys(data.checkedTags)">
            {{key}}
            <i class="icon-circle-with-minus" @click="removeCustomTag(key)"/>
          </li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.f-honorsc-ertificates-box {
  list-style: none;

  li {
    float: left;
    padding: 0 10px;
    height: 28px;
    line-height: 27px;
    margin-right: 30px;
    border-radius: 16px;
    color: #222;
    border: 1px solid #13d8a7;
    position: relative;
    margin-top: 10px;

    i {
      position: absolute;
      right: -20px;
      top: -2px;
      font-size: 18px;
      line-height: 32px;
      vertical-align: top;
      margin-left: 6px;
      color: red;
      opacity: .6;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
