<script setup lang="ts">
import PageHeader from "@/components/layout/PageHeader.vue";
import PageMain from "@/views/PageMain.vue";
import PageFooter from "@/components/layout/PageFooter.vue";
import Icons from "@/components/Icons.vue";
import {ref, reactive} from "vue";
import {ElNotification} from "element-plus";
import axios from "@/utils/axios.ts";

const form = reactive({
  username: '',
  password: ''
})

const regedit = ref(true);
const drawer = ref(false);
const styleForm = ref({
  height: `${window.innerHeight}px`
});

const token = localStorage.getItem("token")
drawer.value = token != null && token.length > 0

async function onLogin() {
  if (form.username.trim().length == 0) {
    ElNotification({title: '提示信息', message: '用户名不能为空。', type: 'warning'})
    return
  }
  if (form.password.trim().length == 0) {
    ElNotification({title: '提示信息', message: '密码不能为空。', type: 'warning'})
    return
  }

  const response = await axios.post('/login', form)
  if (response.data.code === 200) {
    localStorage.setItem("token", response.data.data.token)
    localStorage.setItem("expires", response.data.data.expires_at)
    window.location.reload()
  }
}

function onReset() {
  form.username = ''
  form.password = ''
}
</script>

<template>
  <el-container v-if="drawer">
    <PageHeader/>
    <el-main class="resume-container">
      <PageMain/>
    </el-main>
    <PageFooter/>
  </el-container>
  <el-container v-else>
    <div class="resume-form" :style="styleForm">
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <h1 v-if="regedit">用户登录</h1>
        <h1 v-if="!regedit">用户注册</h1>
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" clearable/>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" clearable/>
        </el-form-item>
        <el-form-item label="确人密码" v-if="!regedit">
          <el-input v-model="form.password" type="password" placeholder="确人密码" clearable/>
        </el-form-item>
        <el-form-item label=" " class="el-form-submit">
          <div class="el-form-submit-buttons">
            <el-button type="primary" v-if="regedit" @click="onLogin">登录</el-button>
            <el-button type="primary" v-if="!regedit" @click="onLogin">注册</el-button>
            <el-button @click="onReset">重置</el-button>
          </div>
          <el-link @click="regedit = !regedit">注册</el-link>
        </el-form-item>
      </el-form>
    </div>
  </el-container>
  <Icons/>
</template>

<style scoped lang="scss">
.resume-container {
  padding: 0;
  display: flex;
  justify-content: center;
  overflow-y: auto;
}

.resume-form {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .el-form {
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    width: 450px !important;

    h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .el-form-submit {
      :deep(.el-form-item__content) {
        display: flex;
        justify-content: space-between;

        .el-link {
          height: 18px;
        }
      }
    }
  }
}
</style>
