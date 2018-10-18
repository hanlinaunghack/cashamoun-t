describe("Always True", () => {
  it("should always be true", () => {
    expect(true).to.be.true;
  });
});

describe("expect the truth", () => {
  it("add double amount", () => {
    var cash = new Cash(10.5);
    cash.addDoubleAmount(29.33);
    expect(cash.toDouble()).to.eql(39.83);
  });
});

describe("expect the truth", () => {
  it("change to string", () => {
    var cash = new Cash(10.5);
    cash.addDoubleAmount(29.33);
    expect(cash.toDoubleString()).to.eql("39.83");
  });
});
