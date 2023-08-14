<template>
  <div>
    <label class="text-base font-semibold text-gray-900">{{ data.text }}</label>
    <div v-for="(question, index) in data.subquestions">
      <div class="flex items-center justify-between mt-4">
        <h2 class="text-sm font-medium leading-6 text-gray-900">{{ question.text }}</h2>
      </div>
      <RadioGroup class="mt-2">
        <RadioGroupLabel class="sr-only">{{ question.text }}</RadioGroupLabel>
        <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
          <RadioGroupOption as="template" v-for="rating in 5"  v-model="question.answer" :key="rating" :value="rating" v-slot="{ active, checked }">
            <div @click="setRating(index, rating)" :class="[active ? 'ring-2 ring-indigo-600 ring-offset-2' : '', checked ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50', 'flex items-center justify-center rounded-md py-3 px-3 text-sm font-semibold uppercase sm:flex-1']">
              <RadioGroupLabel as="span">{{ rating }}</RadioGroupLabel>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup>
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue';
const props = defineProps(['data'])

const setRating = (index, rating) => {
  props.data.subquestions[index].answer = rating;
};

</script>