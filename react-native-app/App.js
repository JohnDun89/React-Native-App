import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

class Greeting extends Component {
  render() {
    return <Text>Hello {this.props.name}!</Text>;
  }
}

export default class App extends Component {
  render() {
    let pic = {
      uri:
        "https://en.wikipedia.org/wiki/Q-Tip_(musician)#/media/File:Q-Tip_at_Commonwealth_Washington,_D.C._in_2008.jpg"
    };
    return (
      <View style={styles.container}>
        <Text>Hello old pal</Text>

        <Greeting name="Ali Shaheed Muhammad" />
        <Greeting name="Phife Dog" />
        <Greeting name="Q Tip" />
        <Button
          onPress={() => {
            Alert.alert("Lindon Bulivard Represent, Represent");
          }}
          title="Press Me"
        />
        <Button onPress={this.navigate} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
