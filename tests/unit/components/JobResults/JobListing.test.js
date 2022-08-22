import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  it("render job title", () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          title: "Vue",
        },
      },
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.text()).toMatch("Vue");
  });
});
