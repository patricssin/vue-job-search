import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";

describe("MainNav", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(MainNav, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
  });
  it("display company name", () => {
    expect(wrapper.text()).toMatch("Icebear Careers");
  });

  it("displays menu items for navigation", () => {
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Location",
      "Life at Icebear Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const btn = wrapper.find("[data-test='login-button']");
      expect(btn.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile pic", async () => {
      let img = wrapper.find("[data-test='profile-image']");
      expect(img.exists()).toBe(false);

      let btn = wrapper.find("[data-test='login-button']");
      await btn.trigger("click");
      img = wrapper.find("[data-test='profile-image']");
      btn = wrapper.find("[data-test='login-button']");
      expect(img.exists()).toBe(true);
      expect(btn.exists()).toBe(false);
    });

    it("displays subnavigatyion menu with additional info", async () => {
      let subnav = wrapper.find("[data-test='subnav']");

      expect(subnav.exists()).toBe(false);

      const btn = wrapper.find("[data-test='login-button']");
      await btn.trigger("click");
      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});
