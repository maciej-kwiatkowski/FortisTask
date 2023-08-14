<template>
  <div>
    <label class="text-base font-semibold text-gray-900">{{ data.text }}</label>
    <div class="mt-4">
      <textarea rows="4" v-model="data.answer" :name="data.id" :id="data.id"
                @keydown="limitKeypress"
                :class="[
                   data.error ? 'border border-red-500 ring-red-500' : 'border border-gray-300',
                  'block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              ]"
      />
      <p class="mt-2 text-xs text-gray-500 float-right">
        Pozostało znaków: {{ maxLength - data.answer.length }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps(['data'])
const maxLength = ref(500);

watch(() => props.data.answer, (value) => {
  props.data.error = value.trim() !== '' ? false : true;
});

const limitKeypress = (event) => {
  if (props.data.answer.length >= 200) {
    event.preventDefault();
  }
};
</script>