import { mount } from "@vue/test-utils";
import Table from "@/components/Table";

describe("<Table /> component", () => {
  it("renders component correctly to DOM", () => {
    const wrapper = mount(Table);
    expect(wrapper.exists()).toBe(true);
  });
});
