<script lang="ts" setup>
defineProps<{
  text?: string
  icon?: any
  color?: string
  primary?: boolean
  outlined?: boolean
  primaryOutlined?: boolean
  transparent?: boolean
  loading?: boolean
  disabledBtn?: boolean
  modal?: boolean
  fullW?: boolean
}>()
</script>

<template>
  <a-button
    :class="[
      'base-btn',
      {
        primary,
        outlined,
        modal,
        disabled: disabledBtn,
        'primary-outlined': primaryOutlined,
        transparent,
      },
    ]"
    :style="{ width: fullW ? '100%' : 'fit-content', gap: text ? '10px' : '0' }"
    :disabled="disabledBtn"
    :loading
    @keydown.enter.stop
  >
    <slot />
    <component :is="icon" class="base-btn__icon" />
    <span class="base-btn__text" :style="{ color }"> {{ text }} </span>
  </a-button>
</template>

<style lang="scss" scoped>
.base-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 2px solid var(--accent-color);
  border-radius: 12px;
  background-color: var(--opacity-element-color);
  box-shadow: 0 0 10px 0 var(--accent-color);
  backdrop-filter: blur(10px);

  &__text {
    color: var(--accent-color);
    line-height: 2;
    transition: 0.2s ease-in-out;
  }

  &__icon {
    fill: none;
    stroke: var(--accent-color);
    transition: 0.2s ease-in-out;
  }

  &.primary {
    border: 2px solid transparent;
    background-color: var(--primary-color);

    .base-btn__text {
      color: white;
    }

    &:hover {
      background-color: var(--hover-primary-color);
    }
  }

  &.outlined {
    border: 2px solid var(--accent-color);
    background-color: transparent;

    .base-btn__text {
      color: white;
    }

    &:hover {
      background-color: var(--hover-accent-color);
      border-color: var(--hover-accent-color);
      box-shadow: 0 0 30px rgba($color: #6f76ad, $alpha: 0.6);
    }
  }

  &.primary-outlined {
    border: 2px solid var(--primary-color);
    background-color: transparent;
    box-shadow: 0 0 20px rgba($color: #cf4d9c, $alpha: 0.6);

    .base-btn__text {
      color: white;
    }

    &:hover {
      background-color: var(--hover-primary-color);
      border-color: var(--hover-primary-color);
      box-shadow: 0 0 30px rgba($color: #922065, $alpha: 0.6);
    }
  }

  &.modal {
    &__text {
      color: white;
    }
  }

  &.disabled {
    border: 2px solid var(--opacity-element-color) !important;
    background-color: transparent !important;
    box-shadow: none;
    cursor: not-allowed;

    .base-btn__text {
      color: rgba($color: #ffffff, $alpha: 0.5);
    }

    &:hover {
      background-color: transparent;
      box-shadow: none;
    }
  }

  &.transparent {
    border: none !important;
    background-color: transparent !important;
    box-shadow: none;
    backdrop-filter: none;

    .base-btn__text {
      color: rgba($color: #ffffff, $alpha: 0.5);
    }

    &:hover {
      background-color: transparent;
      box-shadow: none;
    }
  }

  &:active {
    transform: scale(0.98);
  }
}

@media (max-width: 540px) {
  .base-btn {
    &.primary {
      border-width: 1px;
    }

    &.outlined {
      border-width: 1px;
    }
  }
}
</style>
