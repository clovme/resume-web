import { createStore } from 'vuex'
import { defineAsyncComponent, shallowRef } from 'vue'
import { State } from '@/store/interface'
import axios from '@/utils/axios.ts'
import { IBasicInfo } from './interface/basicinfo.ts'
import { ISkills } from './interface/skills.ts'
import { IMenus } from './interface/menus.ts'
import { ITags } from './interface/Tags.ts'
import { IWorksExperience } from './interface/works.ts'
import { IProjectExperience } from './interface/project.ts'
import { IEducation } from './interface/education.ts'
import { IEvaluation } from './interface/evaluation.ts'

const store = createStore<State>({
  state: {
    tags: [],
    menus: [],
    works: [],
    campus: [],
    project: [],
    education: [],
    internship: [],
    skills: {} as ISkills,
    basicInfo: {} as IBasicInfo,
    evaluation: {} as IEvaluation,
  },
  mutations: {
    setTags(state, data: ITags[]) {state.tags = data},
    setMenus(state, data: IMenus[]) {state.menus = data},
    setBasicInfo(state, data: IBasicInfo) {state.basicInfo = data},
    setSkills(state, data: ISkills) {state.skills = data},
    setWorks(state, data: IWorksExperience[]) {state.works = data},
    setInternship(state, data: IWorksExperience[]) {state.internship = data},
    setCampus(state, data: IWorksExperience[]) {state.campus = data},
    setProject(state, data: IProjectExperience[]) {state.project = data},
    setEducation(state, data: IEducation[]) {state.education = data},
    setEvaluation(state, data: IEvaluation) {state.evaluation = data},
  },
  getters: {
    getTags(state): ITags[] {return state.tags},
    getMenus(state): IMenus[] {return state.menus},
    getBasicInfo(state): IBasicInfo {return state.basicInfo},
    getSkills(state): ISkills {return state.skills},
    getWorks(state): IWorksExperience[] {return state.works},
    getInternship(state): IWorksExperience[] {return state.internship},
    getCampus(state): IWorksExperience[] {return state.campus},
    getProject(state): IProjectExperience[] {return state.project},
    getEducation(state): IEducation[] {return state.education},
    getEvaluation(state): IEvaluation {return state.evaluation},
  },
  actions: {
    async fetchMenus({ commit }) {
      try {
        const response = await axios.get('/menus')
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
        const response = await axios.get('/basicinfo')
        commit('setBasicInfo', response.data.data)
      } catch (error) {
      }
    },
    async fetchTags({ commit }) {
      try {
        const response = await axios.get('/tags?type=0')
        commit('setTags', response.data.data)
      } catch (error) {
      }
    },
    async fetchSkills({ commit }) {
      try {
        const response = await axios.get('/skills')
        if (!response.data.data.checkedTags) {
          response.data.data.checkedTags = {}
        }
        commit('setSkills', response.data.data)
      } catch (error) {
      }
    },
    async fetchWorks({ commit }) {
      try {
        const response = await axios.get('/works')
        commit('setWorks', response.data.data)
      } catch (error) {
      }
    },
    async fetchInternship({ commit }) {
      try {
        const response = await axios.get('/internship')
        commit('setInternship', response.data.data)
      } catch (error) {
      }
    },
    async fetchCampus({ commit }) {
      try {
        const response = await axios.get('/campus')
        commit('setCampus', response.data.data)
      } catch (error) {
      }
    },
    async fetchProject({ commit }) {
      try {
        const response = await axios.get('/project')
        commit('setProject', response.data.data)
      } catch (error) {
      }
    },
    async fetchEducation({ commit }) {
      try {
        const response = await axios.get('/education')
        commit('setEducation', response.data.data)
      } catch (error) {
      }
    },
    async fetchEvaluation({ commit }) {
      try {
        const response = await axios.get('/evaluation')
        commit('setEvaluation', response.data.data)
      } catch (error) {
      }
    },
  }
})

// 在组件初始化时调用 fetchMenus
for (const item of Object.keys(store.getters)) {
  store.dispatch(`fetch${item.slice(3, item.length)}`).catch(error => console.error('Initial fetchMenus error:', error))
}

export default store
