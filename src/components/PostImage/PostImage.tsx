import React, { FC } from "react";
import { View,Text, StyleSheet, Button } from "react-native";
import { PostImage as PostImageTypes} from "../../types";

const PostImage : FC<PostImageTypes> = ({title,date}) =>{

    return(
        <View style={Styles.constainer}>
            <Text style={Styles.titulo}>{title}</Text>
            <Text style={Styles.date}>{date}</Text>
            <View style={Styles.btnCont}>
                <Button title="View"/>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    constainer:{
        backgroundColor:'rgba(18,39,113,255)',
        borderRadius:20,
        marginBottom:12,
        padding:16
    },
    titulo:{
        color:'#fff',
        fontSize:18,
        fontWeight:"bold",
        marginBottom:12,
    },
    date:{
        color:'#fff'

    },
    btnCont:{
        alignItems:'flex-end'
    }
})

export default PostImage;