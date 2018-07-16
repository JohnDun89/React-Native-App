import React from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  MapView,
  Dimensions,
  StatusBarIOS
} from "react-native";
import MapV, { PROVIDER_GOOGLE } from "react-native-maps";
import CustomMap from "./mapStyle.js";

let { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      region: {
        routeCoordinates: [],
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          routeCoordinates: [],
          region: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }
        });
      },
      error => console.log(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      this.setState({
        region: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA
        }
      });
    });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    return (
      <MapV
        provider={PROVIDER_GOOGLE}
        style={styles.container}
        customMapStyle={CustomMap}
        showsUserLocation={true}
        followUserLocation={true}
        region={this.state.region}
        onRegionChangeComplete={region => this.setState({ region })}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "60%",
    width: "100%"
  }
});

export default MapContainer;

// latitude: 39.7392,
// longitude: -104.9903,
