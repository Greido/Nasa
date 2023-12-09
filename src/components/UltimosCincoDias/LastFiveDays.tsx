import React, {FC} from "react";
import { View,Text, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImage";
const LastFiveDays : FC<{ postImages?:PostImageTypes[]}> = ({postImages}) =>{
    
    return(

        <View style={Styles.container}>
            <Text style={Styles.titulo}>Last 5 Days</Text>
        
            <ScrollView style={Styles.content}>
                {postImages ?.map(postImages=>(
                    <PostImage key={`post-images-${postImages.title}`}{...postImages}/>
                ))}
            </ScrollView>
        </View>



    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        marginVertical:16
    },
    titulo:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
        marginBottom:18
    },
    content:{
        paddingHorizontal:24,
    }
})

export default LastFiveDays;