<script lang="ts" setup>
import { ref } from 'vue'
import { MoveLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()
const click = ref<boolean>(false)

const routeBack = () => {
  click.value = true
  router.back()
}
</script>

<template>
  <a-button :class="['back-btn', { 'icon-active': click }]" type="text" @click="routeBack">
    <MoveLeft class="back-btn-icon" />
    <span class="back-btn-text"> Назад </span>
  </a-button>
</template>

<style lang="scss" scoped>
.back-btn {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 0;

  .back-btn-text {
    font-size: 20px;
    color: rgba($color: #000000, $alpha: 0.7);
  }

  .back-btn-icon {
    max-width: 20px;
    max-height: 20px;
    stroke: rgba($color: #000000, $alpha: 0.7);
    transition: 0.2s ease-in-out;
  }

  &:hover {
    background-color: transparent;

    .back-btn-icon {
      transform: translateX(-10px);
    }
  }

  &.icon-active {
    .back-btn-icon {
      animation: goBack 0.1s ease-in-out forwards;
    }
  }

  @keyframes goBack {
    0% {
      transform: translateX(-10px);
    }

    100% {
      transform: translateX(-100px);
    }
  }
}

@media (max-width: 1024px) {
  .back-btn {
    .back-btn-text {
      display: none;
    }

    .back-btn-icon {
      max-width: 24px;
      max-height: 24px;
    }
  }
}

@media (max-width: 540px) {
  .back-btn {
    .back-btn-text {
      display: none;
    }

    .back-btn-icon {
      max-width: 20px;
      max-height: 20px;
    }
  }
}
</style>
