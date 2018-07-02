import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { createStackNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }
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
        <TextInput
          style={{ height: 40 }}
          label="Name:"
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
        />
        <Button
          title="Go To Details"
          onPress={() =>
            this.props.navigation.navigate("Details", { name: this.state.text })
          }
        />
      </View>
    );
  }
}
