import { mount } from "@vue/test-utils";
import Subnav from "@/components/Navigation/Subnav.vue";

import { useFilteredJobs } from "@/store/composables";
import useConfirmRoute from "@/composables/useConfirmRoute";
jest.mock("@/composables/useConfirmRoute");
jest.mock("@/store/composables");

const useConfirmRouteMock = useConfirmRoute as jest.Mock;
const useFilteredJobsMock = useFilteredJobs as jest.Mock;

describe("Subnav", () => {
  describe("user on job page", () => {
    it("displays job count", () => {
      useConfirmRouteMock.mockReturnValue(true);
      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }]);

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
      useConfirmRouteMock.mockReturnValue(false);
      useFilteredJobsMock.mockReturnValue([]);

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
