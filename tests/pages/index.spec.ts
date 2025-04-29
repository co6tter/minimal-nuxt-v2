import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import IndexPage from "~/pages/index.vue";

describe("IndexPage", () => {
  it("renders the welcome message", () => {
    const wrapper = mount(IndexPage);
    expect(wrapper.text()).toContain("Welcome to Our Company");
  });
});
