import { merge } from "../src/merge";

describe("merge", () => {
  it("should merge and sort correctly", () => {
    expect(merge([1, 3, 5], [9, 8, 7], [2, 4, 6])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
  });

  it("should handle empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [4, 3], [])).toEqual([3, 4]);
    expect(merge([], [], [5, 6])).toEqual([5, 6]);
    expect(merge([1, 2], [4, 3], [])).toEqual([1, 2, 3, 4]);
    expect(merge([], [6, 5], [7, 8])).toEqual([5, 6, 7, 8]);
    expect(merge([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  it("should handle duplicate", () => {
    expect(merge([1, 2, 2], [3, 2, 2], [3, 3, 4])).toEqual([
      1, 2, 2, 2, 2, 3, 3, 3, 4,
    ]);
  });
});
