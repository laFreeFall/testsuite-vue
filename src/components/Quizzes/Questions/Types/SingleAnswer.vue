<template>
  <v-form>
    <p>Single answer question</p>
    <v-text-field
      v-model="question.answer"
      label="Question"
      required
    ></v-text-field>
    <div
      v-for="(option, index) in question.options"
      :key="option.id"
    >
      <v-flex md8>
        <v-text-field
          v-model="option.content"
          :label="`Option ${index + 1}`"
          required
        ></v-text-field>
      </v-flex>
      <v-flex md4>
        <v-checkbox
          @change="onCheckboxChange(index)"
          :value="option.correct"
          label="Correct"
        >
        </v-checkbox>
      </v-flex>
    </div>

    <v-btn @click="addOption">
      Add option
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'SingleAnswer',

  data() {
    return {
      question: {
        answer: '',
        options: [
          {
            id: 1,
            content: '',
            correct: false,
          },
          {
            id: 2,
            content: '',
            correct: false,
          },
        ],
      },
    }
  },

  methods: {
    getEmptyOption(id) {
      return {
        id,
        content: '',
        correct: false,
      }
    },

    addOption() {
      const id = Math.max(...this.question.options.map(o => o.id), 0) + 1
      this.question.options.push(this.getEmptyOption(id))
    },

    onCheckboxChange(index) {
      if (this.question.options[index].correct) {
        this.question.options[index].correct = false
        return
      }

      this.question.options = this.question.options.map((option, ind) => (
        { ...option, correct: index === ind }
      ))
    },
  },
}
</script>
