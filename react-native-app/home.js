import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import MapContainer from "./mapContainer.js";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
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
        <MapContainer lng={this.state.longitude} lat={this.state.latitude} />
        <TextInput
          style={{ height: 40 }}
          returnKeyType="done"
          placeholder="Name"
          onChangeText={text => this.setState({ text })}
        />
        <Button
          title="Go To Details"
          onPress={() =>
            this.props.navigation.navigate("Details", { name: this.state.text })
          }
        />
        <Text>
          latitude {this.state.latitude}
          longitude {this.state.longitude}
        </Text>
      </View>
    );
  }
}
