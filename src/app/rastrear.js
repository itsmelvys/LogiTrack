import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Tela } from '@/componentes/Fundo';
import { ICONE, estilos } from '@/estilos';

export default function Rastrear() {
  return (
    <Tela>
      <Cabecalho />
      <View style={estilos.conteudo}>
        <Text style={estilos.tituloPagina}>Consultar pedido</Text>

        <View style={estilos.campo}>
          <Ionicons name="search-outline" size={18} color={ICONE} style={estilos.icone} />
          <TextInput
            style={estilos.input}
            placeholder="Número do pedido"
            placeholderTextColor="#9a9a9a"
          />
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Rastrear"
          style={estilos.botao}
          onPress={() => router.push('/pedidos')}>
          <Text style={estilos.botaoTexto}>Rastrear</Text>
        </Pressable>

        <Text style={estilos.textoAjuda}>Exemplo: #LT2026-1048</Text>
      </View>
    </Tela>
  );
}
