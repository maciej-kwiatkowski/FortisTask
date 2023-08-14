<template>
  <div class="bg-white p-8">
      <div  class="space-y-12">
          <div v-if="surveys.length === 0">
             Brak wypełnionych ankiet
          </div>
          <div v-else>
            <div v-for="survey in surveys">
              <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ankieta nr {{ survey.id }}</h1>
              <div v-for="answer in survey.answers" class="border-b border-gray-300 pb-8">
                <div v-if="answer.type == 'rating'" class="max-w-xl">
                  <p class="mt-6 font-semibold">{{ answer.question }} </p>

                  <div v-for="subquestion in JSON.parse(answer.answer)">
                    <p class="mt-2 ml-5">
                      <span class="font-normal">{{ subquestion.text }}: </span>
                      <span class="font-medium">{{subquestion.answer}}</span>
                    </p>
                  </div>
                </div>
                <div v-else-if="answer.type == 'checkbox'">
                  <span class="font-medium">{{ answer.question }}:</span>
                  <div v-for="checkboxAnswer in JSON.parse(answer.answer)">
                    <p class="mt-2 ml-5">{{ checkboxAnswer }}</p>
                  </div>

                </div>
                <div v-else class="max-w-xl">
                  <p class="mt-6 font-semibold">{{ answer.question }} </p>
                  <p class="mt-2">{{ answer.answer }} </p>
                </div>
              </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const surveys = computed(() => store.state.surveys);

onMounted(() => {
  store.dispatch('fetchSurveys')
});
</script>
