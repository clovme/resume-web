
import { IBasicInfo } from './basicinfo.ts'
import { IMenus } from './menus.ts'
import { ISkillsExpertise } from './skillsexpertise.ts'

// 定义状态类型
export interface State {
    menus: IMenus[]; // 菜单
    basicInfo: IBasicInfo; // 基础信息
    skillsExpertise: ISkillsExpertise; // 技能特长
}