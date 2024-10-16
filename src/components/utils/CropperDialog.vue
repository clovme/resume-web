<script setup lang="ts">
import { ref, watch } from 'vue'
import 'vue-cropper/dist/index.css'
import { VueCropper }  from "vue-cropper";

const props = defineProps<{
  imgUrl?: string
  modelValue?: boolean
}>()

const cropperRef = ref({
  getCropData: (data)=>{}
});
const option = ref({
  img: props.imgUrl,
  modelValue: props.modelValue
})

watch(props, (newValue) => {
  option.value.img = newValue.imgUrl
  option.value.modelValue = newValue.modelValue
})

const emit = defineEmits(['closed', "save"]);

function getCropData() {
  cropperRef.value.getCropData(data => {
    emit("save", data)
  });
}

function closed() {
  emit('closed');
}
</script>

<template>
  <el-dialog v-model="option.modelValue" @closed="closed" :close-on-click-modal="false" :destroy-on-close="true" title="照片裁剪" width="400" align-center>
    <vueCropper
      ref="cropperRef"
      :img="option.img"
      :fixed="true"
      :fixedBox="true"
      :autoCrop="true"
      :centerBox="true"
      :canMoveBox="false"
      :autoCropWidth="100"
      :autoCropHeight="142"
      :fixedNumber="[7, 10]"
      outputType="webp"
    ></vueCropper>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="option.modelValue = false">取消</el-button>
        <el-button type="primary" @click="getCropData">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.vue-cropper {
  height: 300px;
}
</style>