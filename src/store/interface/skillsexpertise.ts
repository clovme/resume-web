// 标签
export interface ICheckedTags {
  level: number;         // 精通级别
  isWord: boolean;       // 显示百分比或文字
}

// 技能特长(SkillsExpertise)表单
export interface ISkillsExpertise {
  content: string,                            // html内容
  tags: {[key: string]: boolean}              // 标签
  checkedTags: {[key: string]: ICheckedTags}   // 选中的标签
}