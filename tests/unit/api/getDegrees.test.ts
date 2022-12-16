import axios from "axios";
jest.mock("axios");

import getDegrees from "@/api/getDegrees";

const axisoMock = axios.get as jest.Mock;

describe("getDegrees", () => {
  beforeEach(() => {
    // axios.get.mockReturnValue(5);
    axisoMock.mockResolvedValue({
      data: [{ id: 1, degree: "Master's" }],
    });
  });
  it("fetches all possible degree require", async () => {
    await getDegrees();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/degrees");
  });
  it("degrees from res", async () => {
    const data = await getDegrees();
    expect(data).toEqual([{ id: 1, degree: "Master's" }]);
  });
});
