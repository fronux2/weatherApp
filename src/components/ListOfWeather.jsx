import { View, Text, StyleSheet, Image } from 'react-native'

export default function ListOfWeather ({hour}) {
    return hour && (
        hour.map(data => {
          return (
          <View key={data.date_epoch} style={styles.container2}>
            {data.hour && (
              data.hour.map(hour => {
                return (
              <View key={hour.time_epoch} style={styles.container3}>
                <Text style={styles.text}>{hour.time.substring(10, 16)}</Text>
                <Image
                  source={{ uri: `https:${hour.condition.icon}` }}
                  style={styles.image}
                />
              <Text style={styles.text}>{hour.temp_c}°</Text>
              </View>
                )
              }))}
          </View>
          )
        })
      )
}

const styles = StyleSheet.create({
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
      image: {
        width: 64, // Ancho deseado de la imagen
        height: 64 // Altura deseada de la imagen
      },
      text: {
        color: 'white'
        },

})