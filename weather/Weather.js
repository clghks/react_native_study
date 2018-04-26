import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors : ["#00C6FB", "#005BEA"],
    title: "Raining like",
    subtitle: "For more info look outside",
    icon: "weather-rainy"
  },
  Clear: {
    colors : ["#FEF253", "#FF7300"],
    title: "Sunny like",
    subtitle: "Go get your ass burnt",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors : ["#00ECBC", "#007ADF"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the huse",
    icon: "weather-lightning"
  },
  Clouds: {
    colors : ["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "Clouds",
    icon: "weather-cloudy"
  },
  Snow: {
    colors : ["#7DE2FC", "#B986E5"],
    title: "Snow",
    subtitle: "Snow",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors : ["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "Drizzle",
    icon: "weather-hail"
  },
  Haze: {
    colors : ["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Haze",
    icon: "weather-windy"
  },
  Mist: {
    colors : ["#D7D2CC", "#304352"],
    title: "Mist",
    subtitle: "Mist",
    icon: "weather-fog"
  }
}

function Weather({ temp, weatherName, locationName }) {
  return (
      <LinearGradient
          colors={weatherCases[weatherName].colors}
          style={styles.container}
      >
          <View style={styles.upper}>
              <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon} />
              <Text style={styles.location}>{locationName}</Text>
              <Text style={styles.temp}>{temp}°</Text>
          </View>
          <View style={styles.lower}>
              <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
              <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
          </View>
      </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired,
  locationName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        marginTop: 20
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    location: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 15
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});
