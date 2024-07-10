<script setup lang="ts">
import {ref, watch} from "vue";
import {BtnType} from "@/components/utils/interface/type.ts";

const props = withDefaults(defineProps<{
  type?: BtnType,
  title?: string,
  class?: string,
  modelValue?: boolean
}>(), {
  type: 'success'
});

const checked = ref(props.modelValue);
const emit = defineEmits(['update:modelValue']);

watch(checked, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>

<template>
  <div class="check-button-box">
    <el-button :class="props.class" :type="checked ? props.type : ''" round @click="()=>{checked = !checked}">{{ props.title }}</el-button>
    <el-checkbox v-model="checked" />
  </div>
</template>


<style scoped lang="scss">
.check-button-box {
  position: relative;

  .el-checkbox {
    position: absolute;
    left: 0;
    opacity: 0;
  }
}
</style>