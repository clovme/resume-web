
import { IBasicInfo } from './basicinfo.ts'
import { IMenus } from './menus.ts'
import { ISkills } from './skills.ts'
import { ITags } from './Tags.ts'
import { IWorksExperience } from './works.ts'
import { IProjectExperience } from './project.ts'
import { IEducation } from './education.ts'
import { IEvaluation } from './evaluation.ts'

// 定义状态类型
export interface State {
    menus: IMenus[];                    // 菜单
    basicInfo: IBasicInfo;              // 基础信息
    skills: ISkills;                    // 技能特长
    tags: ITags[];                      // 标签
    works: IWorksExperience[];          // 工作经历
    project: IProjectExperience[];      // 项目经验
    education: IEducation[];            // 教育经历
    evaluation: IEvaluation;            // 自我评价
}