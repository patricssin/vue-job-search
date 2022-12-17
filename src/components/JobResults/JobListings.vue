<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>

    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>

        <div
          class="flex items-center justify-center text-sm font-semibold text-brand-blue-1"
        >
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import JobListing from "./JobListing.vue";
import { computed, onMounted } from "@vue/runtime-core";
import {
  useFilteredJobs,
  useFetchJobsDispatch,
  useFetchDegreesDispatch,
} from "@/store/composables";
import useCurrentPage from "@/composables/useCurrentPage";
import usePrevAndNextPages from "@/composables/usePrevAndNextPages";
import { defineComponent } from "vue";

export default defineComponent({
  name: "JobListings",
  components: { JobListing },
  setup() {
    onMounted(useFetchJobsDispatch);
    onMounted(useFetchDegreesDispatch);

    const filteredJobs = useFilteredJobs();
    const currentPage = useCurrentPage();
    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10));
    const { previousPage, nextPage } = usePrevAndNextPages(
      currentPage,
      maxPage
    );

    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const startIdx = (pageNumber - 1) * 10;
      const endIdx = pageNumber * 10;
      return filteredJobs.value.slice(startIdx, endIdx);
    });

    return { displayedJobs, previousPage, nextPage, currentPage };
  },
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   currentPage() {
  //     const pageString = this.$route.query.page || "1";
  //     return Number.parseInt(pageString);
  //   },
  //   previousPage() {
  //     const prevPage = this.currentPage - 1;
  //     const firstPage = 1;
  //     return prevPage >= firstPage ? prevPage : undefined;
  //   },
  //   nextPage() {
  //     const nextPage = this.currentPage + 1;
  //     const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
  //     return nextPage <= maxPage ? nextPage : undefined;
  //   },
  //   displayJobs() {
  //     const startIdx = (this.currentPage - 1) * 10;
  //     const endIdx = this.currentPage * 10;
  //     return this.FILTERED_JOBS.slice(startIdx, endIdx);
  //   },
  //   // ...mapState(["jobs"]),
  // },
  // async mounted() {
  //   // const baseURL = process.env.VUE_APP_API_URL;
  //   // const res = await axios.get(`${baseURL}/jobs`);
  //   // this.jobs = res.data;
  //   this.$store.dispatch(FETCH_JOBS);
  // },
  // use action instead of mounted
});
</script>
