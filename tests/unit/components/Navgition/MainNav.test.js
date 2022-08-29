import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";
import { createStore } from "vuex";

describe("MainNav", () => {
  const createConfig = ($store) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("display company name", () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
    expect(wrapper.text()).toMatch("Icebear Careers");
  });

  it("displays menu items for navigation", () => {
    const store = createStore();
    const wrapper = shallowMount(MainNav, createConfig(store));
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
      const store = createStore();
      const wrapper = shallowMount(MainNav, createConfig(store));
      const btn = wrapper.find("[data-test='login-button']");
      expect(btn.exists()).toBe(true);
    });

    it("issue call vuex", async () => {
      const store = createStore();
      const commit = jest.fn();
      store.commit = commit;
      const wrapper = shallowMount(MainNav, createConfig(store));
      const loginBtn = wrapper.find("[data-test='login-button']");
      await loginBtn.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile pic", () => {
      const store = createStore({
        state() {
          return {
            isLoggedIn: true,
          };
        },
      });
      const wrapper = shallowMount(MainNav, createConfig(store));
      let img = wrapper.find("[data-test='profile-image']");
      expect(img.exists()).toBe(true);
    });

    it("displays subnavigatyion menu with additional info", () => {
      const store = createStore();
      const wrapper = shallowMount(MainNav, createConfig(store));
      let subnav = wrapper.find("[data-test='subnav']");

      expect(subnav.exists()).toBe(false);
    });
  });
});
