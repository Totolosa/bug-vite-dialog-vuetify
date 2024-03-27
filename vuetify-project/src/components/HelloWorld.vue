<template>
  <div>
    <VSelect></VSelect>
    <VCard></VCard>
    <VDialog :model-value="true">
      <Test v-model="dialog"></Test>

    </VDialog>
  </div>
</template>

<script setup>
  import { ref} from "vue";
  import {useDisplay} from "vuetify";

  const {width } = useDisplay();
  console.log("usedisplay vuetify Project: ", width.value)

  const dialog = ref(true)
</script>
