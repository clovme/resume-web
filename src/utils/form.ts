const form = {
    Gender: ['不填', '男', '女'],
    FontFamily: ['微软雅黑', '宋体', "楷体"],
    FontSize: [11, 12, 13, 14, 15],
    isWord: [{label: '文字', value: true}, {label: '百分比', value: false}],
    ProficiencyLevel: [{label: '一般', value: 50}, {label: '良好', value: 65}, {label: '熟练', value: 80}, {label: '擅长', value: 85}, {label: '精通', value: 95}],
    Politics: ['不填', '中共党员', '中共预备党员', '普通公民', '群众'],
    MaritalStatus: ['不填', '已婚', '未婚', '离异', '已婚已育'],
    startDate: ['不填', ' 随时到岗', '一周内到岗', '一个月内到岗', '到岗时间另行商议'],
    xueli: ['不填', '初中', '高中', '中专', '大专', '本科', '学士', '硕士', 'MBA', 'EMBA', '博士'],
    WorkExperienceYears:  function () {
        let data = ['不填', '应届生', '半年经验', ]

        for (let i = 0; i < 13; i++) {
           data.push(`${i + 1}年经验`)
        }
        return data
    }
}

export default form