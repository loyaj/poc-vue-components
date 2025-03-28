<script setup>
import cardStyles from "@/styles/modules/cardStyles.module.scss";

defineProps({
  title: {
    type: String,
    required: true
  }
});
</script>

<template>
  <q-card flat bordered :class="[cardStyles.qCard]">
    <q-card-section :class="[cardStyles.cardHeader]">
      <div :class="[cardStyles.headerWrapper]">
        <span>{{ title }}</span>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section :class="[cardStyles.bodySection]">
      <slot />
    </q-card-section>
  </q-card>
</template>
