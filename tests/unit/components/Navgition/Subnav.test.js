import { mount } from "@vue/test-utils";

import Subnav from "@/components/Navigation/Subnav";

describe("Subnav", () => {
  describe("user on job page", () => {
    it("displays job count", () => {
      const $route = { name: "Home" };
      const $store = {
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };

      const warpper = mount(Subnav, {
        global: {
          mocks: {
            $route,
            $store,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const jobCount = warpper.find("[data-test='job-count']");
      expect(jobCount.text()).toBe("2 jobs matched");
    });
  });
  describe("user is not on job page", () => {
    it("not displays job content", () => {
      const $route = { name: "Home" };
      const $store = {
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      };

      const warpper = mount(Subnav, {
        global: {
          mocks: {
            $route,
            $store,
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
