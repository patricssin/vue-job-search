<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />

      <accordion header="Degrees">
        <job-filters-sidebar-degree />
      </accordion>

      <accordion header="Job Types">
        <job-filters-sidebar-job-type />
      </accordion>

      <accordion header="Organizations">
        <job-filters-sidebar-organization />
      </accordion>
    </section>
  </div>
</template>

<script lang="ts">
import Accordion from "@/components/Shared/Accordion.vue";
import JobFiltersSidebarDegree from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegree.vue";
import JobFiltersSidebarJobType from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobType.vue";
import JobFiltersSidebarOrganization from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization.vue";
import JobFiltersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "JobFilterSidebar",
  components: {
    Accordion,
    JobFiltersSidebarDegree,
    JobFiltersSidebarJobType,
    JobFiltersSidebarPrompt,
    JobFiltersSidebarOrganization,
  },
  setup() {},
});
</script>
