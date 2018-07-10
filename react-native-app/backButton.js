import React, { Component } from "react";
import { View, Text, Button, TextInput } from "react-native";

class BackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

export default BackButton;
