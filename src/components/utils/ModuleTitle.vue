<script setup lang="ts">

import LineBox from "@/components/utils/LineBox.vue";
import { getStore } from '@/utils'
import { ISetting } from '@/store/interface/setting.ts'

defineProps<{
  title: string
}>()

const setting = getStore<ISetting>("getSetting")
</script>

<template>
  <div class="resume-content" style="position: relative;font-size: 14px;">
    <div style="position: relative;margin-left: -16px;display: inline-block;vertical-align: top;min-width: 140px;height: 24px;line-height: 24px;font-size: 16px;font-weight: 400;background-color: #4e7282;color: #fff;">
      <span style="display: block;width: calc(100% - 25px);height: 100%;padding-left: 25px;background-color: #4e7282;color: #fff;white-space: nowrap;position: relative;">{{ title }}</span>
      <div class="title-icon" style="height: 100%;width: 50px;position: absolute;right: -1px;top: 0;overflow: hidden;">
        <i style="border: 2px solid #fff;display: block;width: 3px;height: 50px;position: absolute;right: 25px;top: -12px;transform: rotate(-45deg);"></i>
        <i style="display: block;width: 27px;height: 50px;overflow: hidden;border-style: solid;border-width: 26px 0 0 26px;background-color: #4e7282;position: absolute;right: -22px;top: -50px;transform: rotate(-45deg);"></i>
      </div>
      <i style="display: block;width: 0;height: 0;overflow: hidden;border-style: solid;border-width: 9px 0 0 16px;border-color: #4e7282 transparent transparent;position: absolute;left: 0;top: 100%;border-top-color: rgb(38, 74, 90);"></i>
    </div>
    <LineBox color="#4e7282" margin="0" />
    <div class="resume-content-main" :style="`padding: ${setting.module}px 15px;`">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>