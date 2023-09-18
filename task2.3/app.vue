<template>
  <p>{{ message }}</p>
  <div v-html="rawHtml"></div>
  <div v-bind:id="dynamicId"></div>
  <p>{{ message.split('').reverse().join('') }}</p>
</template>

<script setup>
  import { ref } from 'vue';

  const message = ref('Task 2.3C');
  const rawHtml = '<span style="color: red">Red Raw HTML</span>';
  const dynamicId = 'my-id';
</script>
