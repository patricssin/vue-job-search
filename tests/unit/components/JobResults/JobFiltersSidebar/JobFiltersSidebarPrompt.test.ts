import { mount } from "@vue/test-utils";
jest.mock("vuex");
import JobFiltersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

describe("JobFiltersSidebar", () => {
  describe("click the clear button", () => {
    it("send message to clear all filters", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });

      const wrapper = mount(JobFiltersSidebarPrompt);
      const button = wrapper.find("[data-test='clear-user-job-filters'");
      await button.trigger("click");
      expect(commit).toHaveBeenCalledWith("CLEAR_USER_JOB_FILTER_SELECTIONS");
    });
  });
});
