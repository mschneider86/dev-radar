import React, { useState, useEffect } from "react";
import { Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

import styles from "./styles";

function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -19.912139, longitude: -43.9291667 }}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars3.githubusercontent.com/u/26752887?s=460&u=fa07959ea62de89ac27111f2adc00c8dad21ebab&v=4",
          }}
        />

        <Callout
          onPress={() => {
            navigation.navigate("Profile", {
              github_username: "mschneider86 ",
            });
          }}
        >
          <View style={styles.callout}>
            <Text style={styles.devName}>Matheus Schneider</Text>
            <Text style={styles.devBio}>My bio</Text>
            <Text style={styles.devTechs}>React JS, React Native, NodeJS</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

export default Main;
