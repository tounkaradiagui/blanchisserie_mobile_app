import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Services = () => {
    const services = [
        {
            id:0,
            image: 'https://cdn-icons-png.flaticon.com/128/8331/8331476.png',
            name: "Lavage"
        },
        {
            id:2,
            image: 'https://images.pexels.com/photos/8774444/pexels-photo-8774444.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Machine"
        },
        {
            id:3,
            image: 'https://images.pexels.com/photos/4376052/pexels-photo-4376052.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Répassage"
        },
        {
            id:4,
            image: 'https://images.pexels.com/photos/4386143/pexels-photo-4386143.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: "Lavage"
        },
        {
            id:5,
            image: 'https://images.pexels.com/photos/5202799/pexels-photo-5202799.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            name: "Fer à répasser"
        },
        {
            id:6,
            image: 'https://images.pexels.com/photos/7641396/pexels-photo-7641396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Fer"
        },
    ]
  return (
    <View>
        <Text style={{fontSize:16, fontWeight:'500', marginTop:7, marginLeft:10}}>Services disponible</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {services.map((service, index) => (
                <TouchableOpacity style={{margin:10, padding:8, borderRadius:10, backgroundColor:'white'}} key={index}>
                    <Image source={{uri:service.image}} style={{width:70, height:70}} />
                    <Text style={{textAlign:'center', marginTop:5}}>{service.name}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    </View>
  )
}

export default Services

const styles = StyleSheet.create({})