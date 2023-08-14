<template>
  <div v-if="!saved" class="bg-white p-8">
    <ErrorMessage :data="questions" v-if="error" />
    <div v-if="!showSurvey">
      <Intro @openModal="openModal = true" @fillOutSurvey="showSurvey = true" />
      <Modal :open="openModal" @closeModal="openModal = false" />
    </div>
    <div v-else>
      <div v-for="(question, index) in questions" :key="index" class="space-y-12">
        <div v-if="question.isVisible" class="border-b border-gray-300 pb-8">
          <RadioComponent v-if="question.type == 'radio'" :data="question" class="p-8" />
          <SelectComponent v-else-if="question.type == 'select'" :data="question" class="p-8" />
          <CheckboxComponent v-else-if="question.type == 'checkbox'" :data="question" class="p-8" />
          <TexareaComponent v-else-if="question.type == 'textarea'" :data="question" class="p-8" />
          <RatingComponent v-else-if="question.type == 'rating'" :data="question" class="p-8" />
          <InputComponent v-else :data="question" class="p-8" />
        </div>
      </div>
      <button
          @click="handleButtonClick()"
          :disabled="checkQuestion(questions[currentQuestion])"
          :class="[
      !checkQuestion(questions[currentQuestion]) ? 'bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200' : 'bg-gray-300 cursor-not-allowed',
      'rounded-md px-4 py-2 mt-6 text-sm font-semibold text-white shadow-sm '
    ]"
          type="button"
      >
        {{ isLastQuestion() ? 'Wyślij ankietę' : 'Dalej' }}
      </button>
    </div>
  </div>
  <div v-else>
    <Ending />
  </div>
</template>

<script setup>
import {computed, ref} from 'vue';
import { useStore } from 'vuex';
import Modal from "../Components/Modal.vue";
import Intro from "../Components/Intro.vue";
import InputComponent from "../Components/Fields/InputComponent.vue";
import SelectComponent from "../Components/Fields/SelectComponent.vue";
import RadioComponent from "../Components/Fields/RadioComponent.vue";
import CheckboxComponent from "../Components/Fields/CheckboxComponent.vue";
import TexareaComponent from "../Components/Fields/TexareaComponent.vue";
import RatingComponent from "../Components/Fields/RatingComponent.vue";
import ErrorMessage from "../Components/Error.vue";
import Ending from "../Components/Ending.vue";

const openModal = ref(false);
const showSurvey = ref(false);
const currentQuestion = ref(0);
const error = ref(false);

const store = useStore();
const questions = store.state.questions;
const saved = computed(() => store.state.saved);


function showNextQuestion(index) {
    if (index + 1 < questions.length) {
      questions[index + 1].isVisible = true;
    }
    currentQuestion.value++;
}
function checkQuestion(question) {
  if (question.type == 'checkbox') {
    return question.answer.length === 0;
  } else if (question.type === 'rating') {
    return !question.subquestions.every(subquestion => subquestion.answer !== 0);
  }
  return !question.answer.trim();
}
function isLastQuestion() {
  return currentQuestion.value === questions.length - 1;
}
function handleButtonClick() {
  if (isLastQuestion()) {
    sendSurvey();
  } else {
    showNextQuestion(currentQuestion.value);
  }
}
function sendSurvey() {
    error.value = false;
    questions.forEach(question => {
      if(checkQuestion(question)) {
        console.log(question.type)
        question.error = true;
        error.value = true;
      }
    });

    if(error.value == false) {
      store.dispatch('saveSurvey', questions);
    } else {
      error.value = true;
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
}



</script>
