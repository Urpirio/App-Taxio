import { StatusBar } from 'expo-status-bar';
import { Tabs } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
   <SafeAreaProvider>
    <View>
      <Text>Home</Text>
    </View>
   </SafeAreaProvider>
  );
}


