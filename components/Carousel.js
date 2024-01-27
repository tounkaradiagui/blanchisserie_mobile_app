import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/2517866/pexels-photo-2517866.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/45980/pexels-photo-45980.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4700383/pexels-photo-4700383.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/4700411/pexels-photo-4700411.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/298695/pexels-photo-298695.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        inactiveDotColor="#FFEE58"
        dotColor="#E0115F"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 10
        }}
        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
        imageLoadingColor="#E0115F"
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
