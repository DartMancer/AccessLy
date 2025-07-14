<script lang="ts" setup>
defineProps<{
  text?: string
  icon?: any
  color?: string
  primary?: boolean
  outlined?: boolean
  disabledBtn?: boolean
  loading?: boolean
  fullW?: boolean
}>()
</script>

<template>
  <a-button
    :class="['base-btn', { primary, outlined, disabled: disabledBtn }]"
    :style="{ width: fullW ? '100%' : 'fit-content', gap: text ? '10px' : '0' }"
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
    border: 2px solid var(--primary-color);
    background-color: transparent;

    .base-btn__text {
      color: var(--primary-color);
    }

    .base-btn__icon {
      stroke: var(--primary-color);
    }

    &:hover {
      background-color: var(--hover-primary-color);
      border-color: var(--hover-primary-color);

      .base-btn__text {
        color: white;
      }

      .base-btn__icon {
        stroke: white;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    border: 2px solid rgba($color: #000000, $alpha: 0.3);
    background-color: transparent;
    box-shadow: none;
    pointer-events: none;

    .base-btn__text {
      color: rgba($color: #000000, $alpha: 0.4);
    }

    &:hover {
      background-color: var(--hover-primary-color);
      border-color: var(--hover-primary-color);

      .base-btn__text {
        color: white;
      }
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
