import { mount } from "@vue/test-utils";
import Dashboard from "@/components/Dashboard.vue";

describe("Dashboard", () => {
  it("renders the component", () => {
    const wrapper = mount(Dashboard);
    expect(wrapper.exists()).toBe(true);
  });

  describe("Dashboard Component", () => {
    it("returns 'announced' CSS class for 'Announced' status", () => {
      const wrapper = mount(Dashboard);
      const statusClass = wrapper.vm.getStatusClass("Announced");
      expect(statusClass).toBe("announced");
    });

    it("returns 'launchedwithipu' CSS class for 'Launched (with IPU)' status", () => {
      const wrapper = mount(Dashboard);
      const statusClass = wrapper.vm.getStatusClass("Launched (with IPU)");
      expect(statusClass).toBe("launchedwithipu");
    });

    it("returns 'discontinued' CSS class for 'Discontinued' status", () => {
      const wrapper = mount(Dashboard);
      const statusClass = wrapper.vm.getStatusClass("Discontinued");
      expect(statusClass).toBe("discontinued");
    });

    it("returns 'launched' CSS class for 'Launched' status", () => {
      const wrapper = mount(Dashboard);
      const statusClass = wrapper.vm.getStatusClass("Launched");
      expect(statusClass).toBe("launched");
    });
  });

  it("changes the current page when clicking on pagination buttons", async () => {
    const wrapper = mount(Dashboard);
    const paginationButton = wrapper.find(".paginate_button");
    await paginationButton.trigger("click");
    const currentPage = wrapper.vm.currentPage;
    expect(currentPage).toBe(1); // Assuming the button click triggers a change to page 1
  });

  it('shows 50 records on one page when "50" is selected in the dropdown', () => {
    const wrapper = mount(Dashboard);
    // Change the dropdown value to 50
    wrapper.vm.perPage = 50;
    //  there are 1065 records in total
    const totalPages = wrapper.vm.paginationMeta.totalPages;
    expect(totalPages).toBe(22);
  });

  it('shows 100 records on one page when "100" is selected in the dropdown', () => {
    const wrapper = mount(Dashboard);
    // Change the dropdown value to 100
    wrapper.vm.perPage = 100;
    const totalPages = wrapper.vm.paginationMeta.totalPages;
    expect(totalPages).toBe(11);
  });

  it('shows 500 records on one page when "500" is selected in the dropdown', () => {
    const wrapper = mount(Dashboard);
    // Change the dropdown value to 500
    wrapper.vm.perPage = 500;

    const totalPages = wrapper.vm.paginationMeta.totalPages;
    expect(totalPages).toBe(3);
  });

  it('shows 1000 records on one page when "1000" is selected in the dropdown', () => {
    const wrapper = mount(Dashboard);
    // Change the dropdown value to 1000
    wrapper.vm.perPage = 1000;

    const totalPages = wrapper.vm.paginationMeta.totalPages;
    expect(totalPages).toBe(2);
  });
});
