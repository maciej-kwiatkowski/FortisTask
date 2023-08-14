<template>
  <div>
    <label class="text-base font-semibold text-gray-900">{{ data.text }}</label>
    <fieldset class="mt-4">
      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        <div v-for="(option, index) in data.options" :key="index" class="flex items-center">
          <input v-model="data.answer" :id="option" :value="option" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
          <label :for="option" class="ml-3 block text-sm font-medium leading-6 text-gray-900">
            {{ option }}
          </label>
        </div>
      </div>
    </fieldset>
  </div>
</template>

<script setup>
const props = defineProps(['data'])

</script>