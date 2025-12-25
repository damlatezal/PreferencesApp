import { View, Text, Pressable } from 'react-native';
import { useTheme } from '../hooks/useTheme';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      <Text style={{ fontSize: 18 }}>Theme: {theme}</Text>

      <Pressable onPress={toggleTheme} style={{ borderWidth: 1, padding: 12, borderRadius: 8 }}>
        <Text>Toggle Theme</Text>
      </Pressable>
    </View>
  );
}
