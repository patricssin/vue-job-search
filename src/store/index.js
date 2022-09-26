import getJobs from "@/api/getJobs";
import { createStore } from "vuex";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";

export const FETCH_JOBS = "FETCH_JOBS";

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  };
};
export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true;
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
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
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
