<template>
  <main-nav />
  <router-view />
</template>

<script lang="ts">
import MainNav from "@/components/Navigation/MainNav.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  components: {
    MainNav,
  },
});
</script>
