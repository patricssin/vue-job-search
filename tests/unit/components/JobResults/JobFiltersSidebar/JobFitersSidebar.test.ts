import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
jest.mock("@/store/composables");

import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRoute } from "vue-router";
jest.mock("vue-router");
const useRouteMock = useRoute as jest.Mock;

describe("JobFiltersSidebar", () => {
  it("mount component", () => {
    useStoreMock.mockReturnValue({ commit: jest.fn() });
    useRouteMock.mockReturnValue({
      query: {},
    });
    const wrapper = shallowMount(JobFilterSidebar);
    expect(wrapper.exists()).toBe(true);
  });
  it("reads query params to filter init jobs for user", () => {
    const commit = jest.fn();
    useStoreMock.mockReturnValue({ commit });
    useRouteMock.mockReturnValue({
      query: {
        role: "Vue",
      },
    });
    const wrapper = shallowMount(JobFilterSidebar);
    expect(commit).toHaveBeenCalledWith("UPDATE_SKILL_SEARCH_TERM", "Vue");
  });
});
