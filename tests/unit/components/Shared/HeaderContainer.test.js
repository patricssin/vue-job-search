import { mount } from "@vue/test-utils";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "<h2>Some test title</h2>",
      },
    });

    expect(wrapper.text()).toMatch("Some test title");
  });
});
