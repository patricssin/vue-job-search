<template>
  <accordion header="Oranizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
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
import { useStore } from "vuex";
import { useUniqueOrganizations } from "@/store/composables";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();

    const selectOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations.value);
      router.push({ name: "JobResults" });
    };

    return { selectedOrganizations, uniqueOrganizations, selectOrganization };
  },
  // data() {
  //   return {
  //     selectedOrganizations: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([UNIQUE_ORGANIZATIONS]),
  //   // UNIQUE_ORGANIZATIONS() {
  //   //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
  //   // },
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
  //   selectedOrganization() {
  //     this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
  //   },
  // },
};
</script>
