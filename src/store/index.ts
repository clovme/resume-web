import { createStore } from 'vuex'
import { defineAsyncComponent, shallowRef } from 'vue'
import { IBasicInfo, IMenusItem, ISkillsExpertise, State } from '@/store/interface'
import axios from '@/utils/axios.ts'

const store = createStore<State>({
  state: {
    menus: [],
    basicInfo: {} as IBasicInfo,
    skillsExpertise: {
      content: `精通Python编程，熟悉标准库、IO、多线程、异步编程、http协议及网络编程。\n熟练应用Django框架，熟悉中间件开发和REST Framework。\n熟练操作mysql关系型数据库，具备SQL优化技能。\n掌握Tornado、Numpy、pandas、Scrapy和SQLAlchemy等工具。\n熟练使用非关系型数据库mongodb和Redis，并了解Redis分布式锁的应用。\n熟练运用Nginx、Kafka、Neo4j、RabbitMQ、ElasticSearch等技术。\n熟练使用SVN、Git等版本控制工具进行团队协作开发。\n熟悉Linux常用命令操作，具备Docker容器操作经验。\n熟练使用css、html、JavaScript，了解前端框架Vue、elementUI等。\n熟练各种网页逆向，包括JS逆向，加密解密等逆向操作。`,
      tags: { 'Office软件': false, '沟通能力': true, '口才': true, '文案编辑': false, '数据分析': false, '推广运营': false, '产品设计': false, 'JavaScript': false, 'Python': false, 'PHP': false, 'NodeJs': false, '英语': false },
      checkedTags: {
        '沟通能力': {level: 50, isWord: true },
        '口才': {level: 65, isWord: false }
      }
    } as ISkillsExpertise
  },
  mutations: {
    // 设置菜单
    setMenus(state, data: IMenusItem[]) {state.menus = data},
    // 基本信息表单
    setBasicInfo(state, data: IBasicInfo) {state.basicInfo = data},
    // 自定义基本信息表单
    // 基本信息表单
    setSkillsExpertise(state, data: ISkillsExpertise) {state.skillsExpertise = data}
  },
  getters: {
    getMenus(state): IMenusItem[] {return state.menus},
    getBasicInfo(state): IBasicInfo {return state.basicInfo},
    getSkillsExpertise(state): ISkillsExpertise {return state.skillsExpertise}
  },
  actions: {
    async fetchMenus({ commit }) {
      try {
        const response = await axios.get(`/menus`)
        const menus: IMenusItem[] = response.data.data.map((menu: IMenusItem) => {
          return {
            ...menu,
            form: shallowRef(defineAsyncComponent(() => import(`@/components/form/F${menu.name}.vue`))),
            module: shallowRef(defineAsyncComponent(() => import(`@/components/resume/P${menu.name}.vue`)))
          }
        })
        commit('setMenus', menus)
      } catch (error) {
      }
    },
    async fetchBasicInfo({ commit }) {
      try {
        const response = await axios.get(`/basicinfo`)
        commit('setBasicInfo', response.data.data)
      } catch (error) {
      }
    }
  }
})

// 在组件初始化时调用 fetchMenus
store.dispatch('fetchMenus').catch(error => console.error('Initial fetchMenus error:', error))
store.dispatch('fetchBasicInfo').catch(error => console.error('Initial fetchBasicInfo error:', error))

export default store
