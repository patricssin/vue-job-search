import mutations from "@/store/mutations";
import { GlobalState } from "@/store/types";
import { Job } from "@/api/types";
import state from "@/store/state";

describe("mutations", () => {
  const createState = (config: Partial<GlobalState> = {}) => {
    const initialState = state();
    return { ...initialState, ...config };
  };

  const createJob = (config: Partial<Job> = {}): Job => ({
    id: 1,
    title: "Angular Developer",
    organization: "Vue and Me",
    degree: "Master's",
    jobType: "Intern",
    locations: ["Lisbon"],
    minimumQualifications: [],
    preferredQualifications: [],
    description: [],
    dateAdded: "2021-07-04",
    ...config,
  });

  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = createState({ isLoggedIn: false });
      mutations.LOGIN_USER(state);
      expect(state.isLoggedIn).toBe(true);
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from API response", () => {
      const state = createState({ jobs: [] });
      const jobOne = createJob();
      const jobTwo = createJob();
      mutations.RECEIVE_JOBS(state, [jobOne, jobTwo]);
      expect(state.jobs).toEqual([jobOne, jobTwo]);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations that the user has chosen to filter jobs by", () => {
      const state = createState({ selectedOrganizations: [] });
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["Org1", "Org2"]);
      expect(state.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types that the user has chosen to filter jobs by", () => {
      const state = createState({ selectedJobTypes: [] });
      mutations.ADD_SELECTED_JOB_TYPES(state, ["Full-time", "Part-time"]);
      expect(state.selectedJobTypes).toEqual(["Full-time", "Part-time"]);
    });
  });
});
