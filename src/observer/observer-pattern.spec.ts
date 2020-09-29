import { WeatherObserver, DisplayObservable } from "./observer-pattern";

describe("Observer Pattern", function () {
  const station = new WeatherObserver();
  const phone1 = new DisplayObservable(1);
  const phone2 = new DisplayObservable(2);

  it("Should have initial state", function () {
    expect(phone1.getState().temperature).toBe(null);
    expect(phone2.getState().temperature).toBe(null);
  });

  it("Should add a observable", function () {
    station.add(phone1);
    station.add(phone2);

    expect(station.getList().length).toEqual(2);
  });

  it("Should notify all observables", function () {
    station.setNewState(34);
    station.notify();

    expect(phone1.getState().temperature).toBe(34);
    expect(phone2.getState().temperature).toBe(34);
  });

  it("Should remove a observable", function () {
    station.remove(2);

    expect(station.getList().length).toEqual(1);
  });
});
