import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import ContactPage from "~/pages/contact.vue";

describe("ContactPage", () => {
  it("renders the contact message", () => {
    const wrapper = mount(ContactPage);
    expect(wrapper.text()).toContain("Contact Us");
  });
});
