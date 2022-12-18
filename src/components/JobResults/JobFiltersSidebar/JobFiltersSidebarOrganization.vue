<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="uniqueOrganization"
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    data-test="organization-filter"
  />
</template>

<script lang="ts">
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

import { useUniqueOrganizations } from "@/store/composables";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";

import { defineComponent } from "vue";

export default defineComponent({
  name: "JobFilterSidebarOrganization",
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganization = useUniqueOrganizations();

    return {
      uniqueOrganization,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
});
</script>
