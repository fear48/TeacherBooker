import { StackNavigator } from "react-navigation";
import GetAddress from "../screens/GetAddress";
import GetPrefs from "../screens/GetPrefs";

export default StackNavigator(
  {
    GetAddress: {
      screen: GetAddress,
      headerVisible: false
    },
    GetPrefs: {
      screen: GetPrefs,
      headerVisible: false
    }
  },
  {
    headerMode: "screen",
    initialRouteName: "GetAddress"
  }
);
