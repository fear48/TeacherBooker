import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

export default props => (
  <TouchableOpacity
    onPress={props.onPress}
    style={{
      flexDirection: "row",
      alignItems: "center",
      marginRight: 32,
      marginBottom: 8
    }}
  >
    <View
      style={[
        {
          height: 24,
          width: 24,
          backgroundColor: "#D8D8D8",
          borderRadius: 4,
          borderColor: "#B1B1B1",
          borderWidth: 1,
          marginRight: 8
        },
        props.selected && { backgroundColor: "#77D14C" }
      ]}
    />
    <Text>{props.label}</Text>
  </TouchableOpacity>
);
