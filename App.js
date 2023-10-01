import { StatusBar } from 'expo-status-bar';
import { Alert, BackHandler, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Friends from './screens/Friends';
import Message from './screens/Message';
import Profile from './screens/Profile';
import AddVideoScreen from './screens/AddVideoScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  const [item, setItem] = useState('mesage from parent');
  const[counter,setconter]=useState(0);
  const Tab = createBottomTabNavigator();
  const color = "black";
  const size = 24;
  useEffect(()=>{
    BackHandler.addEventListener('hardwareBackPress',()=>{
      
      if(counter===0){
        setconter(counter+1);
        Alert.alert('Exit',"Are you sure you want to exit",[
         {
          text:'Yes',
          onPress:()=>BackHandler.exitApp(),
          style: 'destructive',
         },
         {
          text:'stay',
          onPress:()=>setconter(0),
          style:'cancel'
         }
        ],
        { cancelable: true });
      }

    })
  },[])
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' backBehavior={'initialRoute'} screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (

            <MaterialIcons name="home" size={size} color={color} />
          )
        }} />
        <Tab.Screen name="Friends" component={Friends} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5 name="user-friends" size={24} color="black" />

          )
        }} />

        <Tab.Screen name="." component={AddVideoScreen} options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="plussquare" size={24} color="black" />

          )
        }} />

        <Tab.Screen name="Message" component={Message} options={{
          tabBarIcon: ({ focused, color, size }) => (

            <MaterialIcons name="message" size={24} color="black" />

          ),
          tabBarBadge: '1'
        }} />

        <Tab.Screen name="Profile" component={Profile} options={{
          tabBarIcon: ({ focused, color, size }) => (

            <AntDesign name="user" size={24} color="black" />

          )
        }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
