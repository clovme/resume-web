<script setup lang="ts">
import { getStore } from '@/utils'
import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import { IBasicInfo } from '@/store/interface/basicinfo.ts'

defineProps<{
  title: string
}>()

const basicInfo = getStore<IBasicInfo>('getBasicInfo');

function birthday2Age(date: string) {
  const today = new Date();
  const birthday = new Date(date)

  // 获取时间差（以毫秒为单位）
  const diffInMs = today.getTime() - birthday.getTime();

  // 将时间差转换为年（365.25天用于考虑闰年）
  const ageInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

  // 向下取整得到实际年龄
  return Math.floor(ageInYears);
}
</script>

<template>
  <ModuleTitle :title="title">
    <div class="basic-info-box">
      <ul class="basic-info-list">
        <li><span>姓名</span>{{ basicInfo.name }}</li>

        <li v-if="basicInfo.isAge"><span>年龄</span>{{ birthday2Age(basicInfo.birthday) }}</li>
        <li v-else><span>生日</span>{{ basicInfo.birthday }}</li>

        <li><span>性别</span>{{ basicInfo.gender }}</li>
        <li><span>婚姻状况</span>{{ basicInfo.maritalStatus || '-' }}</li>

        <li v-if="basicInfo.height && basicInfo.weight"><span>身高体重</span>{{ basicInfo.height }}cm/{{ basicInfo.weight }}kg</li>
        <li v-else-if="basicInfo.height"><span>身高</span>{{ basicInfo.height }}cm</li>
        <li v-else-if="basicInfo.weight"><span>体重</span>{{ basicInfo.weight }}kg</li>

        <li v-if="basicInfo.ethnicGroup"><span>民族</span>{{ basicInfo.ethnicGroup }}</li>
        <li v-if="basicInfo.nativePlace"><span>籍贯</span>{{ basicInfo.nativePlace }}</li>
        <li v-if="basicInfo.politicalStatus"><span>政治面貌</span>{{ basicInfo.politicalStatus }}</li>
        <li><span>工作年限</span>{{ basicInfo.workExperienceYears || '-' }}</li>
        <li><span>求职岗位</span>{{ basicInfo.desiredPosition || '-' }}</li>
        <li v-if="basicInfo.desiredCity"><span>意向城市</span>{{ basicInfo.desiredCity }}</li>
        <li v-if="basicInfo.desiredSalary"><span>期望薪资</span>{{ basicInfo.desiredSalary }}</li>
        <li v-if="basicInfo.startDate"><span>入职时间</span>{{ basicInfo.startDate }}</li>
        <li><span>电话</span>{{ basicInfo.phoneNumber || '-' }}</li>
        <li v-if="basicInfo.emailAddress"><span>邮箱</span>{{ basicInfo.emailAddress }}</li>
        <li v-for="(value, key) in basicInfo.customInfo"><span>{{ key }}</span>{{ value }}</li>
      </ul>
      <div class="photo-box">
        <img v-if="basicInfo.iShowPhoto" :src="basicInfo.photo && basicInfo.photo.length > 0 ? basicInfo.photo : `/assets/${basicInfo.gender === '女' ? 'woman' : 'man'}.png`" :alt="basicInfo.gender">
      </div>
    </div>
  </ModuleTitle>
</template>

<style scoped lang="scss">
.basic-info-box {
  min-height: 100px;
  display: flex;
  align-items: flex-start;

  .basic-info-list {
    flex: 1;
    list-style: none;
    display: grid;
    font-size: 13px;
    grid-template-columns: repeat(2, 1fr);

    li {
      padding: 3px 5px 3px 0;

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
    width: 120px;
    height: 130px;
    overflow: hidden;
  }
}
</style>