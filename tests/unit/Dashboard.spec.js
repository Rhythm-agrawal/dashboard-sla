import { mount } from "@vue/test-utils";
import Dashboard from "@/components/Dashboard.vue";

describe("Dashboard", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Dashboard);
  });

  it("renders the component", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('shows 50 records on one page when "50" is selected in the dropdown', () => {
    // Change the dropdown value to 50
    wrapper.vm.perPage = 50;
    expect(wrapper.vm.paginationMeta.totalPages).toBe(22);
  });

  it('shows 100 records on one page when "100" is selected in the dropdown', () => {
    wrapper.vm.perPage = 100;
    expect(wrapper.vm.paginationMeta.totalPages).toBe(11);
  });

  it('shows 500 records on one page when "500" is selected in the dropdown', () => {
    wrapper.vm.perPage = 500;
    expect(wrapper.vm.paginationMeta.totalPages).toBe(3);
  });

  it('shows 1000 records on one page when "1000" is selected in the dropdown', () => {
    wrapper.vm.perPage = 1000;
    expect(wrapper.vm.paginationMeta.totalPages).toBe(2);
  });

  it("can toggle the product stats chart", async () => {
    await wrapper.vm.toggleProductsStatsChart();
    expect(wrapper.vm.showProductStats).toBe(true); // Ensure the chart is displayed.

    await wrapper.vm.toggleProductsStatsChart();
    expect(wrapper.vm.showProductStats).toBe(false); // Ensure the chart is hidden.
  });
});
