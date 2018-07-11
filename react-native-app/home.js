import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import MapContainer from "./mapContainer.js";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      latitude: null,
      longitude: null,
      error: null
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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      error => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <MapContainer />
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
