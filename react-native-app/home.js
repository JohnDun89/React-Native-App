import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { createStackNavigator } from "react-navigation";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

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
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.container}
          initialRegion={{
            latitude: 39.7392,
            longitude: -104.9903,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "80%",
    width: "100%"
  }
});
