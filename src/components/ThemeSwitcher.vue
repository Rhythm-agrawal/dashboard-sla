<template>
  <div class="row">
    <div class="col-md-12 text-end">
      <button @click="toggleTheme" class="btn btn-link">
        {{ isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode" }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, watch } from "vue";
export default {
  name: "ThemeSwitcher",
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
