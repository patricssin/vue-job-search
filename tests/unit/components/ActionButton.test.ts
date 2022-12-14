import { mount } from "@vue/test-utils";

import ActionButton from "@/components/Shared/ActionButton.vue";

describe("ActionButton", () => {
  it("render text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Im clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Im clickable");
  });
  it("apply one style on btn", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
        text: "im clickable",
      },
    });
    //  find the first button
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
