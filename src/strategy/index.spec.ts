import { Duck, QuackStyleA, QuackStyleB } from "./";

describe("Strategy Pattern", function () {
  const dashedDuck = new Duck(new QuackStyleA());
  const atDuck = new Duck(new QuackStyleB());

  it("Should have a dashed quack", function () {
    expect(dashedDuck.whatDoesTheDuckSay()).toBe("The duck says Q-u-a-c-k-!");
  });

  it("Should have an @ quack", function () {
    expect(atDuck.whatDoesTheDuckSay()).toBe("The duck says Q@u@a@c@k@!");
  });
});
