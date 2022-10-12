<template>
  <accordion header="Oranizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectedOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_ORGANIZATIONS, ADD_SELECTED_ORGANIZATIONS } from "@/store";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
    // UNIQUE_ORGANIZATIONS() {
    //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
    // },
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
    selectedOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
    },
  },
};
</script>
