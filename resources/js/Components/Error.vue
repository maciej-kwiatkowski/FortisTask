<template>
  <div class="rounded-md bg-red-50 p-4">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">Nie odpowiedziałeś na wszystkie pytania:</h3>
        <div class="mt-2 text-sm text-red-700">
          <ul role="list" class="list-disc space-y-1 pl-5">
            <li v-for="question in questionsWithErrors">
              <span >Udziel odpowiedzi na pytanie: <b>{{question.text}}</b></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

import { XCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps(['data'])

const questionsWithErrors = computed(() => {
  return props.data.filter(question => question.error);
});
</script>