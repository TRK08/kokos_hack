<template>
  <div class="home-page">
    <n-card style="margin-bottom: 4rem;">
      <n-space justify="space-between" align="end" :size="[30, 0]" :wrap="false" :wrap-item="false">
        <h3 style="white-space: nowrap">Введите URL страницы:</h3>
        <n-input
            v-model:value="textValue"
            placeholder="https://example.com"
            style="width: 100%;"
            :theme-overrides="theme === null ? inputThemeOverridesLight: inputThemeOverridesDark">
        </n-input>
        <n-button
            :loading="fetchStatus === 'loading'"
            :disabled="!isValidURL"
            type="primary"
            style="width: 100%; max-width: 300px;"
            @click="sendRequest"
        >
          Отправить
        </n-button>
      </n-space>
    </n-card>

    <ResultsBlock />

  </div>
</template>

<script setup lang="ts">
import type {InputProps} from "naive-ui";
import {storeToRefs} from "pinia";
import {useGlobalStore} from "@/stores";
import {useResultsStore} from '@/stores/results'
import {computed, ref} from "vue";
import {useNotification} from "naive-ui";
import ResultsBlock from "@/components/ResultsBlock.vue";
type InputThemeOverrides = NonNullable<InputProps['themeOverrides']>

const notification = useNotification()
const {theme} = storeToRefs(useGlobalStore())
const {results, categories, fetchStatus} = storeToRefs(useResultsStore())
const {loadInfo} = useResultsStore()

const inputThemeOverridesLight: InputThemeOverrides = {
  color: '#FFFFFF'
}
const inputThemeOverridesDark: InputThemeOverrides = {
  color: '#333333'
}

const textValue = ref('')
const isValidURL = computed(() => {
  const regExp = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=]+$/gm
  return textValue.value && textValue.value.match(regExp)
})

const sendRequest = async () => {
  const res = await loadInfo(textValue.value)

  if (res?.status === 'error') {
    switch (res.code) {
      case 400:
        notification.error({
          content: 'Вы ввели невалидный URL',
          duration: 3000
        })
        break;
      default:
        notification.error({
          content: 'Что-то пошло не так',
          duration: 3000
        })
    }
  }
}


const setDefaultResults = () => {
  results.value = JSON.parse(localStorage.getItem('results' ) || '[]')
  results.value.forEach(item => categories.value.add(item.category))
}

setDefaultResults()


</script>

<style lang="scss">
.home-page {
  .n-card {
    border-radius: 1rem;
  }
}
</style>
