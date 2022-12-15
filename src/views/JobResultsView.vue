<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script lang="ts">
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "JobResultsView",
  components: {
    JobFilterSidebar,
    JobListings,
  },
});
</script>
