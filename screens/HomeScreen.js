import { StyleSheet } from "react-native";
import { View, Dimensions } from "react-native";
import data from '../data'
import { FlatList } from "react-native";
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default function HomeScreen({ navigation }) {

  
  const renderItems = ({ item }) => (
    <View style={{ width: Dimensions.get('window').width}}>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.CONTAIN,
          // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
          source: {
            uri: item.vidurl,
          },
        }}
      />
    </View>
  )
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        initialNumToRender={1}
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        snapToEnd={false}
        style={{paddingBottom:70}}
        
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

});