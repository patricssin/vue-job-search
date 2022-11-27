import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");

import { useRouter } from "vue-router";
jest.mock("vue-router");

import { useUniqueJobTypes } from "@/store/composables";
jest.mock("@/store/composables");

import JobFiltersSidebarJobTypes from "@/component/JobResults/JobFiltersSidebarJobTypes";

describe("JobFiltersSidebarJobTypes", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  });

  it("renders unique list of job types for filtering jobs", async () => {
    useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));

    const warpper = mount(JobFiltersSidebarJobTypes, createConfig());
    const clickableArea = warpper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const jobTypeLabels = warpper.findAll("data-test='job-type']");
    const jobTypes = jobTypeLabels.map((node) => node.text());
    expect(jobTypes).toEqual(["Full-time", "Part-time"]);
  });

  describe("user click checkbox", () => {
    it("communicates that user has selected checkbox for job type", async () => {
      useUniqueJobTypes.mockReturnValue(new Set(["Full-time", "Part-time"]));
      const commit = jest.fn();
      useStore.mockReturnValue({ commit });
      useRouter.mockReturnValue({ push: jest.fn() });
      const warpper = mount(JobFiltersSidebarJobTypes, createConfig());
      const clickableArea = warpper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const fullTimeInput = warpper.find("data-test='Full-time']");
      fullTimeInput.setChecked();

      expect(commit).toHaveBeenCalledWith("ADD_SELECTED_JOB_TYPES", [
        "Full-time",
      ]);
    });
  });
});
