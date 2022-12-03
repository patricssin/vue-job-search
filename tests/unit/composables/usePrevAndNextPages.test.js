import usePrevAndNextPages from "@/composables/usePrevAndNextPages";

describe("usePrevAndNextPages", () => {
  it("calculate page before current one", () => {
    const currentPage = { value: 8 };
    const maxPage = { value: 10 };
    const { previousPage } = usePrevAndNextPages(currentPage, maxPage);
    expect(previousPage.value).toBe(7);
  });

  describe("when current page is the first page", () => {
    it("does note provide prev page", () => {
      const currentPage = { value: 1 };
      const maxPage = { value: 1 };
      const { previousPage } = usePrevAndNextPages(currentPage, maxPage);
      expect(previousPage.value).toBeUndefined();
    });
    it("calculates page after current one", () => {
      const currentPage = { value: 8 };
      const maxPage = { value: 10 };
      const { nextPage } = usePrevAndNextPages(currentPage, maxPage);
      expect(nextPage.value).toBe(9);
    });
  });
  describe("when current page is the last page", () => {
    it("does note provide last page", () => {
      const currentPage = { value: 8 };
      const maxPage = { value: 8 };
      const { nextPage } = usePrevAndNextPages(currentPage, maxPage);
      expect(nextPage.value).toBeUndefined();
    });
  });
});
