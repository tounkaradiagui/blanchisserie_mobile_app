import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const DressItem = ({item}) => {
  return (
    <View style={styles.content}>
      <View>
         <Image style={{width:70, height:70}} source={{uri:item.image}}/>
      </View>
      <View>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productPrice}>{item.price}</Text>
      </View>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.button}>Ajouter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default DressItem

const styles = StyleSheet.create({
    content: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:15,
        borderBottomWidth:1,
        borderRadius:8,
        paddingVertical:15,
        backgroundColor:'#F8F8F8'
    },
    productName: {
        fontSize:16,
        width:80,
        fontWeight:'500',
        marginBottom:8
    },
    productPrice: {
        color:'gray',
        fontSize:15,
        width:70,
        
    },
    touch: {
        width:94,
        height:36,
        borderRadius:10,
        backgroundColor:"#E0115F",
    },
    button:{
        color:'#fff',
        marginTop:5,
        fontSize:16,
        alignSelf:'center',
        fontWeight:'bold'
    }
})