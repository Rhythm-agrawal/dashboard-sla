<template>
  <a @click="toggleTheme" :class="'btn ' + className">
    {{ isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode" }}
  </a>
</template>

<script>
import { ref, onBeforeMount, watch } from "vue";
export default {
  name: "ThemeSwitcher",
  props: {
    className: String,
  },
  setup() {
    const isDarkTheme = ref(false);
    const toggleTheme = () => {
      isDarkTheme.value = !isDarkTheme.value;
      saveThemePreference();
    };
    const saveThemePreference = () => {
      localStorage.setItem("theme", isDarkTheme.value ? "dark" : "light");
    };
    onBeforeMount(() => {
      isDarkTheme.value = localStorage.getItem("theme") === "dark" || false;
    });
    const applyTheme = () => {
      const htmlElement = document.querySelector("html");
      htmlElement.setAttribute(
        "data-bs-theme",
        isDarkTheme.value ? "dark" : "light"
      );
    };
    // Watch for changes in the isDarkTheme property
    watch(isDarkTheme, applyTheme);
    return {
      isDarkTheme,
      toggleTheme,
    };
  },
};
</script>
