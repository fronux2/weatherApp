import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import useInfoWeather from '../hooks/useInfoWeather.jsx'
import ListOfWeather from './ListOfWeather.jsx'
import ListOfFore from './ListOfFore.jsx'
export default function InfoWeather () {
  const {current, foreCast, hour} = useInfoWeather()

  return (
    <ScrollView >
      <View style={styles.container}>        

        {current && (
          <Text style={{ color: 'white' }}>
            {`${current.current.condition.text} `}
          </Text>
        )}

        <View style={styles.container2}>
          {current && (
            <Image
              source={{ uri: `https:${current.current.condition.icon}` }}
              style={{ width: 150, height: 150 }}
            />

          )}
          {current && (
          <Text style={styles.temperatura} >
            {`${current.current.temp_c}°C `}
          </Text>
          )}
        </View>
        {current && (
            <Text style={styles.nombre}>
              {`${current.location.name} `}
            </Text>
        )}

        {current && (
          <Text style={styles.pais}>
            {`${current.location.country} `}
          </Text>
        )}
        {current && (
          <Text style={styles.region}>
            {`${current.location.region} `}
          </Text>
        )}

        <Text style={styles.text}>dddw22</Text>

        <ScrollView horizontal={true}>
          <View style={styles.container3}>
            <ListOfWeather hour={hour} />
          </View>
        </ScrollView>
        <ListOfFore foreCast={foreCast}/>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 110,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container2: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container3: {
    flex: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  },
  temperatura: {
    fontSize: 90,
    color: 'white'
  },
  nombre: {
    fontSize: 40,
    color: 'white'
  },
  image: {
    width: 64, // Ancho deseado de la imagen
    height: 64 // Altura deseada de la imagen
  },
  pais: {
    fontSize: 30,
    color: 'white'
  },
  region: {
    fontSize: 20,
    color: 'white'
  },

  containerz: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainerz: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagez: {
    width: 24, // Ancho deseado de la imagen
    height: 24, // Alto deseado de la imagen
    marginRight: 8 // Espacio entre la imagen y el texto del botón
  }
})
