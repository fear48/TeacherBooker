import React, { Component } from "react";
import { Provider as MobXProvider } from "mobx-react/native";
import formStore from "./stores/FormStore";
import RootStack from "./navigation/RootStack";

export default class App extends Component {
  render() {
    return (
      <MobXProvider {...{ formStore }}>
        <RootStack />
      </MobXProvider>
    );
  }
}
