<template>
  <fieldset>
    <label class="text-base font-semibold text-gray-900">{{ data.text }}</label>
    <div class="space-y-5 mt-4">
      <div v-for="option in data.options" class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input v-model="checkedOptions" :value="option" :id="option" :name="option" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label :for="option" class="font-medium text-gray-900">{{ option }}</label>
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['data'])
const checkedOptions = ref([]);

watch(checkedOptions, (value) => {
  props.data.answer = value;
  props.data.error = checkedOptions.length == 0 ? true : false;
})
</script>