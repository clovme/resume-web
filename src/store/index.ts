import { createStore } from 'vuex'
import { defineAsyncComponent, shallowRef } from 'vue'
import { State } from '@/store/interface'
import axios from '@/utils/axios.ts'
import { IBasicInfo } from './interface/basicinfo.ts'
import { ISkills } from './interface/skills.ts'
import { IMenus } from './interface/menus.ts'
import { ITags } from './interface/Tags.ts'

const store = createStore<State>({
  state: {
    tags: [],
    menus: [],
    basicInfo: {} as IBasicInfo,
    skills: {
      content: `精通Python编程，熟悉标准库、IO、多线程、异步编程、http协议及网络编程。\n熟练应用Django框架，熟悉中间件开发和REST Framework。\n熟练操作mysql关系型数据库，具备SQL优化技能。\n掌握Tornado、Numpy、pandas、Scrapy和SQLAlchemy等工具。\n熟练使用非关系型数据库mongodb和Redis，并了解Redis分布式锁的应用。\n熟练运用Nginx、Kafka、Neo4j、RabbitMQ、ElasticSearch等技术。\n熟练使用SVN、Git等版本控制工具进行团队协作开发。\n熟悉Linux常用命令操作，具备Docker容器操作经验。\n熟练使用css、html、JavaScript，了解前端框架Vue、elementUI等。\n熟练各种网页逆向，包括JS逆向，加密解密等逆向操作。`,
      checkedTags: {
        '沟通能力': {level: 50, isWord: true },
        '口才': {level: 65, isWord: false }
      }
    } as ISkills
  },
  mutations: {
    setTags(state, data: ITags[]) {state.tags = data},
    setMenus(state, data: IMenus[]) {state.menus = data},
    setBasicInfo(state, data: IBasicInfo) {state.basicInfo = data},
    setSkills(state, data: ISkills) {state.skills = data}
  },
  getters: {
    getTags(state): ITags[] {return state.tags},
    getMenus(state): IMenus[] {return state.menus},
    getBasicInfo(state): IBasicInfo {return state.basicInfo},
    getSkills(state): ISkills {return state.skills}
  },
  actions: {
    async fetchMenus({ commit }) {
      try {
        const response = await axios.get(`/menus`)
        const menus: IMenus[] = response.data.data.map((menu: IMenus) => {
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
    },
    async fetchTags({ commit }) {
      try {
        const response = await axios.get(`/tags?type=0`)
        commit('setTags', response.data.data)
      } catch (error) {
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await axios.get(`/skills`)
        if (!response.data.data.checkedTags) {
          response.data.data.checkedTags = {}
        }
        commit('setSkills', response.data.data)
      } catch (error) {
      }
    }
  }
})

// 在组件初始化时调用 fetchMenus
store.dispatch('fetchMenus').catch(error => console.error('Initial fetchMenus error:', error))
store.dispatch('fetchBasicInfo').catch(error => console.error('Initial fetchBasicInfo error:', error))
store.dispatch('fetchTags').catch(error => console.error('Initial fetchBasicInfo error:', error))
store.dispatch('fetchSkills').catch(error => console.error('Initial fetchBasicInfo error:', error))

export default store
