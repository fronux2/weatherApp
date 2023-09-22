import { View, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import InfoWeather from './src/components/getWeather'

export default function App () {
  return (
    <ImageBackground source={require('./src/imgs/noche_mar.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
      <View>
        <StatusBar style='light'/>
        <InfoWeather/>
      </View>
    </ImageBackground>
  )
}
