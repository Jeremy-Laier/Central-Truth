import React, { Component } from 'react';
import { Text, Platform, Dimensions, View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class LocationScreen extends Component {
  state = {
    location: null,
    errorMessage: null,
    initialRegion: null,
    city: null,
  };

  componentDidMount() {
    this._getLocationAsync();
  }


  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
    let region = {
      latitude: parseFloat(location.coords.latitude),
      longitude: parseFloat(location.coords.longitude),
      latitudeDelta: 1,
      longitudeDelta: 1,
    };
    this.setState({
      initialRegion: region
    });

    let regionName = await Location.reverseGeocodeAsync( { longitude: region.longitude, latitude: region.latitude } );
    this.setState({
      city: regionName[0].city
    });
  };

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <MapView initialRegion={this.state.initialRegion} style={styles.mapStyle} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});