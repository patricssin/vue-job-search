import { mount, flushPromises } from "@vue/test-utils";

import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";
describe("Spotlight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axios.get.mockResolvedValue({
      data: {
        img: "some img",
        title: "some title",
        description: "some description",
        ...data,
      },
    });
  };
  it("provides img attributo to parent component", async () => {
    const data = { img: "some image" };
    mockSpotlightResponse({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="{img, title, description}">
          <h1>{{ img }}</h1>
        </template>`,
      },
    });
    await flushPromises();
    expect(wrapper.text()).toMatch("some image");
  });
});
