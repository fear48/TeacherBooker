import { observable, action } from "mobx";

class FormStore {
  @observable firstLine = "";
  @observable secondLine = "";
  @observable town = "";
  @observable postCode = "";
  @observable groups = {
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
}

export default new FormStore();
