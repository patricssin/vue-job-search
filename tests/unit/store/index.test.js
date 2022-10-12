import { state, getters, mutations, actions } from "@/store";
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

describe("state", () => {
  it("keeps track of whether user is loggin in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });
  it("job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });
});

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });
  describe("RECEIVE_JOBS", () => {
    it("receive jobs from api res", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["job 1"]);
      expect(state).toEqual({ jobs: ["job 1"] });
    });
  });
  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("update organizations that user has chosen to filter jobs", () => {
      const state = { selectedOrganizations: [] };
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ["org 1"]);
      expect(state).toEqual({ selectedOrganizations: ["org 1"] });
    });
  });
});

describe("getters", () => {
  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique orignizations from list of jobs", () => {
      const state = {
        jobs: [
          { organization: "Google" },
          { organization: "Amazon" },
          { organization: "Google" },
        ],
      };

      const result = getters.UNIQUE_ORGANIZATIONS(state);
      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });
});

describe("actions", () => {
  describe("fetchjobs", () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });

    it("make req to fetch jobs", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(getJobs).toHaveBeenCalled();
    });

    it("send msg to save received jobs in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          title: "Software Developer",
        },
      ]);
    });
  });
});
