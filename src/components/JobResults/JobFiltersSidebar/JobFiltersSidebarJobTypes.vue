<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueTobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              id="jobType"
              v-model="selectedJobTypes"
              data-test="clickable-area"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selecteJobType"
            />
            <label :for="jobType" data-test="job-type">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import Accordion from "@/components/Shared/Accordion.vue";
import { useStore } from "vuex";
import { ADD_SELECTED_JOB_TYPES } from "@/store";
import { useUniqueJobTypes } from "@/store/composables";
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const selecteJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResults" });
    };

    const selectedJobTypes = ref([]);
    const uniqueTobTypes = useUniqueJobTypes();
    return { selectedJobTypes, uniqueTobTypes, selecteJobType };
  },
  // data() {
  //   return {
  //     selectedJobTypes: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([UNIQUE_JOB_TYPES]),
  //   // UNIQUE_ORGANIZATIONS() {
  //   //   return this.$store.getters.UNIQUE_ORGANIZATIONS;
  //   // },
  // },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_JOB_TYPES]),  //this.$store.commit(mutation_name)
  //   selectedJobType() {
  //     this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
  //     this.$router.push({ name: "JobResults" });
  //   },
  // },
};
</script>
