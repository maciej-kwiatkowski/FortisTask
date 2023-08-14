<template>
  <div>
    <label class="text-base font-semibold text-gray-900">{{ data.text }}</label>
    <select v-model="data.answer" :id="data.name" :name="data.name" class="mt-4 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
      <option value=""  disabled selected>Wybierz jedną z opcji</option>
      <option v-for="option in data.options">{{ option }}</option>
    </select>
  </div>
</template>

<script setup>
const props = defineProps(['data'])
</script>