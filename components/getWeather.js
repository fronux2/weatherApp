import { Divider } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import { StyleSheet, Image, ScrollView } from 'react-native';


export default function InfoWeather () {
    const [weather, setWeather] = useState()
    const [fore, setFore] = useState()
    const [horas, setHoras] = useState()

    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => {
          setWeather(data)
          setFore(data.forecast.forecastday)          
        })
        fetch()
        .then(res => res.json())
        .then(data => {          
          setHoras(data.forecast.forecastday)          
        })
        
        console.log('jajaw')
    },[])
    

  return (
    <ScrollView >
      <View style={styles.container}>
        {weather && (
          <Text style={''}>
            {`${weather.location.localtime} `}         
          </Text>
        )}
        {weather && (
          <Text style={''}>
            {`${weather.current.condition.text} `}         
          </Text>
        )}
        {weather && (
          <Image 
            source={{ uri: `https:${weather.current.condition.icon}` }}
            style={styles.image}
          />
          
        )}
        {weather && (
          <Text style={styles.nombre}>
            {`${weather.location.name} `}         
          </Text>
        )}
        {weather && (
          <Text style={styles.temperatura} >
            {`${weather.current.temp_c}°C `}          
          </Text>
        )}   
        {weather && (
          <Text style={styles.pais}>
            {`${weather.location.country} `}         
          </Text>
        )}
        {weather && (
          <Text style={styles.region}>
            {`${weather.location.region} `}          
          </Text>
        )}

        
        
        <Text>dddw22</Text>
        <Divider style={{ marginTop: 60 }} leadingInset={16} color="pink" />
        <ScrollView horizontal={true}>
          <View style={styles.container3}>
            {horas && (
              horas.map(data => {
                return( 
                <View style={styles.container2}>              
                  {data.hour && (
                    data.hour.map(horas =>{
                    return(
                    <View style={styles.container3}>
                      <Text>{horas.time.substring(10,16)}</Text>
                      <Image 
                        source={{ uri: `https:${horas.condition.icon}` }}
                        style={styles.image}
                      />
                    <Text>{horas.temp_c}°</Text>
                    </View>
                    )
                  } ))}  
                </View>
                )
              })
            )}
          </View>
        </ScrollView>
        {fore && (
          fore.map(data => {
            return( 
            <View style={styles.container2}>
              <Text>{data.date}          </Text>
              <Image style={styles.image} source={{ uri: `https:${data.day.condition.icon}`}}></Image>
              <Text>{data.day.maxtemp_c}/</Text>
              <Text>{data.day.mintemp_c}</Text>               
            </View>
            )
          })
        )}
        
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {    
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {    
    flex:0,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {    
    flex:0,
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white'
  },
  temperatura:{
    fontSize:90
  },
  nombre:{
    fontSize:40
  },
  image: {
    width: 64, // Ancho deseado de la imagen
    height: 64, // Altura deseada de la imagen
  },
  pais:{
    fontSize:30
  },
  region:{
    fontSize:20
  }
});