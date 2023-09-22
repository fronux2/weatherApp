import { View, Text, StyleSheet, Image } from 'react-native'

export default function ListOfFore ({ foreCast }) {
  return foreCast && (
    foreCast.map(data => {
      return (
          <View key={data.date_epoch} style={styles.container2}>
            <Text style={styles.text}>{data.date}          </Text>
            <Image style={styles.image} source={{ uri: `https:${data.day.condition.icon}` }}></Image>
            <Text style={styles.text}>{data.day.maxtemp_c}/</Text>
            <Text style={styles.text}>{data.day.mintemp_c}</Text>
          </View>
      )
    })
  )
}
const styles = StyleSheet.create({
  image: {
    width: 64, // Ancho deseado de la imagen
    height: 64 // Altura deseada de la imagen
  },
  text: {
    color: 'white'
  },
  container2: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
