<script setup lang="ts">
import {ref, h, reactive} from "vue";
import ResumeList from "@/components/utils/ResumeList.vue";
import axios from "@/utils/axios.ts";
import {ElMessage, ElMessageBox} from "element-plus";
import {IResumes} from "@/store/interface/resume.ts";

const params = new URLSearchParams(window.location.search);
let rid = params.get("rid")

const name = ref('')
const drawer = ref(!rid)
const isResume = ref(false)
const newResume = ref(false)
const drawerData = ref([])

const resume = reactive({
  id: 0,
  name: ''
})

// 获取简历列表
function handleOk() {
  axios.get('/resumes').then(res => {
    drawerData.value = res.data.data
    drawer.value = true
  });
}

// 显示添加简历
function onShowNewResume() {
  newResume.value = true
  isResume.value = false
}

// 添加简历
function onNewResume() {
  if (name.value.trim().length <= 0) {
    return ElMessage.error("简历名称不能为空")
  }

  axios.get(`/resumes/check?name=${name.value}`).then(res => {
    if (res.data.code !== 200) {
      return ElMessage.error(res.data.message)
    }
    if (isResume.value) {
      resume.name = name.value
      axios.put('/resumes', resume).then(res => {
        if (res.data.code !== 200) {
          return ElMessage.error(res.data.message)
        }
        newResume.value = false
        drawerData.value = res.data.data
      })
      return
    }
    axios.post('/resumes', {name: name.value}).then(res => {
      if (res.data.code !== 200) {
        return ElMessage.error(res.data.message)
      }
      drawer.value = false
      newResume.value = false
      location.href = `${location.protocol}//${location.host}?rid=${res.data.data.id}`
    })
  });
}

// 删除简历
function onDeleteResume(data: IResumes) {
  ElMessageBox({
    title: '删除提示',
    message: h('div', {style: 'font-size: 14px'}, [
      h('span', null, '是否删除'),
      h('b', { style: 'color: teal' }, data.name),
      h('span', null, '简历？'),
    ]),
    showCancelButton: true,
    center: true,
    confirmButtonClass: 'el-button el-button--danger'
  }).then(() => {
    axios.delete(`/resumes?rid=${data.id}`).then(res => {
      if (res.data.code !== 200) {
        return ElMessage.error(res.data.message)
      }
      drawerData.value = res.data.data
      if (drawerData.value.length <= 0) {
        location.href = `${location.protocol}//${location.host}`
      }
    })
  })
}

// 编辑简历
function onEditResume(data: IResumes) {
  newResume.value = true
  isResume.value = true
  name.value = data.name
  resume.id = data.id
  resume.name = data.name
}

if (!rid) {
  handleOk()
}
</script>

<template>
  <el-header class="header-box">
    <div class="header-toolbar-box">
      <ul class="header-toolbar">
        <li><h1>编辑个人简历</h1></li>
        <li class="header-toolbar-item">
          <i class="icon-page"></i>
          <b>间距设置</b>
        </li>
        <li class="header-toolbar-item">
          <i class="icon-font"></i>
          <b>字体设置</b>
        </li>
        <li class="header-toolbar-item">
          <i class="icon-title"></i>
          <b>标题设置</b>
        </li>
        <li class="header-toolbar-item">
          <i class="icon-title"></i>
          <b>标题设置</b>
        </li>
        <li class="header-toolbar-item">
          <i class="icon-tupian"></i>
          <b>下载图片</b>
        </li>
        <li class="header-toolbar-item">
          <i class="icon-word"></i>
          <b>下载WORD</b>
        </li>
        <li class="header-toolbar-item">
          <i class="icon-pdf"></i>
          <b>下载PDF</b>
        </li>
      </ul>
      <ul class="header-toolbar">
        <li class="header-toolbar-item" @click="handleOk">
          <i class="icon-gerenjianli"/>
          <b>简历列表</b>
        </li>
      </ul>
    </div>
  </el-header>
  <el-drawer class="resume-list-box" v-model="drawer" direction="ttb" :lock-scroll="true" :show-close="false" size="100%">
    <template #header="{ close, titleId, titleClass }">
      <div class="resume-list-header">
        <h4 :id="titleId" :class="titleClass">简历列表</h4>
        <button class="el-drawer__close-btn" @click="close" v-if="!!rid">
          <i class="el-icon el-drawer__close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
              <path fill="currentColor" d="M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"></path>
            </svg>
          </i>
        </button>
      </div>
    </template>
    <ResumeList @edit="onEditResume" @remove="onDeleteResume" @new-resume="onShowNewResume" :data="drawerData"/>
  </el-drawer>
  <el-dialog v-model="newResume" title="请输入简历名称" width="400" @closed="name = ''" :lock-scroll="false">
    <el-form label-width="auto">
      <el-form-item>
        <el-input v-model="name" placeholder="请输入简历名称" clearable/>
      </el-form-item>
      <el-form-item style="margin-bottom: 0">
        <div style="display: flex;flex:1;justify-content: flex-end;">
          <div style="width: 200px; display: flex">
            <el-button style="flex: 1" :disabled="name.trim().length <= 0" type="primary" @click="onNewResume">确定</el-button>
            <el-button style="flex: 1" @click="newResume = false">取消</el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<style scoped lang="scss">
.resume-list-header {
  max-width: 820px;
  display: flex;
  margin: 0 auto;
}

.header-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 6;
  background-color: #fff !important;
  box-shadow: 0 0 12px rgba(57, 57, 77, .66);
  display: flex;
  justify-content: center;
  user-select: none;

  .header-toolbar-box {
    display: flex;
    min-width: 820px;
    justify-content: space-between;

    .header-toolbar {
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 10px;

      h1 {
        font-size: 30px;
        color: #136e58;
        cursor: pointer;
        margin-right: 20px;
      }

      .header-toolbar-item {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        cursor: pointer;

        i {
          cursor: pointer;
          font-size: 30px;
          color: #13a783;
        }

        b {
          font-size: 14px;
          color: #136e58;
        }

        &:hover {
          i, b {
            color: #13d8a7;
            transition: color 0.3s;
          }
        }
      }
    }
  }
}

</style>