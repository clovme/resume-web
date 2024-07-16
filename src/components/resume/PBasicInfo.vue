<script setup lang="ts">
import { getStore } from '@/utils'
import ModuleTitle from "@/components/utils/ModuleTitle.vue";
import { IBasicInfo } from '@/store/interface/basicinfo.ts'
import form from '@/utils/form.ts'

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
    <div class="basic-info-box" style="display: flex;align-items: flex-start;">
      <ul class="basic-info-list" style="flex: 1;list-style: none;display: grid;font-size: 13px;gap: 6px 0;grid-template-columns: repeat(2, 1fr);">
        <li v-if="basicInfo.name"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">姓名</span>:&nbsp;{{ basicInfo.name }}</li>

        <li v-if="basicInfo.birthday && basicInfo.isAge"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">年龄</span>:&nbsp;{{ birthday2Age(basicInfo.birthday) }}岁</li>
        <li v-else-if="basicInfo.birthday"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">生日</span>:&nbsp;{{ basicInfo.birthday }}</li>

        <li v-if="basicInfo.gender && basicInfo.gender !== '不填'"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">性别</span>:&nbsp;{{ basicInfo.gender }}</li>
        <li v-if="basicInfo.maritalStatus && basicInfo.maritalStatus !== '不填'"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">婚姻状况</span>:&nbsp;{{ basicInfo.maritalStatus }}</li>

        <li v-if="basicInfo.height && basicInfo.weight"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">身高体重</span>:&nbsp;{{ basicInfo.height }}cm/{{ basicInfo.weight }}kg</li>
        <li v-else-if="basicInfo.height"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">身高</span>:&nbsp;{{ basicInfo.height }}cm</li>
        <li v-else-if="basicInfo.weight"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">体重</span>:&nbsp;{{ basicInfo.weight }}kg</li>

        <li v-if="basicInfo.ethnicGroup"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">民族</span>:&nbsp;{{ basicInfo.ethnicGroup }}</li>
        <li v-if="basicInfo.nativePlace"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">籍贯</span>:&nbsp;{{ basicInfo.nativePlace }}</li>
        <li v-if="basicInfo.politicalStatus && basicInfo.politicalStatus !== '不填'"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">政治面貌</span>:&nbsp;{{ basicInfo.politicalStatus }}</li>
        <li v-if="basicInfo.workExperienceYears && basicInfo.workExperienceYears !== '不填'"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">工作年限</span>:&nbsp;{{ basicInfo.workExperienceYears }}</li>
        <li v-if="basicInfo.desiredPosition"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">求职岗位</span>:&nbsp;{{ basicInfo.desiredPosition }}</li>
        <li v-if="basicInfo.desiredCity"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">意向城市</span>:&nbsp;{{ basicInfo.desiredCity }}</li>
        <li v-if="basicInfo.desiredSalary"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">期望薪资</span>:&nbsp;{{ basicInfo.desiredSalary }}</li>
        <li v-if="basicInfo.startDate && basicInfo.startDate !== '不填'"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">入职时间</span>:&nbsp;{{ basicInfo.startDate }}</li>
        <li v-if="basicInfo.phoneNumber"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">电话</span>:&nbsp;{{ basicInfo.phoneNumber }}</li>
        <li v-if="basicInfo.emailAddress"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">邮箱</span>:&nbsp;{{ basicInfo.emailAddress }}</li>
        <li v-for="(value, key) in basicInfo.customInfo"><span style="display: inline-block;vertical-align: top;min-width: 60px;text-align-last: justify;position: relative;margin-right: 2px;">{{ key }}</span>:&nbsp;{{ value }}</li>
      </ul>
      <div style="width: 91px;">
        <img style="height: 98px;" v-if="basicInfo.iShowPhoto" :src="basicInfo.photo && basicInfo.photo.length > 0 ? basicInfo.photo : form.photo(basicInfo.gender)" :alt="basicInfo.gender">
      </div>
    </div>
  </ModuleTitle>
</template>

<style scoped lang="scss">

</style>