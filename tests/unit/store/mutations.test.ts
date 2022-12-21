import mutations from "@/store/mutations";

import { createDegree, createJob, createState } from "./utils";

describe("mutations", () => {
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

  describe("RECEIVE_DEGREES", () => {
    it("receives degrees from API response", () => {
      const state = createState({ degrees: [] });
      const degreeOne = createDegree();
      mutations.RECEIVE_DEGREES(state, [degreeOne]);
      expect(state.degrees).toEqual([degreeOne]);
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

  describe("ADD_SELECTED_DEGREES", () => {
    it("updates degrees that the user has chosen to filter jobs by", () => {
      const state = createState({ selectedDegrees: [] });
      mutations.ADD_SELECTED_DEGREES(state, ["Master's", "Bachelor's"]);
      expect(state.selectedDegrees).toEqual(["Master's", "Bachelor's"]);
    });
  });

  describe("UPDATE_SKILL_SEARCH_TERM", () => {
    it("reveices search term for skills the user has", () => {
      const state = createState({ skillsSearchTerm: "" });
      mutations.UPDATE_SKILL_SEARCH_TERM(state, "Vue");
      expect(state.skillsSearchTerm).toEqual("Vue");
    });
  });

  describe("CLEAR_USER_JOB_FILTER_SELECTIONS", () => {
    it("remove all filters", () => {
      const state = createState({
        selectedDegrees: ["radom selected degrees"],
        selectedOrganizations: ["radom selected degrees"],
        selectedJobTypes: ["radom selected degrees"],
        skillsSearchTerm: "radom skill",
      });
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(state);
      expect(state.selectedDegrees).toEqual([]);
      expect(state.selectedOrganizations).toEqual([]);
      expect(state.selectedJobTypes).toEqual([]);
      expect(state.skillsSearchTerm).toBe("");
    });
  });
});
