import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import JobFilterSidebarOrganization from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganization.vue";
import { useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by organizations", () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));

    const wrapper = shallowMount(JobFilterSidebarOrganization);
    const jobTypesFilter = wrapper.findComponent({
      name: "JobFiltersSidebarCheckboxGroup",
    });
    const { uniqueValues, mutation } = jobTypesFilter.props();
    expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
