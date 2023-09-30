<template>
  <n-config-provider
      :theme="theme"
      :theme-overrides="theme === null ? lightThemeOverrides : darkThemeOverrides"
  >
    <n-notification-provider>
      <div class="app">
        <n-layout embedded has-sider style="height: 100%; padding: 30px;">
          <Sidebar />
          <n-layout class="app__content">
            <Header />
            <router-view />
          </n-layout>
        </n-layout>
      </div>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from "@/components/UI/Sidebar.vue";
import Header from "@/components/UI/Header.vue";
import {storeToRefs} from "pinia";
import {useGlobalStore} from "@/stores";

const {theme} = storeToRefs(useGlobalStore())

const lightThemeOverrides  = {
  common: {
    primaryColor: '#D97E2A',
    primaryColorHover: '#D97E2A',
    primaryColorPressed: '#D97E2A',
    primaryColorSuppl: "#D97E2A",
    textColor1: '#4F4F4F'
  },
  Card: {
    color: 'rgb(250, 250, 252)',
  },
  Input: {
    color: 'rgb(250, 250, 252)'
  }
}

const darkThemeOverrides = {
  common: {
    primaryColor: '#D97E2A',
    primaryColorHover: '#D97E2A',
    primaryColorPressed: '#D97E2A',
    primaryColorSuppl: "#D97E2A",
    textColor1: '#BDBDBD'
  },
  Button: {
    textColorPrimary: '#fff',
    textColorHoverPrimary: '#fff',
    textColorPressedPrimary: '#fff',
    textColorFocusPrimary: '#fff',
    textColorDisabledPrimary: '#fff'
  },
  Layout: {
    color: '#333333',
    siderColor: '#333333'
  },
  Card: {
    color: '#101014'
  },
  Input: {
    color: '#101014'
  }
}



</script>


<style lang="scss">
.app {
  width: 100vw;
  height: 100vh;
  &__content {
    padding: 15px 30px;
    border-radius: 1rem;
    margin-left: 30px;
  }
}
</style>
