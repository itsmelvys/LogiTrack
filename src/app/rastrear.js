import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Rodape } from '@/componentes/Rodape';
import { estilos } from '@/estilos';

export default function Rastrear() {
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Cabecalho />
        <View style={estilos.conteudo}>
          <Text style={estilos.tituloPagina}>Rastrear pedido</Text>

          <View style={estilos.campo}>
            <Ionicons name="search-outline" size={18} color="#9a9a9a" style={estilos.icone} />
            <TextInput
              style={estilos.input}
              placeholder="Digite o número do pedido"
              placeholderTextColor="#9a9a9a"
            />
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Buscar"
            style={estilos.botao}
            onPress={() => router.push('/pedido')}>
            <Text style={estilos.botaoTexto}>Buscar</Text>
          </Pressable>
        </View>

        <Rodape
          ativa={1}
          titulo="Consulte seu pedido"
          texto="Digite o número do pedido para ver o status."
        />
      </View>
    </View>
  );
}
