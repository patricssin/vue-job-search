import axios from "axios";
jest.mock("axios");

import getJobs from "@/api/getJobs";

describe("getJobs", () => {
  beforeEach(() => {
    // axios.get.mockReturnValue(5);
    axios.get.mockResolvedValue({
      data: [{ id: 1, title: "FE Developer" }],
    });
  });
  it("fetches jobs that candidates can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });
  it("jobs from res", async () => {
    const data = await getJobs();
    expect(data).toEqual([{ id: 1, title: "FE Developer" }]);
  });
});
