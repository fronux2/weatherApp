import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'

import apiConfig from './config.dev.js'

export default function InfoWeather () {
  const [weather, setWeather] = useState()
  const [fore, setFore] = useState()
  const [horas, setHoras] = useState()

  useEffect(() => {
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiConfig.apiUrl}&q=${'san bernardo'}&q=07112&days=7`)
      .then(res => res.json())
      .then(data => {
        setWeather(data)
        setFore(data.forecast.forecastday)
      })
    fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiConfig.apiUrl}&q=${'san bernardo'}&q=07112&days=1`)
      .then(res => res.json())
      .then(data => {
        setHoras(data.forecast.forecastday)
      })

    console.log('jajaw')
  }, [])

  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.container2}>

        </View>

        {weather && (
          <Text style={{ color: 'white' }}>
            {`${weather.current.condition.text} `}
          </Text>
        )}

        <View style={styles.container2}>
          {weather && (
            <Image
              source={{ uri: `https:${weather.current.condition.icon}` }}
              style={{ width: 150, height: 150 }}
            />

          )}
          {weather && (
          <Text style={styles.temperatura} >
            {`${weather.current.temp_c}°C `}
          </Text>
          )}
        </View>
        {weather && (
            <Text style={styles.nombre}>
              {`${weather.location.name} `}
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

        <Text style={styles.text}>dddw22</Text>

        <ScrollView horizontal={true}>
          <View style={styles.container3}>
            {horas && (
              horas.map(data => {
                return (
                <View key={data.date_epoch} style={styles.container2}>
                  {data.hour && (
                    data.hour.map(horas => {
                      return (
                    <View key={horas.time_epoch} style={styles.container3}>
                      <Text style={styles.text}>{horas.time.substring(10, 16)}</Text>
                      <Image
                        source={{ uri: `https:${horas.condition.icon}` }}
                        style={styles.image}
                      />
                    <Text style={styles.text}>{horas.temp_c}°</Text>
                    </View>
                      )
                    }))}
                </View>
                )
              })
            )}
          </View>
        </ScrollView>
        {fore && (
          fore.map(data => {
            return (
            <View key={data.date_epoch} style={styles.container2}>
              <Text style={styles.text}>{data.date}          </Text>
              <Image style={styles.image} source={{ uri: `https:${data.day.condition.icon}` }}></Image>
              <Text style={styles.text}>{data.day.maxtemp_c}/</Text>
              <Text style={styles.text}>{data.day.mintemp_c}</Text>
            </View>
            )
          })
        )}

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
