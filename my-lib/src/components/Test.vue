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
  import { ref} from "vue";
  import {useDisplay} from "vuetify";

  const {width } = useDisplay();
  console.log("usedisplay vuetify lib: ", width.value)

  const modelValue = defineModel({type: Boolean})

  const items = ref(["Colorado", "Paris", "Toulouse", "Marseille"]);
</script>
