import {Ref} from "vue";

// 标签
export interface ICheckedTags {
    level: number;         // 精通级别
    isWord: boolean;       // 显示百分比或文字
}

// 菜单
export interface IMenusItem {
    id: number;             // 数据ID
    title: string;          // 菜单标题
    name: string;           // 菜单名称
    isActivate: boolean;    // 激活选项
    form: Ref<any>;         // 表单动态组件
    module: Ref<any>;       // 页面模块动态组件
    isOption: boolean;      // 是否可操作
    isChecked: boolean;     // 是否开启模块
    isPage: boolean;        // 模块是否在页面显示
    sort: number;        // 模块是否在页面显示
}

// 基础信息(BasicInfo)表单
export interface IBasicInfo {
    name: string,                       // 姓名
    isAge: boolean,                     // 年龄
    birthday: string,                   // 生日
    gender: string,                     // 性别
    maritalStatus: string,              // 婚姻状况
    height: string,                     // 身高
    weight: string,                     // 体重
    ethnicGroup: string,                // 民族
    nativePlace: string,                // 籍贯
    politicalStatus: string,            // 政治面貌
    workExperienceYears: string,        // 工作年限
    desiredPosition: string,            // 求职岗位
    desiredCity: string,                // 意向城市
    desiredSalary: string,              // 期望薪资
    startDate: string,                  // 入职时间
    phoneNumber: string,                // 电话
    emailAddress: string,               // 邮箱
    photo: string,                      // 照片设置
    iShowPhoto: boolean,                 // 展示照片
    customInfo: {[key: string]: string} // 自定义信息
}

// 技能特长(SkillsExpertise)表单
export interface ISkillsExpertise {
    content: string,                            // html内容
    tags: {[key: string]: boolean}              // 标签
    checkedTags: {[key: string]: ICheckedTags}   // 选中的标签
}

// 定义状态类型
export interface State {
    menus: IMenusItem[]; // 菜单
    basicInfo: IBasicInfo; // 基础信息
    skillsExpertise: ISkillsExpertise; // 技能特长
}