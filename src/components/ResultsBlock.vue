<template>
  <n-card style="margin-bottom: 1rem;">
    <n-space justify="space-between" align="center">
      <h2>Результаты</h2>
      <n-select v-model:value="selectedCategory" :options="options" style="width: 250px;" />
    </n-space>
  </n-card>
  <n-scrollbar style="max-height: calc(100vh - 450px)">
    <n-grid :x-gap="16" :y-gap="16" responsive="screen" cols="1 m:2 l:3 xl:4">
      <n-gi v-for="(item, idx) in resultsByCategory(selectedCategory)" :key="item.url">
        <ResultCard  :card="item" :itemIndex="idx" />
      </n-gi>
    </n-grid>
  </n-scrollbar>
</template>

<script setup lang="ts">

import ResultCard from "@/components/ResultCard.vue";
import {storeToRefs} from "pinia";
import {useResultsStore} from "@/stores/results";
import {computed, ref} from "vue";

const {categories, resultsByCategory} = storeToRefs(useResultsStore())
const selectedCategory = ref('Все')


const options = computed(() => {
  const cats = ['Все', ...Array.from(categories.value)]
  return cats.map(item => {
    return {
      label: item,
      value: item
    }
  })
})


</script>

<style lang="scss">

</style>
