import React from "react";
import MapContainer from "./mapContainer.js";
import PropTypes from "prop-types";

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

MapScreen.propTypes = {
  lng: PropTypes.number,
  lat: PropTypes.number
};

export default MapScreen;
