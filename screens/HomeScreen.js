import { View, Text, Pressable } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { username } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text style={{ fontSize: 20 }}>Welcome, {username}</Text>

      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text style={{ fontSize: 16, textDecorationLine: 'underline' }}>Go to Settings</Text>
      </Pressable>
    </View>
  );
}
