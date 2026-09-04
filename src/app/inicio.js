import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Tela } from '@/componentes/Fundo';
import { MenuPedido } from '@/componentes/MenuPedido';
import { useUsuario } from '@/contexto';
import { ICONE, estilos } from '@/estilos';
import { pedidoMaisRecente } from '@/dadosPedidos';

export default function Inicio() {
  const { nome } = useUsuario();
  const pedido = pedidoMaisRecente();
  const quem = nome || 'usuário';

  return (
    <Tela>
      <Cabecalho mostrarVoltar={false} />
      <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
        <Text style={estilos.tituloPagina}>Olá, {quem}</Text>
        <Text style={[estilos.rodapeTexto, { marginBottom: 16 }]}>Seu pedido mais recente</Text>

        <MenuPedido id={pedido.id}>
          <Ionicons name="cube-outline" size={22} color={ICONE} />
          <View style={estilos.cardTexto}>
            <Text style={estilos.cardTitulo}>Pedido #{pedido.id}</Text>
            <Text style={estilos.cardLinha}>Produto: {pedido.produto}</Text>
            <Text style={estilos.cardLinha}>Qtd: {pedido.quantidade}</Text>
            <Text style={estilos.cardLinha}>Destino: {pedido.destino}</Text>
            <Text style={estilos.cardLinha}>Recebido: {pedido.recebido}</Text>
            <Text style={estilos.statusPedido}>{pedido.status}</Text>
          </View>
        </MenuPedido>

        <Pressable
          accessibilityRole="button"
          style={estilos.botao}
          onPress={() => router.push({ pathname: '/pedido', params: { id: pedido.id } })}>
          <Text style={estilos.botaoTexto}>Ver status</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          style={estilos.botaoSecundario}
          onPress={() => router.push('/rastrear')}>
          <Text style={estilos.botaoSecundarioTexto}>Rastrear outro pedido</Text>
        </Pressable>
      </ScrollView>
    </Tela>
  );
}
