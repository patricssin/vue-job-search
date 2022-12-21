<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      placeholder="Computer programming, Finance degree"
      data-test="skills-search-input"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { UPDATE_SKILL_SEARCH_TERM } from "@/store/constants";
import { useStore } from "vuex";
import { key } from "@/store";

export default defineComponent({
  name: "JobFilterSidebarSkills",
  setup() {
    const store = useStore(key);
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_SKILL_SEARCH_TERM, value);
      },
    });

    return { skillsSearchTerm };
  },
});
</script>
