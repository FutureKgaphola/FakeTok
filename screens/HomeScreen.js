import { StyleSheet } from "react-native";
import { View, Dimensions } from "react-native";
import data from '../data'
import { FlatList } from "react-native";
import { ResizeMode } from 'expo-av'
import VideoPlayer from 'expo-video-player'

export default function HomeScreen({ navigation }) {
  const { height, width } = Dimensions.get('window');
  const renderItems = ({ item }) => (
    <View style={{ backgroundColor: 'yellow', width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
      <VideoPlayer
        videoProps={{
          shouldPlay: false,
          resizeMode: ResizeMode.COVER,
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
        keyExtractor={(item) => item.id}
        renderItem={renderItems}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        onScrollBeginDrag={() => console.log("start")}
        onScrollEndDrag={() => console.log("end")}
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },

});