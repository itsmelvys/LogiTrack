import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { estilos } from '@/estilos';

export function Cabecalho() {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar style="light" />
      <View style={[estilos.topo, { paddingTop: insets.top + 12 }]}>
        <Pressable accessibilityRole="button" onPress={() => router.push('/rastrear')}>
          <Text style={estilos.topoTitulo}>LogiTrack</Text>
        </Pressable>
        <Pressable accessibilityRole="button" accessibilityLabel="Menu" onPress={() => router.push('/menu')}>
          <Ionicons name="menu" size={24} color="#ffffff" />
        </Pressable>
      </View>
    </>
  );
}
