import {
  TOGGLE_SIDEBAR_STATUS,
  SET_CATEGORIES,
  SET_QUESTIONS_TYPES,
  ADD_QUIZ,
} from './mutation-types'

export default {
  [TOGGLE_SIDEBAR_STATUS](state, value) {
    state.ui.isSidebarShown = value
  },

  [SET_CATEGORIES](state, categories) {
    state.quizzes.categories = categories
  },

  [SET_QUESTIONS_TYPES](state, types) {
    state.quizzes.questions.types = types
  },

  [ADD_QUIZ](state, quiz) {
    state.quizzes.quizzes.push(quiz)
  },
}
