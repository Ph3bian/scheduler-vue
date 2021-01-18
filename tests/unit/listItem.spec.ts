import { shallowMount } from "@vue/test-utils";
import ListItem from "@/components/ListItem";

describe("ListItem.vue", () => {
  it("renders props.msg when passed", () => {
    const sites = [
      {
        title: "Test",
        images: ["testing"],
        address: { city: "Ikeja", country: "Nigeria" },
        contacts: { main },
        id: "345",
      },
    ];
    const wrapper = shallowMount(ListItem, {
      props: { sites },
    });
    expect(wrapper.text()).toMatch(sites);
  });
});
