import getJobs from "@/api/getJobs";
import { createStore } from "vuex";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";

export const FETCH_JOBS = "FETCH_JOBS";

export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const FILTER_JOBS_BY_ORGANIZAITONS = "FILTER_JOBS_BY_ORGANIZAITONS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganizations: [],
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
};

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOri = new Set();
    state.jobs.forEach((job) => uniqueOri.add(job.organization));
    return uniqueOri;
  },
  [FILTER_JOBS_BY_ORGANIZAITONS](state) {
    if (state.selectedOrganizations.length === 0) {
      return state.jobs;
    }
    return state.jobs.filter((job) =>
      state.selectedOrganizations.includes(job.organization)
    );
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
