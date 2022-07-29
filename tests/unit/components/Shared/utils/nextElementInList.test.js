import nextElementInList from "@/utils/nextElementInList.";

describe("nextElementInList", () => {
  it("locates ele in list and return next ele", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });
});
