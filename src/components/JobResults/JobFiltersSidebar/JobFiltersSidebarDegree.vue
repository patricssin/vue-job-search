<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueDegrees"
    :mutation="ADD_SELECTED_DEGREES"
    data-test="degree-filter"
  />
</template>

<script lang="ts">
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import { useUniqueDegrees } from "@/store/composables";
import { ADD_SELECTED_DEGREES } from "@/store/constants";

import { defineComponent } from "vue";

export default defineComponent({
  name: "JobFilterSidebarDegree",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees();

    return {
      uniqueDegrees,
      ADD_SELECTED_DEGREES,
    };
  },
});
</script>
