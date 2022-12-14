import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav.vue";
import { createStore } from "vuex";
import { GlobalState } from "@/store/types";

interface MockStore {
  state: Partial<GlobalState>;
}

describe("MainNav", () => {
  const createConfig = ($store: MockStore) => ({
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
    const store = {
      state: {
        isLoggedIn: false,
      },
    };

    const wrapper = shallowMount(MainNav, createConfig(store));
    expect(wrapper.text()).toMatch("Icebear Careers");
  });

  it("displays menu items for navigation", () => {
    const store = {
      state: {
        isLoggedIn: false,
      },
    };
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
      const store = {
        state: {
          isLoggedIn: false,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig(store));
      const btn = wrapper.find("[data-test='login-button']");
      expect(btn.exists()).toBe(true);
    });

    it("issue call vuex", async () => {
      const commit = jest.fn();
      const $store = {
        state: {
          isLoggedIn: false,
        },
        commit,
      };
      const wrapper = shallowMount(MainNav, createConfig($store));
      const loginBtn = wrapper.find("[data-test='login-button']");
      await loginBtn.trigger("click");

      expect(commit).toHaveBeenCalledWith("LOGIN_USER");
    });
  });

  describe("when user is logged in", () => {
    it("displays user profile pic", () => {
      const store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig(store));
      const img = wrapper.find("[data-test='profile-image']");
      expect(img.exists()).toBe(true);
    });

    it("displays subnavigatyion menu with additional info", () => {
      const store = {
        state: {
          isLoggedIn: true,
        },
      };
      const wrapper = shallowMount(MainNav, createConfig(store));
      const subnav = wrapper.find("[data-test='subnav']");

      expect(subnav.exists()).toBe(true);
    });
  });
});
