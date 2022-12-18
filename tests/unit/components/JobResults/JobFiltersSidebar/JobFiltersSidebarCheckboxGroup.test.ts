import { shallowMount } from "@vue/test-utils";
import { useStore } from "vuex";
jest.mock("vuex");
const useStoreMock = useStore as jest.Mock;

import { useRouter } from "vue-router";
jest.mock("vue-router");
const useRouterMock = useRouter as jest.Mock;

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createConfig = (props = {}) => ({
    props: {
      uniqueValues: new Set(["VA", "VB"]),
      mutation: "Some mutation",
      ...props,
    },
  });

  it("renders unique list of values", async () => {
    // each item should have a usestore return with subscribe
    useStoreMock.mockReturnValue({ commit: jest.fn(), subscribe: jest.fn() });

    const warpper = shallowMount(
      JobFiltersSidebarCheckboxGroup,
      createConfig({})
    );
    const inputTypeLabels = warpper.findAll("[data-test='value']");
    const inputValues = inputTypeLabels.map((node) => node.text());
    expect(inputValues).toEqual(["VA", "VB"]);
  });

  describe("user click checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      const commit = jest.fn();
      const subscribe = jest.fn();
      useStoreMock.mockReturnValue({ commit, subscribe });
      useRouterMock.mockReturnValue({ push: jest.fn() });
      const props = {
        mutation: "SOME_MUTATION",
        uniqueValues: new Set(["Full-time"]),
      };
      const warpper = shallowMount(
        JobFiltersSidebarCheckboxGroup,
        createConfig(props)
      );
      const fullTimeInput = warpper.find("[data-test='Full-time']");
      // fullTimeInput.setChecked();
      fullTimeInput.setValue(true);
      expect(commit).toHaveBeenCalledWith("SOME_MUTATION", ["Full-time"]);
    });
  });
});
