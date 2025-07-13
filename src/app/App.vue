<script setup lang="ts">
import { ref } from 'vue'
import ruRU from 'ant-design-vue/es/locale/ru_RU'
import 'dayjs/locale/ru'
import { useLayout } from './layouts'

const { layout } = useLayout()

const theme = ref({
  token: {
    colorPrimary: '#cf4d9c',
    colorPrimaryHover: '#6f76ad;',
    colorSuccess: '#c0ff8f',
    colorError: '#ff7c7c',
  },
  components: {
    Radio: {
      colorBorder: '#959bcd',
      colorBgContainer: '#3a3e62',
      colorText: '#ffffff',
      colorPrimary: '#cf4d9c',
    },
    Checkbox: {
      colorPrimaryHover: '#b34488',
      colorBgContainer: 'transparent',
      colorBorder: '#959bcd',
    },
  },
})
</script>

<template>
  <a-config-provider :theme="theme" :locale="ruRU">
    <a-app class="app">
      <Transition name="fade" mode="out-in">
        <component :is="layout">
          <router-view v-slot="{ Component }">
            <Transition name="fade" mode="out-in">
              <component :is="Component" />
            </Transition>
          </router-view>
        </component>
      </Transition>
    </a-app>
  </a-config-provider>
</template>

<style lang="scss">
// @import url('./style/custom.scss');
@import url('./style/style.scss');
@import url('./style/vars.scss');
@import url('./style/transition.scss');
</style>
