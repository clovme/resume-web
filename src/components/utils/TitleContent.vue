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

function isContent(content: string | undefined): boolean {
  if (content === undefined || content.trim().length <= 0) {
    return false
  }
  return content !== '<p><br></p>';
}
</script>

<template>
  <ul class="title-content-header" :style="headerStyle" v-if="name">
    <li v-if="startAt">{{startAt}}<span v-if="toNow || endAt">~{{toNow ? '至今' : endAt}}</span></li>
    <li v-if="name"><b v-text="name"></b></li>
    <li v-if="title"><b v-text="title"></b></li>
  </ul>
  <div class="ql-editor" v-html="content" :style="editorStyle" v-if="isContent(content)"></div>
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