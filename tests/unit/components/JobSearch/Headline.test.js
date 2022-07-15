import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import Headline from "@/components/JobSearch/Headline";

describe("Headline", () => {
  // describe("Jest playground", () => {
  //   it("tracks whether is has been called", () => {
  //     const mockFunc = jest.fn();
  //     expect(mockFunc).toHaveBeenCalled();
  //   });
  // });
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });
  afterEach(() => {
    jest.useRealTimers();
  });
  it("displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase'");
    expect(actionPhrase.text()).toBe("Build for everyone");

    jest.useRealTimers();
  });

  it("changes action verb at a consistent interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();

    jest.useRealTimers();
  });

  it("swap action verb after the first interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase'");
    expect(actionPhrase.text()).toBe("Create for everyone");

    jest.useRealTimers();
  });

  it("clear interval when disappears", async () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();

    jest.useRealTimers();
  });
});
