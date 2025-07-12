import { ref } from "vue";
import { defineStore } from "pinia";
import { type Platform } from "..";

export const useScreenStore = defineStore("screen", () => {
  const platform = ref<Platform>("desktop");

  const setPlatform = (width: number) => {
    if (width > 1280) {
      platform.value = "desktop";
    } else if (width > 1024) {
      platform.value = "laptop";
    } else if (width > 540) {
      platform.value = "tablet";
    } else {
      platform.value = "mobile";
    }
  };

  return { setPlatform, platform };
});
