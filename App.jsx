import { View, ImageBackground } from 'react-native'

import InfoWeather from './src/components/getWeather'

export default function App () {
  return (
    <ImageBackground source={require('./src/imgs/noche_mar.jpg')} style={{ flex: 1, resizeMode: 'cover' }}>
      <View>

        <InfoWeather/>
      </View>
    </ImageBackground>
  )
}
