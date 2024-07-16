<script setup lang="ts">
import { computed, ref } from 'vue'
import LineBox from "@/components/utils/LineBox.vue";
import {useStore} from "vuex";
import {State} from "@/store/interface";
import { IMenus } from '@/store/interface/menus.ts'
import { getStore } from '@/utils'
import { ISlogan } from '@/store/interface/slogan.ts'
import { ISetting } from '@/store/interface/setting.ts'

const style = ref({
  height: `${window.innerHeight - 200}px`,
})

const setting = getStore<ISetting>("getSetting")
const slogan = getStore<ISlogan>("getSlogan")
// 加载数据
const store = useStore<State>();
// 获取并过滤需要渲染的菜单项
const menus = computed<IMenus[]>(() => {
  return store.getters.getMenus.filter((menu: IMenus) => menu.isPage);
});

window.onresize = () => {
  style.value.height = `${window.innerHeight - 200}px`
}
</script>

<template>
  <div class="resume-box">
    <div class="resume-box-content">
      <div class="resume-head">
        <div class="resume-head-title" v-text="slogan.title"></div>
        <div class="personal-resume">
          <p v-text="slogan.slogan"></p>
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
      <div class="resume-content-all" :style="`margin: 0 ${setting.page}px 0 ${setting.page+15}px`">
        <component v-for="menu in menus" :is="menu.module" v-show="menu.isChecked" :id="menu.name" :title="menu.title"/>
      </div>
    </div>
    <div :style="style"></div>
  </div>
</template>

<style lang="scss">
.resume-box {
  margin: 60px 0 100px 0;
  background-color: #fff;
}

.resume-box-content {
  width: 820px;
  margin: 0 auto;
  background-color: #fff;


  .ql-editor ol, .ql-editor ul {
    padding-left: 0 !important;
  }

  .ql-editor li[data-list="bullet"] {
    padding-left: 1em;
  }

  .ql-editor li[data-list="ordered"] {
    padding-left: 1.3em;
  }


  @for $i from 1 through 8 {
    .ql-editor li.ql-indent-#{$i}:not(.ql-direction-rtl) {
      padding-left: calc(1.5em + #{$i}em);
    }
  }

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
    color: #555;
    border-left: 1px solid rgb(78, 114, 130);
    padding-top: 8px;

    .resume-content:last-child {
      .resume-content-main {
        padding-bottom: 5px !important;
      }
    }

    .resume-content {
      position: relative;
      font-size: 14px;

      .module-title {
        position: relative;
        margin-left: -16px;
        display: inline-block;
        vertical-align: top;
        min-width: 140px;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        font-weight: 400;
        background-color: #4e7282;
        color: #fff;

        span {
          display: block;
          width: calc(100% - 25px);
          height: 100%;
          padding-left: 25px;
          background-color: #4e7282;
          color: #fff;
          white-space: nowrap;
          position: relative;
        }

        .title-icon {
          height: 100%;
          width: 50px;
          position: absolute;
          right: -1px;
          top: 0;
          overflow: hidden;

          &:after {
            border: 2px solid #fff;
            display: block;
            content: "";
            width: 3px;
            height: 50px;
            position: absolute;
            right: 25px;
            top: -12px;
            transform: rotate(-45deg);
          }

          &:before {
            content: "";
            display: block;
            width: 27px;
            height: 50px;
            overflow: hidden;
            border-style: solid;
            border-width: 26px 0 0 26px;
            background-color: #4e7282;
            position: absolute;
            right: -22px;
            top: -50px;
            transform: rotate(-45deg);
          }
        }

        &:after {
          content: "";
          display: block;
          width: 0;
          height: 0;
          overflow: hidden;
          border-style: solid;
          border-width: 9px 0 0 16px;
          border-color: #4e7282 transparent transparent;
          position: absolute;
          left: 0;
          top: 100%;
          border-top-color: rgb(38, 74, 90);
        }
      }
    }

    .tags-item {
      display: inline-block;
      margin: 3px 15px 5px 0;
      padding: 5px 15px;
      border-radius: 18px;
      color: #555;
      position: relative;
      border: 1px solid rgba(78, 114, 130, 0.3);
      background-color: rgba(78, 114, 130, 0.04);
    }

    .basic-info-box {
      display: flex;
      align-items: flex-start;

      .basic-info-list {
        flex: 1;
        list-style: none;
        display: grid;
        font-size: 13px;
        gap: 6px 0;
        grid-template-columns: repeat(2, 1fr);

        li {
          span {
            display: inline-block;
            vertical-align: top;
            min-width: 60px;
            text-align-last: justify;
            position: relative;
            margin-right: 8px;

            &:after {
              content: ":";
              right: -4px;
              position: absolute;
            }
          }
        }
      }

      .photo-box {
        width: 91px;

        img {
          height: 98px;
        }
      }
    }

    ul.baokao-list {
      list-style: none;
      display: flex;
      padding: 0 0 10px 0;

      li {
        flex: 1;
      }
    }

    table.baokao-table {
      border-collapse: collapse;

      td {
        border: 1px solid #aaa;
        padding: 5px;
        text-align: center;
        font-weight: 400;
        min-width: 70px;
        white-space: nowrap;
      }
    }
  }
}
</style>