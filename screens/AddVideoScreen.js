import { Text, View } from "react-native";

export default function AddVideoScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text onPress={() => navigation.navigate('Home')}>Details Screen</Text>
      </View>
    );
  }