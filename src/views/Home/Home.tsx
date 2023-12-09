import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import fetchApi from '../../utils/fetch'
import ImagenDelDia from "../../components/ImagenDelDia";
import LastFiveDays from "../../components/UltimosCincoDias/LastFiveDays";
import { PostImage } from "../../types";
import { format,sub } from "date-fns";

const Home =  () =>{
    const [picDelDia, setPicDelDia] = useState<PostImage>({});
    const [ultimasCincoPic, setUltimasCincoPic] = useState<PostImage[]>([])

    useEffect(()=>{

        const imagenDelDia = async () => {
            try{
                const todaysImage = await fetchApi()
                setPicDelDia(todaysImage)
            }catch(error){
                console.log(error)
                setPicDelDia({})
            }
        };


        const last5Days = async () =>{
            try{
                const date = new Date();
                const today = format(date, 'yyyy-MM-dd')
                const fiveAgo = format(sub(date,{days:5}), 'yyyy-MM-dd')

                const ultimosCincoPicsResponse = await fetchApi(`&start_date=${fiveAgo}&end_date=${today}`);

                setUltimasCincoPic(ultimosCincoPicsResponse)
                
            }catch(error){
                console.log(error)
            }
        }

        imagenDelDia().catch(null); 
        last5Days().catch(null)

    },[])

    

    return(
        <View style={Styles.container}>
            <Header/>

            {/* Agrego el contenedor de la imagen del dia */}

            <ImagenDelDia {...picDelDia}/>

            {/* Componentes de los ultimos 5 dias */}

            <LastFiveDays postImages={ultimasCincoPic}/>

        </View>
    );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16
    }
})

export default Home;