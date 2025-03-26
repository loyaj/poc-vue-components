<script setup>
defineProps({
  farewellee: {
    type: String,
    default: "but not goodbye"
  }
});
</script>

<template>
  <div :class="['my-farewell', $style.farewell]">
    Farewell, {{ farewellee }}
  </div>
</template>

<style scoped>
.my-farewell {
  font-weight: bold;
}
</style>
<style module>
.farewell {
  font-style: italic;
}
</style>
