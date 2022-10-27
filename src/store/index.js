import getJobs from "@/api/getJobs";
import { createStore } from "vuex";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";

export const FETCH_JOBS = "FETCH_JOBS";

export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const FILTER_JOBS_BY_ORGANIZAITONS = "FILTER_JOBS_BY_ORGANIZAITONS";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const INLUCED_JOBS_BY_ORGANIZATIONS = "INLUCED_JOBS_BY_ORGANIZATIONS";
export const INLUCED_JOBS_BY_JOB_TYPES = "INLUCED_JOBS_BY_JOB_TYPES";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganizations: [],
    selectedJobTypes: [],
  };
};

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations;
  },
  [ADD_SELECTED_JOB_TYPES](state, selectedJobTypes) {
    state.selectedJobTypes = selectedJobTypes;
  },
};

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOri = new Set();
    state.jobs.forEach((job) => uniqueOri.add(job.organization));
    return uniqueOri;
  },
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set();
    state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
    return uniqueJobTypes;
  },
  [INLUCED_JOBS_BY_ORGANIZATIONS]: (state) => (job) => {
    if (state.selectedOrganizations.length === 0) return true;
    return state.selectedOrganizations.includes(job.organization);
  },
  [INLUCED_JOBS_BY_JOB_TYPES]: (state) => (job) => {
    if (state.selectedJobTypes.length === 0) return true;
    return state.selectedJobTypes.includes(job.jobType);
  },
  [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter((job) => getters.INLUCED_JOBS_BY_ORGANIZATIONS(job))
      .filter((job) => getters.INLUCED_JOBS_BY_JOB_TYPES(job));
  },
};

// context same as store has the APIs
export const actions = {
  [FETCH_JOBS]: async (context) => {
    const joblisting = await getJobs();

    context.commit(RECEIVE_JOBS, joblisting);
  },
};

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
