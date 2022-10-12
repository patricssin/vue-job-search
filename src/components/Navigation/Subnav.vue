<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-brand-green-1">{{
            FILTER_JOBS_BY_ORGANIZAITONS.length
          }}</span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { FILTER_JOBS_BY_ORGANIZAITONS } from "@/store";
import { mapGetters } from "vuex";

export default {
  name: "Subnav",
  computed: {
    ...mapGetters([FILTER_JOBS_BY_ORGANIZAITONS]),
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
