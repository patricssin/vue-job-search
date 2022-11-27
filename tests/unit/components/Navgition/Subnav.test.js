import { mount } from "@vue/test-utils";
import Subnav from "@/components/Navigation/Subnav";
import useConfirmRoute from "@/composables/useConfirmRoute";
import { useFilteredJobs } from "@/store/composables";

jest.mock("@/composables/useConfirmRoute");
jest.mock("@/store/composables");
jest.mock("vuex");

describe("Subnav", () => {
  describe("user on job page", () => {
    it("displays job count", () => {
      useConfirmRoute.mockReturnValue(true);
      useFilteredJobs.mockReturnValue([{ id: 1 }, { id: 2 }]);

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
      useConfirmRoute.mockReturnValue(false);
      useFilteredJobs.mockReturnValue([]);

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
