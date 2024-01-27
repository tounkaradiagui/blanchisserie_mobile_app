import {
  Text,
  View,
  SafeAreaView,
  Alert,
  Button,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import style from "../assets/styles/css/style.css";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";

const HomeScreen = () => {
  const [locationServicesEnabled, setlocationServicesEnabled] = useState(false);
  const [displayCurrentAddress, setdisplayCurrentAddress] = useState(
    "Votre localisation est en cours de chargement !"
  );

  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  const checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Localisation non activée",
        "Veuillez activer la localisation",
        [
          {
            text: "Annuler",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Ok", onPress: () => console.log("OK Pressed") },
        ]
      );
    } else {
      setlocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission non autoriser",
        "Autoriser l'application à utiliser votre localisation",
        [
          {
            text: "Annuler",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "Ok", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    const { coords } = await Location.getCurrentPositionAsync();
    console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      console.log(response);

      for (let item of response) {
        let address = `${item.name} ${item.city} ${item.region} ${item.timezone} ${item.postalCode}`;
        setdisplayCurrentAddress(address);
      }
    }
  };

  return (
    <SafeAreaView style={{backgroundColor:'#f0f0f0'}}>
      <View style={styles.header}>
        <Ionicons name="location-sharp" size={24} color="black" />
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>Adresse</Text>
          <Text>{displayCurrentAddress}</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={{ width: 40, height: 40, borderRadius: 50 }}
            source={{
              uri: "https://lh3.googleusercontent.com/ogw/ANLem4ZaxuFK6cYeU8VbjXOQe8dakcuP9PJZTr4OV8Q_hA=s32-c-mo",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchSection}>
        <TextInput placeholder="Rechercher un article" />
        <Ionicons name="search-sharp" size={24} color="black" />
      </View>
        <Carousel/>
        <Services/>
      <View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: "#E0115F",
        paddingHorizontal: 5,
        borderRadius: 30,
    },

    searchSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 30,
        marginTop: 10,
        backgroundColor:'#E0115F',
        borderRadius:10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical:8
    },
});
