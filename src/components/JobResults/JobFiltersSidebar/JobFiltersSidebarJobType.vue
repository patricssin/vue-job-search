<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueJobTypes"
    :mutation="ADD_SELECTED_JOB_TYPES"
    data-test="job-types-filter"
  />
</template>

<script lang="ts">
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import { useUniqueJobTypes } from "@/store/composables";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";

import { defineComponent } from "vue";

export default defineComponent({
  name: "JobFilterSidebarJobType",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes();

    return {
      uniqueJobTypes,
      ADD_SELECTED_JOB_TYPES,
    };
  },
});
</script>
