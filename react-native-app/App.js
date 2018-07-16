import React from "react";
import DetailsScreen from "./detailsScreen";
import ContactScreen from "./contactScreen";
import HomeScreen from "./home.js";
import MapScreen from "./mapScreen";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Contact: ContactScreen,
    Map: MapScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
