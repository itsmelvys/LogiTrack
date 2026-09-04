import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Tela } from '@/componentes/Fundo';
import { LogoMarca } from '@/componentes/LogoMarca';
import { estilos } from '@/estilos';

export default function BoasVindas() {
  return (
    <Tela>
      <SafeAreaView style={estilos.flex} edges={['top']}>
      <View style={estilos.conteudo}>
        <LogoMarca grande />
        <Text style={estilos.subtitulo}>Sua entrega, no caminho certo.</Text>
        <View style={estilos.flex} />
        <Pressable accessibilityRole="button" style={estilos.botao} onPress={() => router.push('/login')}>
          <Text style={estilos.botaoTexto}>Entrar</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          style={estilos.botaoSecundario}
          onPress={() => router.push('/rastrear')}>
          <Text style={estilos.botaoSecundarioTexto}>Rastrear pedido</Text>
        </Pressable>
      </View>
      </SafeAreaView>
    </Tela>
  );
}
