<template>
  <span class="theme-switcher">
    <n-button v-if="theme === null" quaternary circle @click="theme = darkTheme">
      <template #icon >
        <n-icon :component="MoonOutline" size="30" />
      </template>
    </n-button>
     <n-button v-else quaternary circle @click="theme = null">
      <template #icon >
        <n-icon :component="SunnyOutline" size="30" />
      </template>
    </n-button>
  </span>
</template>

<script setup lang="ts">
import {SunnyOutline, MoonOutline} from '@vicons/ionicons5'
import {storeToRefs} from "pinia";
import {useGlobalStore} from "@/stores";
import {darkTheme} from "naive-ui";

const {theme} = storeToRefs(useGlobalStore())

</script>

<style lang="scss">
.theme-switcher {

  margin-top: auto;
}
</style>
