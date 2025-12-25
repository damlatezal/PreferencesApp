import { View, Text, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen({ navigation }) {
  const { user, logout } = useAuth();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12, padding: 16 }}>
      <Text style={{ fontSize: 20 }}>Welcome, {user?.username}</Text>

      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text style={{ textDecorationLine: 'underline' }}>Go to Settings</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          logout();
          navigation.replace('Login');
        }}
      >
        <Text style={{ color: 'crimson', fontWeight: '700' }}>Logout</Text>
      </Pressable>
    </View>
  );
}
