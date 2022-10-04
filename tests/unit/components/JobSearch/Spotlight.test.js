import { mount } from "@vue/test-utils";

import axios from "axios";
jest.mock("axios");

import Spotlight from "@/components/JobSearch/Spotlight.vue";
describe("Spotlight", () => {
  const mockSpotlightResponse = (data = {}) => {
    axios.get.mockResolvedValue({
      data: [
        {
          img: "some img",
          title: "some title",
          description: "some description",
          ...data,
        },
      ],
    });
  };
  it("provides img attributo to parent component", () => {
    const data = { img: "some img" };
    mockSpotlightResponse({ data });
    const wrapper = mount(Spotlight, {
      slots: {
        default: `<template #default="slotProps">
          <h1>{{ slotProps.img }}</h1>
        </template>`,
      },
    });

    expect(wrapper.text()).toMatch("some image");
  });
});
