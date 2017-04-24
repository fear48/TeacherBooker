import { observable, action } from "mobx";
import { create, persist } from "mobx-persist";
import { AsyncStorage } from "react-native";

class FormStore {
  @persist
  @observable
  firstLine = "";

  @persist
  @observable
  secondLine = "";

  @persist
  @observable
  town = "";

  @persist
  @observable
  postCode = "";

  @persist("object")
  @observable
  groups = {
    Nursery: false,
    Reception: false,
    "Year 1": false,
    "Year 2": false,
    "Year 3": false,
    "Year 4": false,
    "Year 5": false,
    "Year 6": false,
    "Year 7": false,
    "Year 8": false,
    "Year 9": false,
    "Year 10": false,
    "Year 11": false,
    "Year 12": false,
    "Year 13": false
  };

  constructor() {
    this.hydrate();
  }

  @action hydrate = () => {
    const pour = create({
      storage: AsyncStorage
    });

    Object.keys(this).forEach(key => {
      pour(key, this);
    });
  };
}

export default new FormStore();
