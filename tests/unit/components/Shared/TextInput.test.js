import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput";

describe("TextInput", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    console.log(wrapper.emitted());

    input.setValue("Test");
    console.log(wrapper.emitted());

    const messages = wrapper.emitted()["update:modelValue"];
    console.log(messages);
    expect(messages).toEqual([["Test"]]);
  });
});
