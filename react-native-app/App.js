import React from "react";
import DetailsScreen from "./detailsScreen";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go To Details"
          onPress={() =>
            this.props.navigation.navigate("Details", { name: "John" })
          }
        />
      </View>
    );
  }
}

class ContactScreen extends React.Component {
  static navigationOptions = {
    title: "Contact",
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  };
  render() {
    const { navigation } = this.props;
    const name = navigation.getParam("name", "No Name");
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Contact Screen</Text>
        <Text> 0789 66 00398</Text>

        <Button
          title="Go back"
          onPress={() => this.props.navigation.navigate("Homegit")}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Contact: ContactScreen
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
