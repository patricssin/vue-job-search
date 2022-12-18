import { shallowMount } from "@vue/test-utils";
jest.mock("vuex");
import JobFilterSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
jest.mock("@/store/composables");

describe("JobFiltersSidebar", () => {
  it("mount component", () => {
    const wrapper = shallowMount(JobFilterSidebar);
    expect(wrapper.exists()).toBe(true);
  });
});
