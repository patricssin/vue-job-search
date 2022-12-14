import { mount, RouterLinkStub, shallowMount } from "@vue/test-utils";

import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar.vue";
import { Job } from "@/api/types";
import { useUniqueJobTypes, useUniqueOrganizations } from "@/store/composables";
jest.mock("@/store/composables");
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock;
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock;

describe("JobFiltersSidebar", () => {
  it("allows user to filter jobs by job types", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));

    const wrapper = shallowMount(JobFilterSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='job-types-filter']"
    );
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Job Types");
    expect(uniqueValues).toEqual(new Set(["Full-time", "Part-time"]));
    expect(mutation).toBe("ADD_SELECTED_JOB_TYPES");
  });
  it("allows user to filter jobs by organizations", () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(["Full-time", "Part-time"]));
    useUniqueOrganizationsMock.mockReturnValue(new Set(["AirBnB"]));

    const wrapper = mount(JobFilterSidebar);
    const jobTypesFilter = wrapper.findComponent(
      "[data-test='organization-filter']"
    );
    const { header, uniqueValues, mutation } = jobTypesFilter.props();
    expect(header).toBe("Organizations");
    expect(uniqueValues).toEqual(new Set(["AirBnB"]));
    expect(mutation).toBe("ADD_SELECTED_ORGANIZATIONS");
  });
});
