import React,{FC} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native'
import { PostImage } from '../../types';

const ImagenDelDia: FC<PostImage> =({date,title,url})=>{
    return(
            <View style={Styles.Container}>
                <View>
                    <Image source={{uri:url}} style={Styles.image}/>
                </View>
                <Text style={Styles.title}>{title}</Text>
                <Text style={Styles.date}>{date}</Text>   
                <View style={Styles.btnContainer}>
                    <Button title='View More'/>
                </View> 
            </View>
    );
}

const Styles = StyleSheet.create({
    Container:{
        backgroundColor:"rgb(54,77,105)",
        marginVertical:16,
        borderRadius:32,
        padding:16,
        marginHorizontal:24
    },
    image:{
        width:"100%",
        height:190,
        borderWidth:4,
        borderColor:'#fff',
        borderRadius:32
    },
    title:{
        color:"#fff",
        fontSize:20,
        marginVertical:12,
        fontWeight:'bold'
    },
    date:{
        color:'#fff',
        fontSize:16
    },
    btnContainer:{
        alignItems:'flex-end'
    }
})

export default ImagenDelDia;