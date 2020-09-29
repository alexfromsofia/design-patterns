/**
 * The Strategy interface declares operations common to all supported versions
 * of some algorithm.
 *
 * The Context uses this interface to call the algorithm defined by Concrete
 * Strategies.
 */
interface Strategy {
  quack(quackSound: string): string;
}

export class Duck {
  /**
   * @type {Strategy} The Context maintains a reference to one of the Strategy
   * objects. The Context does not know the concrete class of a strategy. It
   * should work with all strategies via the Strategy interface.
   */
  private strategy: Strategy;

  /**
   * Usually, the Context accepts a strategy through the constructor, but also
   * provides a setter to change it at runtime.
   */
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Usually, the Context allows replacing a Strategy object at runtime.
   */
  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * The Context delegates some work to the Strategy object instead of
   * implementing multiple versions of the algorithm on its own.
   */
  public whatDoesTheDuckSay() {
    return `The duck says ${this.strategy.quack("Quack!")}`;
  }
}

/**
 * Concrete Strategies implement the algorithm while following the base Strategy
 * interface. The interface makes them interchangeable in the Context.
 */
export class QuackStyleA implements Strategy {
  public quack(quackSound: string): string {
    return quackSound.split("").join("-");
  }
}

export class QuackStyleB implements Strategy {
  public quack(quackSound: string): string {
    return quackSound.split("").join("@");
  }
}

export const initStrategy = () => {
  const dashedDuck = new Duck(new QuackStyleA());
  const atDuck = new Duck(new QuackStyleB());
  dashedDuck.whatDoesTheDuckSay();
  atDuck.whatDoesTheDuckSay();
};
