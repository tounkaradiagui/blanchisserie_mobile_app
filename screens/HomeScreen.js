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
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import style from "../assets/styles/css/style.css";
import { Ionicons } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import DressItem from "../components/DressItem";
import { StatusBar } from "expo-status-bar";

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

  const services = [
    {
      id: 0,
      image: 'https://cdn-icons-png.flaticon.com/128/343/343285.png',
      name: "T-Shirt",
      qty: 0,
      price: '500 F CFA'
    },
    {
      id: 1,
      image: 'https://cdn-icons-png.flaticon.com/128/11070/11070035.png',
      name: "Chemise",
      qty: 0,
      price: '500 F CFA'
    },
    {
      id: 2,
      image: 'https://cdn-icons-png.flaticon.com/128/817/817273.png',
      name: "Lacost",
      qty: 0,
      price: '750 F CFA'
    },
    {
      id: 3,
      image: 'https://cdn-icons-png.flaticon.com/128/2806/2806182.png',
      name: "Pantalon",
      qty: 0,
      price: '1000 F CFA'
    },
    {
      id: 4,
      image: 'https://cdn-icons-png.flaticon.com/128/2149/2149715.png',
      name: "Jeans",
      qty: 0,
      price: '1000 F CFA'
    },
    {
      id: 5,
      image: 'https://cdn-icons-png.flaticon.com/128/12883/12883364.png',
      name: "Jogging",
      qty: 0,
      price: '850 F CFA'
    },
  ]

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor:'#f0f0f0'}}>
      <StatusBar backgroundColor="#E0115F" style="light"/>
      {/* Header content */}
      <View style={styles.header}>
        <Ionicons name="location-sharp" size={24} color="black" />
        <View>
          {/* <Text >Adresse</Text> */}
          <Text style={{ fontSize: 15, fontWeight: "400" }}>{displayCurrentAddress}</Text>
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
      {/* Search box */}
      <View style={styles.searchSection}>
        <TextInput placeholder="Rechercher un article" />
        <Ionicons name="search-sharp" size={24} color="black" />
      </View>
      {/* Carousel */}
      <Carousel/>
      {/* Services */}
      <Services/>
      {/* Products list */}
      {services.map((item, index) => (
        <DressItem item={item} key={index} />
      ))}
      <View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 7,
        marginTop: 15,
        backgroundColor: "#E0115F",
        paddingHorizontal: 5,
        borderRadius: 30,
        paddingVertical:1
    },

    searchSection: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 7,
        marginTop: 10,
        backgroundColor:'#E0115F',
        borderRadius:10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingVertical:8
    },
});
