<script setup lang="ts">
import { ref, watch } from 'vue';
import 'vue-cropper/dist/index.css';
import { VueCropper } from "vue-cropper";

// 定义 Cropper 的接口
interface CropperInstance {
  getCropData(callback: (data: string) => void): void; // 假设 getCropData 接受一个回调函数
}

const props = defineProps<{
  imgUrl?: string;
  modelValue?: boolean;
}>();

// 指定 cropperRef 的类型
const cropperRef = ref<CropperInstance | null>(null); // 初始为 null
const option = ref({
  img: props.imgUrl,
  modelValue: props.modelValue,
});

watch(props, (newValue) => {
  option.value.img = newValue.imgUrl;
  option.value.modelValue = newValue.modelValue;
});

const emit = defineEmits(['closed', 'save']);

function onGetCropData() {
  if (cropperRef.value) { // 确保 cropperRef.value 不为 null
    cropperRef.value.getCropData((data: string) => {
      emit("save", data);
    });
  }
}

function onDefaultPhoto() {
  emit("save", null);
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
        <div>
          <el-button @click="onDefaultPhoto" type="primary">默认头像</el-button>
        </div>
        <div>
          <el-button @click="option.modelValue = false">&nbsp;&nbsp;&nbsp;&nbsp;取消&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
          <el-button type="success" @click="onGetCropData">&nbsp;&nbsp;&nbsp;&nbsp;保存&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
        </div>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.vue-cropper {
  height: 300px;
}
.dialog-footer {
  display: flex;
  justify-content: space-between;
}
</style>
