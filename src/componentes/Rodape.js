import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { estilos } from '@/estilos';

const rotas = ['/', '/rastrear', '/pedido', '/notificacoes', '/novo-pedido'];

export function Rodape({ ativa, titulo, texto }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[estilos.rodape, { paddingBottom: insets.bottom + 20 }]}>
      <View style={estilos.bolinhas}>
        {rotas.map((rota, i) => (
          <Pressable key={rota} onPress={() => router.push(rota)}>
            <View style={[estilos.bolinha, i === ativa && estilos.bolinhaAtiva]} />
          </Pressable>
        ))}
      </View>
      <Text style={estilos.rodapeTitulo}>{titulo}</Text>
      <Text style={estilos.rodapeTexto}>{texto}</Text>
    </View>
  );
}
