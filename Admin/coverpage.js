import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TextInput,StyleSheet } from 'react-native';

 class coverpage extends Component {
    render() {
        return (
            <View style={styles.cover}>
                <Image style={styles.moneybag} source={require('./money-bag.png')} />
                <Text style={styles.name}><Text style={styles.M}>M</Text>ake<Text style={styles.M}>M</Text>oney</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
cover:{
    backgroundColor:'black',
    height:'100%'
   },
   moneybag:{
       position:'relative',
       top:'45%',
       width:120,
       height:120,
       left:'35%'
   },
   name:{
    color:'white',
    position:'relative',
    top:'44.5%',
    left:'36.5%',
    fontSize:20,
    fontFamily: "Times New Roman" 
   },
   M:{
       
       color:'yellow',
       fontFamily:'Times New Roman'
   }
});

export default coverpage

