<script setup>
import "./assets/main.css";
import Dashboard from "./components/Dashboard.vue";
import ThemeSwitcher from "./components/ThemeSwitcher.vue";
</script>

<template>
  <div id="app" class="container">
    <ThemeSwitcher />
    <Dashboard />
  </div>
</template>
