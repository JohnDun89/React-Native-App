import React from "react";
import MapContainer from "./mapContainer.js";

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MapContainer lng={this.props.longitude} lat={this.props.latitude} />
    );
  }
}

export default MapScreen;
