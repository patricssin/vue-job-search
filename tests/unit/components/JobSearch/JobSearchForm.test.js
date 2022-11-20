import { mount } from "@vue/test-utils";
import { useRouter } from "vue-router";
import JobSearchForm from "@/components/JobSearch/JobSearchForm";

jest.mock("vue-router");

describe("JobSearchForm", () => {
  describe("when user submites form", () => {
    it("directs user to job results page", async () => {
      const push = jest.fn();
      useRouter.mockReturnValue({
        push,
      });

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
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
