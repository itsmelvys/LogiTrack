import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';

import { estilos } from '@/estilos';

function Deserto() {
  return (
    <View pointerEvents="none" style={estilos.deserto}>
      <View style={estilos.duna} />
      <View style={estilos.cactoLonge}>
        <View style={estilos.cactoHastePequena} />
      </View>
      <View style={estilos.cactoPerto}>
        <View style={estilos.cactoVaso} />
        <View style={estilos.cactoHaste} />
        <View style={estilos.cactoBracoEsq} />
        <View style={estilos.cactoBracoDir} />
      </View>
    </View>
  );
}

export function Fundo({ children }) {
  return (
    <LinearGradient
      colors={['#4EB8E8', '#C9DE6A', '#E8A63A']}
      locations={[0, 0.48, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={estilos.tela}>
      <Deserto />
      {children}
    </LinearGradient>
  );
}

export function Tela({ children }) {
  return (
    <Fundo>
      <View style={estilos.caixa}>{children}</View>
    </Fundo>
  );
}
