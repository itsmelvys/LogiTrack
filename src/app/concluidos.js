import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Tela } from '@/componentes/Fundo';
import { MenuPedido } from '@/componentes/MenuPedido';
import { pedidosConcluidos } from '@/dadosPedidos';
import { ICONE, estilos } from '@/estilos';

export default function Concluidos() {
  return (
    <Tela>
      <Cabecalho />
      <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
        <Text style={estilos.tituloPagina}>Pedidos concluídos</Text>
        <Text style={[estilos.rodapeTexto, { marginBottom: 16 }]}>Entregas finalizadas</Text>

        {pedidosConcluidos.map((pedido) => (
          <MenuPedido key={pedido.id} id={pedido.id}>
            <Ionicons name="checkmark-circle-outline" size={22} color={ICONE} />
            <View style={estilos.cardTexto}>
              <Text style={estilos.cardTitulo}>Pedido #{pedido.id}</Text>
              <Text style={estilos.cardLinha}>Produto: {pedido.produto}</Text>
              <Text style={estilos.cardLinha}>Qtd: {pedido.quantidade}</Text>
              <Text style={estilos.cardLinha}>Destino: {pedido.destino}</Text>
              <Text style={estilos.cardLinha}>Entregue: {pedido.entregue}</Text>
              <Text style={estilos.statusPedido}>{pedido.status}</Text>
            </View>
          </MenuPedido>
        ))}
      </ScrollView>
    </Tela>
  );
}
