import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavBarPage from './components/navBarPage';
import InfoWeather from './components/getWeather';


export default function App() {
  return (
      <View>
        <NavBarPage/>
        <InfoWeather/>
      </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white'
  },
});
