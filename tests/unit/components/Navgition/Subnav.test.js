import { mount } from "@vue/test-utils";

import Subnav from "@/components/Navigation/Subnav";

describe("Subnav", () => {
  describe("user on job page", () => {
    it("displays job content", () => {
      const $route = { name: "JobResults" };
      const warpper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const jobCount = warpper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });
  describe("user is not on job page", () => {
    it("not displays job content", () => {
      const $route = { name: "Home" };

      const warpper = mount(Subnav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const jobCount = warpper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
