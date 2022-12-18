import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import JobFiltersSidebarDegree from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegree.vue";
import { useUniqueDegrees } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock;

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by degrees", () => {
    useUniqueDegreesMock.mockReturnValue(new Set(["Ph.D"]));

    const wrapper = shallowMount(JobFiltersSidebarDegree);
    const jobTypesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = jobTypesFilter.props();
    expect(uniqueValues).toEqual(new Set(["Ph.D"]));
    expect(mutation).toBe("ADD_SELECTED_DEGREES");
  });
});
