<template>
  <n-layout-sider
      class="sidebar"
      :width="100"
      :collapsed-width="100"
      collapse-mode="width"
  >
    <n-space vertical :size="[0, 0]" align="center" :wrap-item="false" style="height: 100%; overflow: hidden;">
      <n-space justify="center">
        <n-avatar
            class="sidebar__avatar"
            round
            size="large"
            :style="{
        color: '#fff',
        backgroundColor: '#D97E2A'
     }"
        >
          U
        </n-avatar>
      </n-space>
      <n-divider style="margin: 15px 0;" />
      <SidebarMenu />
      <ThemeSwitcher />
    </n-space>
  </n-layout-sider>
</template>
<script setup lang="ts">
import SidebarMenu from "@/components/UI/SidebarMenu.vue";
import ThemeSwitcher from "@/components/UI/ThemeSwitcher.vue";

</script>


<style lang="scss">
.sidebar {
  width: 100%;
  height: 100%;
  padding: 30px 15px;
  border-radius: 1rem;
  &_avatar {
    margin: 0 auto;
  }
}
</style>
