import { mount, flushPromises } from "@vue/test-utils";

import axios from "axios";
jest.mock("axios");

const axiosMock = axios.get as jest.Mock;

import Spotlight from "@/components/JobSearch/Spotlight.vue";
describe("Spotlight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axiosMock.mockResolvedValue({
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
