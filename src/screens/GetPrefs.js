import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList
} from "react-native";
import { inject, observer } from "mobx-react/native";
import colors from "../config/colors";
import CheckBox from "../components/CheckBox";

@inject("formStore")
@observer
export default class GetAddress extends Component {
  static navigationOptions = {
    headerVisible: false
  };

  static propTypes = {
    formStore: PropTypes.object.isRequired
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/images/TeacherBookerLogo.png")}
          resizeMode="contain"
          style={{ marginVertical: 64, height: 40, width: 300 }}
        />
        <Text style={{ fontSize: 16, marginBottom: 32 }}>
          What year groups are you comfortable teaching?
        </Text>
        <FlatList
          columnWrapperStyle={{ flex: 0 }}
          horizontal={false}
          numColumns={2}
          data={Object.keys(this.props.formStore.groups).map(key => ({
            key,
            selected: this.props.formStore.groups[key]
          }))}
          renderItem={({ item }) => (
            <CheckBox
              onPress={() => {
                this.props.formStore.groups[item.key] = !this.props.formStore
                  .groups[item.key];
              }}
              label={item.key}
              selected={item.selected}
            />
          )}
        />
        <TouchableOpacity style={{ marginBottom: 32 }}>
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white"
  },
  input: {
    height: 40,
    borderColor: "gray",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 16
  },
  button: {
    backgroundColor: "#2667F6",
    paddingVertical: 16,
    paddingHorizontal: 80,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonLabel: {
    color: "white",
    fontSize: 16
  }
});
