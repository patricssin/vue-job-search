import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/JobSearch/JobSearchForm";

describe("JobSearchForm", () => {
  describe("when user submites form", () => {
    it("directs user to job results page", async () => {
      const push = jest.fn();
      const $router = { push };

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });

      const roleinput = wrapper.find("[data-test='role-input']");
      await roleinput.setValue("Vue");

      const locationinput = wrapper.find("[data-test='location-input']");
      await locationinput.setValue("NY");

      const submitbutton = wrapper.find("[data-test='form-submit-button']");
      await submitbutton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Vue",
          location: "NY",
        },
      });
    });
  });
});
