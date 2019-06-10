import axios from 'axios'

import {
  TOGGLE_SIDEBAR_STATUS,
  SET_CATEGORIES,
  SET_QUESTIONS_TYPES,
  ADD_QUIZ,
} from './mutation-types'

export default {
  toggleSidebarStatus({ commit }, value) {
    commit(TOGGLE_SIDEBAR_STATUS, value)
  },

  fetchCategories({ commit }) {
    return axios.get('/quizzes/categories')
      .then(response => {
        commit(SET_CATEGORIES, response.data.categories)
      })
      .catch(error => {
        console.error('Error while fetching quizzes categories', error)
      })
  },

  fetchQuestionsTypes({ commit }) {
    return axios.get('/quizzes/questions/types')
      .then(response => {
        commit(SET_QUESTIONS_TYPES, response.data.types)
      })
      .catch(error => {
        console.error('Error while fetching questions types', error)
      })
  },

  storeQuiz({ commit }, quiz) {
    return axios.post('/quizzes', quiz)
      .then(response => {
        commit(ADD_QUIZ, response.data.quiz)
      })
      .catch(error => {
        console.error('Error while storing new quiz', error)
      })
  },
}
