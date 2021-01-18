import { shallowMount, mount } from "@vue/test-utils";
import ListItem from "@/components/ListItem";

describe("ListItem.vue", () => {
  it("renders component correctly to DOM", () => {
    const wrapper = mount(ListItem);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders props.sites when passed", () => {
    const sites = [
      {
        title: "Test",
        images: ["testing"],
        address: { city: "Ikeja", country: "Nigeria" },
        contacts: { main: { firstName: "Phebian", lastName: "Chukwurah" } },
        id: "345"
      }
    ];
    const wrapper = shallowMount(ListItem, {
      props: { sites }
    });
    const title = wrapper.find("h2");
    expect(title.text()).toContain(sites[0].title);
  });
  
});
