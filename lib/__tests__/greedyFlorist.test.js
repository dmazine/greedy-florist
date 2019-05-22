const getMinimumCost = require("../index.js");

describe("greedyFlorist", () => {
  it("test case 1", () => {
    const k = 3;
    const c = [2, 5, 6];

    expect(getMinimumCost(k, c)).toBe(13);
  });

  it("test case 2", () => {
    const k = 2;
    const c = [2, 5, 6];

    expect(getMinimumCost(k, c)).toBe(15);
  });

  it("test case 3", () => {
    const k = 3;
    const c = [1, 3, 5, 7, 9];

    expect(getMinimumCost(k, c)).toBe(29);
  });
});
