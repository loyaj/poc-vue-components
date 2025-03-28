<script setup>
defineProps({
  greetee: {
    type: String,
    default: "World"
  }
});
</script>

<template>
  <div :class="['my-greeting', $style.greeting]">Greetings, {{ greetee }}!</div>
</template>

<style scoped>
.my-greeting {
  font-weight: bold;
  color: var(--colors-primary-990);
}
</style>
<style module>
.greeting {
  font-style: italic;
}
</style>
