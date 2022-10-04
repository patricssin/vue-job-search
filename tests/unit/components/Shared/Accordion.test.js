import { mount } from "@vue/test-utils";

import Accordion from "@/components/Shared/Accordion.vue";

describe("Accordion", () => {
  it("render child", () => {
    const wrapper = mount(Accordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
      props: {
        header: "test header",
      },
      slots: {
        default: "<h3>my nested child</h3>",
      },
    });

    expect(wrapper.text()).not.toMatch("my nested chilD");
    const clickableArea = wrapper.find("[data-test='clickable-area'");
    clickableArea.trigger("click");

    expect(wrapper.text()).not.toMatch("my nested child");
  });
});
