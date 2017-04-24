import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import { inject, observer } from "mobx-react/native";
import colors from "../config/colors";
import KeyboardAwareScrollView from "../components/KeyboardAwareScrollView";

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
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../assets/images/TeacherBookerLogo.png")}
          resizeMode="contain"
          style={{ height: 40, width: 300 }}
        />

        <Text style={{ fontSize: 16, marginBottom: 32 }}>
          What's your address?
        </Text>

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoFocus
          onChangeText={firstLine => {
            this.props.formStore.firstLine = firstLine;
          }}
          blurOnSubmit
          returnKeyType="next"
          value={this.props.formStore.firstLine}
          placeholder="First Line"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoFocus
          onChangeText={secondLine => {
            this.props.formStore.secondLine = secondLine;
          }}
          blurOnSubmit
          returnKeyType="next"
          value={this.props.formStore.secondLine}
          placeholder="Second Line"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoFocus
          onChangeText={town => {
            this.props.formStore.town = town;
          }}
          blurOnSubmit
          returnKeyType="next"
          value={this.props.formStore.town}
          placeholder="Town / City"
        />
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoFocus
          onChangeText={postCode => {
            this.props.formStore.postCode = postCode;
          }}
          blurOnSubmit
          returnKeyType="next"
          value={this.props.formStore.postCode}
          placeholder="Post Code"
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("GetPrefs")}
        >
          <View style={styles.button}>
            <Text style={styles.buttonLabel}>Next</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
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
