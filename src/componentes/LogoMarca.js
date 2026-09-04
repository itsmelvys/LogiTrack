import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { estilos } from '@/estilos';

export function LogoMarca({ grande }) {
  return (
    <View style={estilos.logo}>
      <View style={grande ? estilos.logoIconeGrande : estilos.logoIcone}>
        <Ionicons name="location" size={grande ? 28 : 16} color="#ffffff" style={estilos.logoPin} />
        <Ionicons name="bus-outline" size={grande ? 72 : 28} color="#ffffff" />
      </View>
      <Text style={grande ? estilos.nomeAppGrande : estilos.nomeApp}>LogiTrack</Text>
    </View>
  );
}
