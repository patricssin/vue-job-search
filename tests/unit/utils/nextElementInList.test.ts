import nextElementInList from "@/utils/nextElementInList.";

describe("nextElementInList", () => {
  it("", () => {
    const list = ["A", "B"];
    const value = "A";
    const result = nextElementInList<string>(list, value);
    expect(result).toBe("B");
  });
});
