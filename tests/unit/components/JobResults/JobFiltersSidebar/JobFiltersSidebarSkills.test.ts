import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

describe("JobFiltersSidebarSkills", () => {
  it("pupulates search input from store", () => {
    useStoreMock.mockReturnValue({
      state: {
        skillsSearchTerm: "Programmer",
      },
      commit: jest.fn(),
    });
    const wrapper = shallowMount(JobFiltersSidebarSkills);
    const skillSearchInput = wrapper.find("[data-test='skills-search-input']");
    const inputElement = skillSearchInput.element as HTMLInputElement;
    expect(inputElement.value).toBe("Programmer");
  });
  it("tells store that user enter search term", async () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({
      state: {
        skillsSearchTerm: "Programmer",
      },
      commit,
    });
    const wrapper = shallowMount(JobFiltersSidebarSkills);
    const skillSearchInput = wrapper.find("[data-test='skills-search-input']");
    await skillSearchInput.setValue("Vue");

    expect(commit).toHaveBeenCalledWith("UPDATE_SKILL_SEARCH_TERM", "Vue");
  });
});
