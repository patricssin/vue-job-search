<template>
  <accordion header="Oranizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li class="w-1/2 h-8">
            <input id="Between Vue and me" type="checkbox" class="mr-3" />
            <label for="Between Vue and me">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue and me" type="checkbox" class="mr-3" />
            <label for="Between Vue and me">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue and me" type="checkbox" class="mr-3" />
            <label for="Between Vue and me">Between Vue</label>
          </li>
          <li class="w-1/2 h-8">
            <input id="Between Vue and me" type="checkbox" class="mr-3" />
            <label for="Between Vue and me">Between Vue</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
};
</script>
