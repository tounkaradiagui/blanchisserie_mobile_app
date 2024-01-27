import { ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Services = () => {
    const services = [
        {
            id:0,
            image: 'https://images.pexels.com/photos/5901622/pexels-photo-5901622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Lavage"
        },
        {
            id:2,
            image: 'https://images.pexels.com/photos/5901622/pexels-photo-5901622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Lavage"
        },
        {
            id:3,
            image: 'https://images.pexels.com/photos/5901622/pexels-photo-5901622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Lavage"
        },
        {
            id:4,
            image: 'https://images.pexels.com/photos/5901622/pexels-photo-5901622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Lavage"
        },
        {
            id:5,
            image: 'https://images.pexels.com/photos/5901622/pexels-photo-5901622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Lavage"
        },
        {
            id:6,
            image: 'https://images.pexels.com/photos/5901622/pexels-photo-5901622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            name: "Lavage"
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