<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="goToHome">go to home</button>
  </div>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push("/");
    },
  },
};
</script>
