import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import ContactScreen from "./contactScreen.js";
import BackButton from "./backButton.js";

class DetailsScreen extends React.Component {
  static navigationOptions = {
    title: "Details",
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
        <Text>Details Screen</Text>
        <Text> User Name: {JSON.stringify(name)}</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />{" "}
        <Button
          title="Contact"
          onPress={() => this.props.navigation.navigate("Contact")}
        />
      </View>
    );
  }
}

export default DetailsScreen;
