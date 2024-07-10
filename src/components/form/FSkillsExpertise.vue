<script setup lang="ts">
import {getStore} from "@/utils";
import RichText from "@/components/utils/RichText.vue";
import CheckButton from "@/components/utils/CheckButton.vue";
import {SkillsExpertise} from "@/store/interface";
import plus from "@/components/icon/plus.vue";
import form from "@/utils/form.ts";
import {ref, watch} from "vue";
import {ElNotification} from "element-plus";

const customTag = ref('')
const data = getStore<SkillsExpertise>('getSkillsExpertise');

// 监听 tags 属性的变化
watch(data.value.tags, (newValue) => {
  for (const sTag of Object.keys(newValue)) {
    if (newValue[sTag]) {
      data.value.checkedTags[sTag] = { level: 50, isWord: true }
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
  data.value.checkedTags[customTag.value] = { level: 50, isWord: true }
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
          <RichText placeholder="技能特长文字描述" v-model="data.content"/>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="split-2">
          <CheckButton class="el-c-button" v-for="key in Object.keys(data.tags)" v-model="data.tags[key]" :title="key"/>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="split-2">
          <el-input v-model="customTag" @keyup.enter="addCustomTag" placeholder="请输入自定义特长" clearable/>
          <el-button class="el-c-button" :icon="plus" plain @click="addCustomTag">添加自定义特长</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="skills-expertise-row" v-if="Object.keys(data.checkedTags).length > 0">
      <el-col :span="4" v-for="key in Object.keys(data.checkedTags)">
        <b>{{key}}</b>
        <div class="skills-expertise-row-class">
          <el-select v-model="data.checkedTags[key].level">
            <el-option v-for="item in form.ProficiencyLevel" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
          <el-select v-model="data.checkedTags[key].isWord">
            <el-option v-for="item in form.isWord" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
          <i class="icon-circle-with-minus" @click="removeCustomTag(key)" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.skills-expertise-row {
  margin-top: 5px;
  margin-left: 5px !important;
  margin-right: 5px !important;
  gap: 15px !important;

  .el-col {
    gap: 0 !important;
    display: flex;
    flex-direction: column !important;
    align-items: flex-start !important;

    .skills-expertise-row-class {
      width: 100%;
      gap: 3px;
      display: flex;
      align-items: center;

      i {
        color: red;
        opacity: .6;
        font-size: 18px;
        transition: .3s;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>
