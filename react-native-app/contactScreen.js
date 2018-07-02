import React from "react";
import { View, Text, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

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
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

export default ContactScreen;
