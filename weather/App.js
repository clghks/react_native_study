import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Weather from "./Weather";

const API_KEY = "21ce8b4683a74a1b391a38fa41923c0d";

export default class App extends Component {
    state = {
        isLoaded: false,
        error: null,
        temperature: null,
        weatherName:null,
        locationName: null
    };

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this._getWeather(position.coords.latitude, position.coords.longitude);
        },
        error => {
          this.setState({
            error: error
          });
        }
      )
    }

    _getWeather = (lat, long) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json => {
        this.setState({
          temperature: json.main.temp,
          weatherName: json.weather[0].main,
          locationName: json.name,
          isLoaded: true
        })
      });
    }

    render() {
        const {isLoaded, error, temperature, weatherName, locationName } = this.state
        return (
            <View style={styles.container}>
                {isLoaded ? <Weather temp={Math.ceil(temperature - 273.15)} weatherName={weatherName} locationName={locationName}/> : (
                    <View style={styles.loading}>
                        <Text style={styles.loadingText}> Getting the weather</Text>
                        {error ? <Text style={styles.errorText}>{error}</Text> : null}
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    errorText: {
      color: "red",
      backgroundColor: "transparent",
      marginBottom: 40
    },
    loading: {
        flex: 1,
        backgroundColor: "#FDF6AA",
        justifyContent: "flex-end",
        paddingLeft: 25,
        paddingRight: 25
    },
    loadingText: {
        fontSize: 38,
        marginBottom: 100
    }
});
