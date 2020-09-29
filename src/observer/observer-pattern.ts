interface IWeatherData {
  temperature: number | null;
}

interface IDisplay {
  readonly id: number;
  update: (state: IWeatherData) => void;
}

export class WeatherObserver {
  private observablesList: IDisplay[] = [];
  private state: IWeatherData = {
    temperature: null,
  };

  public add(observable: IDisplay) {
    this.observablesList.push(observable);
  }

  public remove(id: IDisplay["id"]) {
    this.observablesList = this.observablesList.filter(
      ({ id: obsId }) => id !== obsId
    );
  }

  public setNewState(temperature: number) {
    this.state = {
      ...this.state,
      temperature,
    };
    this.notify();
  }

  public getList() {
    return this.observablesList;
  }

  public notify() {
    this.observablesList.forEach((obs) => {
      obs.update(this.state);
    });
  }
}

export class DisplayObservable implements IDisplay {
  id;
  private state: IWeatherData = {
    temperature: null,
  };

  constructor(id: IDisplay["id"]) {
    this.id = id;
  }

  public update({ temperature }: IWeatherData) {
    this.state.temperature = temperature;
  }

  public getState() {
    return this.state;
  }
}

export const initObserver = () => {
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
};
