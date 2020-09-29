import { WeatherObserver, DisplayObservable } from "./observer-pattertn";

describe("calculate", function () {
  it("add", function () {
    const station = new WeatherObserver();
    const phone1 = new DisplayObservable(1);
    const phone2 = new DisplayObservable(2);

    station.add(phone1);
    station.add(phone2);
    station.notify();
    console.log("Phone 1", phone1.getState());
    console.log("Phone 2", phone2.getState());

    station.setNewState(9999);

    console.log("Phone 1", phone1.getState());
    console.log("Phone 2", phone2.getState());
  });
});
