import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import AboutPage from "~/pages/about.vue";

describe("AboutPage", () => {
  it("renders the about message", () => {
    const wrapper = mount(AboutPage);
    expect(wrapper.text()).toContain("About Us");
  });
});
