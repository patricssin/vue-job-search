import { mount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");
const useRouterMock = useRouter as jest.Mock;

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: "Some header",
      uniqueValues: new Set(["VA", "VB"]),
      mutation: "Some mutation",
      ...props,
    },
  });

  it("renders unique list of values", async () => {
    const warpper = mount(JobFiltersSidebarCheckboxGroup, createConfig({}));
    const clickableArea = warpper.find("[data-test='clickable-area']");
    await clickableArea.trigger("click");
    const inputTypeLabels = warpper.findAll("[data-test='value']");
    const inputValues = inputTypeLabels.map((node) => node.text());
    expect(inputValues).toEqual(["VA", "VB"]);
  });

  describe("user click checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();
      useStoreMock.mockReturnValue({ commit });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Full-time"]),
      };
      const warpper = mount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const clickableArea = warpper.find("[data-test='clickable-area']");
      await clickableArea.trigger("click");
      const fullTimeInput = warpper.find("[data-test='Full-time']");
      // fullTimeInput.setChecked();
      fullTimeInput.setValue(true);

      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Full-time"]);
    });
  });
});
