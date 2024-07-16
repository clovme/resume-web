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
  <div class="resume-box" style="margin: 60px 0 100px 0;background-color: #fff;">
    <div class="resume-box-content" style="width: 820px;margin: 0 auto;background-color: #fff;">
      <div style="display: flex;justify-content: center;align-items: center;height: 82px;gap: 10px;">
        <div style="font-size: 38px;border-right: 2px solid #4e7282;height: 52px;padding-right: 10px;line-height: 52px;color: #4e7282;" v-text="slogan.title"></div>
        <div style="line-height: 26px;font-size: 24px;padding-left: 15px;max-width: 560px;color: #4e7282;width: 455px;">
          <p style="font-size: 14px;text-shadow: none;" v-text="slogan.slogan"></p>
          Personal resume
        </div>
        <div style="gap: 10px;display: flex;">
          <i style="font-size: 22px;display: flex;width: 40px;height: 40px;text-align: center;border-radius: 50%;color: #fff;align-items: center;justify-content: center;background-color: #c19f67;fill: currentColor;line-height: 1em;position: relative;"><svg style="height: 1em;width: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path d="M513.001 661.882c-19.688 0-38.822-4.632-53.88-13.034l-410.512-229.879c-22.074-12.284-34.746-32.027-34.746-54.074 0-22.102 12.672-41.845 34.773-54.184l410.484-229.796c30.031-16.831 77.644-16.859 107.785 0l410.512 229.796c22.074 12.367 34.718 32.11 34.718 54.212 0 22.074-12.672 41.789-34.746 54.129l-410.512 229.796c-15.030 8.429-34.162 13.061-53.88 13.061zM116.326 364.84l382.172 213.964c2.495 1.386 7.931 2.774 14.502 2.774 7.514 0 12.672-1.748 14.502-2.774l382.2-213.964-382.172-213.936c-2.495-1.386-7.959-2.774-14.53-2.774-7.486 0-12.644 1.72-14.475 2.774l-382.2 213.936zM513.14 955.597c-169.623 0-341.854-54.074-349.562-157.506-0.352-1.984-0.556-4.268-0.556-6.599 0-0.019 0-0.039 0-0.058v0.003-305.25c0-22.185 18.025-40.152 40.235-40.152 0.008 0 0.018 0 0.028 0 22.188 0 40.176 17.971 40.208 40.149v300.483c0.166 1.413 0.277 2.884 0.277 4.353 0.332 29.726 102.849 84.298 269.34 84.298 166.517 0 269.007-54.572 269.312-84.298l0.055-1.637v-303.226c0-22.185 18.025-40.152 40.235-40.152 22.24 0 40.235 17.998 40.235 40.152v305.305c0 1.054-0.028 2.080-0.111 3.133-4.049 105.706-178.22 160.999-349.729 160.999zM966.107 851.194c0 0 0 0 0 0-22.188 0-40.176-17.971-40.208-40.149v-318.702c0-22.185 17.998-40.152 40.208-40.152 22.24 0 40.235 17.97 40.235 40.152v318.699c0 22.185-18.025 40.152-40.208 40.152z"></path></svg></i>
          <i style="font-size: 22px;display: flex;width: 40px;height: 40px;text-align: center;border-radius: 50%;color: #fff;align-items: center;justify-content: center;background-color: #c19f67;fill: currentColor;line-height: 1em;position: relative;"><svg style="height: 1em;width: 1em;" version="1.1" xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024"><path d="M393.985 160.445c0-19.494 15.904-35.398 35.398-35.398h163.648c19.494 0 35.398 15.904 35.398 35.398v97.47h62.074v-97.47c0-53.866-43.606-97.47-97.47-97.47h-163.648c-53.866 0-97.47 43.606-97.47 97.47v97.47h62.074v-97.47zM853.121 263.045h-683.318c-63.1 0-113.886 50.788-113.886 113.886v137.484h354.484c15.904-38.988 55.404-66.69 101.062-66.69 46.17 0 85.672 27.702 101.062 66.69h354.484v-137.484c0-63.1-50.788-113.886-113.886-113.886zM511.462 637.536c44.118 0 80.542-33.858 80.542-75.924s-35.91-75.924-80.542-75.924-80.542 33.858-80.542 75.924c0 42.066 35.91 75.924 80.542 75.924zM620.219 563.663c0 57.456-48.736 104.652-108.756 104.652s-108.756-46.684-108.756-104.652c0-3.592 0-7.182 0.514-11.286h-347.302v303.697c0 63.1 50.788 113.886 113.886 113.886h683.318c63.1 0 113.886-50.788 113.886-113.886v-303.697h-347.815c0.514 3.592 1.026 7.182 1.026 11.286z"></path></svg></i>
        </div>
      </div>
      <LineBox size="0" color="#fff" style="display: flex;">
        <div class="line-left" style="width: 496px;background-color: #4e7282;height: 18px;position: relative;">
          <i style="display: block;width: 0;height: 0;overflow: hidden;border-style: solid;border-width: 18px 0 0 18px;border-color: transparent transparent transparent #4e7282;position: absolute;right: -18px;top: 0;"></i>
        </div>
        <div class="line-right" style="width: 300px;height: 12px;margin: 6px 0 0 23px;background-color: #c19f67;position: relative;">
          <i style="display: block;width: 0;height: 0;overflow: hidden;border-style: solid;border-width: 12px 0 0 12px;border-color: #c19f67 transparent transparent;position: absolute;left: -12px;top: 0;"></i>
        </div>
      </LineBox>
      <div class="resume-content-all" :style="`color: #555;border-left: 1px solid rgb(78, 114, 130);padding-top: 8px;margin: 0 ${setting.page}px 0 ${setting.page+15}px`">
        <component v-for="menu in menus" :is="menu.module" v-show="menu.isChecked" :id="menu.name" :title="menu.title"/>
      </div>
    </div>
    <div :style="style"></div>
  </div>
</template>

<style scoped lang="scss">
:deep(.resume-box-content) {

  .ql-editor ol, .ql-editor ul {
    padding-left: 0 !important;
  }

  .ql-editor li[data-list="ordered"] {
    padding-left: 1.3em;
  }

  .ql-editor li[data-list="bullet"] {
    padding-left: 1em;
  }

  @for $i from 1 through 8 {
    .ql-editor li.ql-indent-#{$i}:not(.ql-direction-rtl) {
      padding-left: calc(1.5em + #{$i}em);
    }
  }

  .resume-content-all {
    .resume-content-main {
      ul.title-content-header:first-child {
        margin-top: 0 !important;
      }
    }

    .resume-content:last-child {
      .resume-content-main {
        padding-bottom: 5px !important;
      }
    }
  }
}
</style>