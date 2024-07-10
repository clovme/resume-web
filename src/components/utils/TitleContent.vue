<script setup lang="ts">
import {ref} from "vue";
import {ITitleContent} from "@/components/utils/interface/interface.ts";

const props = withDefaults(defineProps<ITitleContent>(), {
  margin: 10
})

const headerStyle = ref({
  marginTop: `${props.margin * 2}px`
})

const editorStyle = ref({
  fontSize: '13px',
  marginTop: `${props.margin}px`,
  lineHeight: '22px'
})

</script>

<template>
  <ul class="title-content-header" :style="headerStyle" v-if="title">
    <li v-text="time"></li>
    <li><b v-text="title"></b></li>
    <li><b v-text="name"></b></li>
  </ul>
  <div class="ql-editor" v-html="content" :style="editorStyle" v-if="content"></div>
</template>

<style scoped lang="scss">
ul.title-content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  &:first-child {
    margin-top: 0 !important;
  }

  li {
    flex: 1;
  }

  li:first-child {
    text-align: left;
    font-weight: 400;
  }
  li:nth-child(2) {
    text-align: center;
    font-weight: 700;
    white-space: nowrap;
  }
  li:last-child {
    text-align: right;
    white-space: nowrap;
    font-weight: 700;
  }
}
.ql-editor {
  padding: 0;
}
</style>