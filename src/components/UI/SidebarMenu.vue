<template>
  <n-menu
      v-model:value="selectedKey"
      :collapsed="true"
      :collapsed-width="70"
      :collapsed-icon-size="25"
      :options="menuOptions"
  />
</template>

<script setup lang="ts">
import {h, type Component, ref} from 'vue'
import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  HomeSharp as Home
} from '@vicons/ionicons5'
import {RouterLink} from "vue-router";

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const selectedKey = ref('home-page')

const menuOptions: MenuOption[] = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                path: '/',
              }
            },
            { default: () => 'Главная страница' }
        ),
    key: 'home-page',
    icon: renderIcon(Home)
  },
]
</script>


<style lang="scss">
.n-menu-item-content__icon {
  margin-right: 0!important;
}
</style>
