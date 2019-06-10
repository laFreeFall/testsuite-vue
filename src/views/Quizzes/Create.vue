<template>
  <div class="create-quiz">
    <h1>This is create quiz page</h1>
    <v-flex xs12 sm6 d-flex>
      <v-form md12>
        <v-text-field
          v-model="quiz.title"
          label="Quiz Title"
        ></v-text-field>
        <v-select
          :items="categories"
          v-model="quiz.category_id"
          item-text="title"
          item-value="id"
          label="Quiz Category"
        ></v-select>
      </v-form>
    </v-flex>
    <v-flex xs12 sm6 d-flex>
      <v-select
        :items="questionsTypes"
        @change="onQuestionTypeChange"
        item-text="title"
        item-value="id"
        label="Question type"
      ></v-select>
      <template v-if="quiz.questions.length">
        <component
          v-for="question in quiz.questions"
          :key="question.id"
          :is="getQuestionComponentName(question.slug)"
        ></component>
      </template>
    </v-flex>
    <v-flex xs12 sm6 d-flex>
      <v-btn
        color="success"
        @click="onCreateQuizClick"
      >
        Create Quiz
      </v-btn>
    </v-flex>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import camelCase from 'lodash/camelCase'

import SingleAnswer from '@/components/Quizzes/Questions/Types/SingleAnswer.vue'
import MultipleAnswers from '@/components/Quizzes/Questions/Types/MultipleAnswers.vue'
import Order from '@/components/Quizzes/Questions/Types/Order.vue'
import Match from '@/components/Quizzes/Questions/Types/Match.vue'
import TrueFalse from '@/components/Quizzes/Questions/Types/TrueFalse.vue'

export default {
  name: 'CreateQuiz',

  components: {
    SingleAnswerQuestion: SingleAnswer,
    MultipleAnswersQuestion: MultipleAnswers,
    OrderQuestion: Order,
    MatchQuestion: Match,
    TrueFalseQuestion: TrueFalse,
  },

  data() {
    return {
      quiz: {
        title: '',
        category_id: null,
        questions: [],
      },
    }
  },

  computed: {
    ...mapGetters([
      'questionsTypes',
      'categories',
    ]),
  },

  methods: {
    ...mapActions([
      'fetchCategories',
      'fetchQuestionsTypes',
      'storeQuiz',
    ]),

    onCreateQuizClick() {
      this.storeQuiz(this.quiz)
    },

    getQuestionTypeById(id) {
      return this.questionsTypes.find(questionType => questionType.id === id)
    },

    onQuestionTypeChange(val) {
      this.quiz.questions.push({
        id: Math.max(...this.quiz.questions.map(o => o.id), 0) + 1,
        slug: this.getQuestionTypeById(val).slug,
      })
    },

    getQuestionComponentName(answerSlug) {
      return camelCase(`${answerSlug}Question`)
    },
  },

  created() {
    this.fetchCategories()
    this.fetchQuestionsTypes()
  },
}
</script>
