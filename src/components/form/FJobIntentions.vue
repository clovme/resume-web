<script setup lang="ts">
// import {getStore} from "@/utils";
// import {BasicInfo} from "@/store/interface";
import RichText from "@/components/utils/RichText.vue";

// const data = getStore<BasicInfo>('getBasicInfo');
</script>

<template>
  <div>
    <div class="split-row-module">
      <el-row class="split-row-1">
        <el-col>
          <div class="split-1">
            <RichText placeholder="请输入您的自定义内容" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
