<template>
  <VDialog v-model="modelValue">
    <VCard>
      <VCardText>
        <VSelect :items="items"> </VSelect>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<script setup>
import {ref} from "vue";

const modelValue = defineModel({type: Boolean})

const items = ref(["Colorado", "Paris", "Toulouse", "Marseille"]);
</script>

<style lang="scss" scoped></style>
