<script setup lang="ts">
import {ref, watch} from "vue";

const props = defineProps<{
  modelValue?: string,
  placeholder?: string
}>()

const value = ref(props.modelValue)
const emit = defineEmits(['update:modelValue']);

watch(value, (newVal) => {
  emit('update:modelValue', newVal);
});
</script>

<template>
  <el-date-picker v-model="value" value-format="YYYY-MM" :clearable="false" :editable="false" type="month" :placeholder="props.placeholder" />
</template>

<style scoped lang="scss">

</style>