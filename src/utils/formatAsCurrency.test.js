import formatAsCurrency from "./formatAsCurrency";

describe("Format as currency util", () => {
  test("formatAsCurrency # 1", () => {
    expect(formatAsCurrency(10524)).toBe("$ 10524");
  });

  test("formatAsCurrency", () => {
    expect(formatAsCurrency(120)).toBe("$ 120");
  });
});
