<script setup lang="ts">
import RichText from "@/components/utils/RichText.vue";
import { getStore } from '@/utils'
import { IIntentions } from '@/store/interface/intentions.ts'

const data = getStore<IIntentions>("getIntentions")
</script>

<template>
  <div>
    <div class="split-row-module">
      <el-row class="split-row-1">
        <el-col>
          <div class="split-1">
            <RichText v-model="data.content" placeholder="请输入您的自定义内容" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
