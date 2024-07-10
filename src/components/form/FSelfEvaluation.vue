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
            <RichText placeholder="所修课程、成绩排名、在校的职务、参赛获奖情况等有利于突出个人优势的信息。尽量简洁，突出重点。" />
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
