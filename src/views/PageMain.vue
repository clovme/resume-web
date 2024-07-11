<script setup lang="ts">
import {computed} from "vue";
import LineBox from "@/components/utils/LineBox.vue";
import {useStore} from "vuex";
import {State} from "@/store/interface";
import { IMenus } from '@/store/interface/menus.ts'

// 加载数据
const store = useStore<State>();
// 获取并过滤需要渲染的菜单项
const menus = computed<IMenus[]>(() => {
  return store.getters.getMenus.filter((menu: IMenus) => menu.isPage);
});
</script>

<template>
  <div class="resume-box">
    <div class="resume-head">
      <div class="resume-head-title">个人简历</div>
      <div class="personal-resume">
        <p>-----------------------求职意向：Python开发工程师---------------------</p>
        Personal resume
      </div>
      <div class="right-box">
        <i class="icon-xueshimao"></i>
        <i class="icon-shoutibao"></i>
      </div>
    </div>
    <LineBox size="0" color="#fff" style="display: flex;">
      <div class="line-left"></div>
      <div class="line-right"></div>
    </LineBox>
    <div class="resume-content-all">
      <component v-for="menu in menus" :is="menu.module" v-show="menu.isChecked" :id="menu.name" :title="menu.title"/>
    </div>
  </div>
</template>

<style scoped>
.resume-box {
  width: 820px;
  margin: 60px 0 100px 0;
  background-color: #fff;

  .resume-head {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 82px;
    gap: 10px;

    .resume-head-title {
      font-size: 38px;
      border-right: 2px solid #4e7282;
      height: 52px;
      padding-right: 10px;
      line-height: 52px;
      color: #4e7282;
    }

    .personal-resume {
      line-height: 26px;
      font-size: 24px;
      padding-left: 15px;
      max-width: 560px;
      color: #4e7282;
      width: 455px;

      p {
        font-size: 14px;
        text-shadow: none;
      }
    }

    .right-box {
      gap: 10px;
      display: flex;

      i {
        font-size: 22px;
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border-radius: 50%;
        color: #fff;
        background-color: #c19f67;
      }
    }
  }

  .line-left {
    width: 496px;
    background-color: #4e7282;
    height: 18px;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      overflow: hidden;
      border-style: solid;
      border-width: 18px 0 0 18px;
      border-color: transparent transparent transparent #4e7282;
      position: absolute;
      right: -18px;
      top: 0;
    }
  }

  .line-right {
    width: 300px;
    height: 12px;
    margin: 6px 0 0 23px;
    background-color: #c19f67;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      overflow: hidden;
      border-style: solid;
      border-width: 12px 0 0 12px;
      border-color: #c19f67 transparent transparent;
      position: absolute;
      left: -12px;
      top: 0;
    }
  }

  .resume-content-all {
    border-left: 1px solid rgb(78, 114, 130);
    margin: 0 30px 0 40px;
    padding-top: 8px;
  }
}
</style>