<template>
  <div>
    <VDialog :model-value="true">
      <Test v-model="dialog"></Test>

    </VDialog>
  </div>
</template>

<script setup>
import { ref} from "vue";
  const dialog = ref(true)
</script>
