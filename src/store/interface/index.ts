
import { IBasicInfo } from './basicinfo.ts'
import { IMenus } from './menus.ts'
import { ISkills } from './skills.ts'
import { ITags } from './Tags.ts'

// 定义状态类型
export interface State {
    menus: IMenus[]; // 菜单
    basicInfo: IBasicInfo; // 基础信息
    skills: ISkills; // 技能特长
    tags: ITags[]; // 标签
}