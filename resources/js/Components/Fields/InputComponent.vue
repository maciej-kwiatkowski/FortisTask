<template>
  <div>
    <div>
      <label class="text-base font-semibold text-gray-900">{{ data.text }}</label>
      <div class="mt-4">
        <input type="text" v-model="data.answer" :name="data.id" :id="data.id"
               @keydown="limitKeypress"
               :class="[
                   data.error ? 'border border-red-500 ring-red-500' : 'border border-gray-300',
                  'block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              ]"
               :placeholder="data.placeholder" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { watch } from 'vue';

const props = defineProps(['data'])

watch(() => props.data.answer, (value) => {
  props.data.error = value.trim() !== '' ? false : true;
});
const limitKeypress = (event) => {
  if (props.data.answer.length >= 100) {
    event.preventDefault();
  }
};

</script>