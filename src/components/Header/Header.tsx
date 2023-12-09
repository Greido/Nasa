import React from "react";
import { View, Text, Image,StyleSheet } from "react-native";

const Header = () =>{

    return(
        <View style={Styles.container}>
            <View style={Styles.leftContainer}>

                <Text style={Styles.titulo}>Explore</Text>
            </View>
            <View style={Styles.rigthContainer}>  
                <Image source={require('../../assets/nasa.png')} style={Styles.image}/>
            </View>
        </View>
    );

}

const Styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:'center'
    },
    leftContainer:{
        flex:1,
        alignItems:"flex-start"
    },
    rigthContainer:{
        flex:1,
        alignItems:'flex-end'
    },
    titulo:{
        fontSize:20,
        color:'white'
    },
    image:{
        width:60,
        height:60
    }


})


export default Header;