import { computed } from "vue";
import { useStore } from "vuex";
import { FILTERED_JOBS } from ".";

export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]);
};
