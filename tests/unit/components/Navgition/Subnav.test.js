import { mount } from "@vue/test-utils";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Subnav from "@/components/Navigation/Subnav";

jest.mock("vuex");
jest.mock("vue-router");

describe("Subnav", () => {
  describe("user on job page", () => {
    it("displays job count", () => {
      useRoute.mockReturnValue({
        name: "JobResults",
      });
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      });

      const warpper = mount(Subnav, {
        global: {
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
      useRoute.mockReturnValue({
        name: "Home",
      });
      // useStore.mockReturnValue({
      //   getters: {
      //     FILTERED_JOBS: [],
      //   },
      // });

      const warpper = mount(Subnav, {
        global: {
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
