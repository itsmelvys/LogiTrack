import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Tela } from '@/componentes/Fundo';
import { MenuPedido } from '@/componentes/MenuPedido';
import { pedidosCancelados } from '@/dadosPedidos';
import { estilos } from '@/estilos';

export default function Cancelados() {
  return (
    <Tela>
      <Cabecalho />
      <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
        <Text style={estilos.tituloPagina}>Pedidos cancelados</Text>
        <Text style={[estilos.rodapeTexto, { marginBottom: 16 }]}>
          Pedidos que não seguiram para entrega
        </Text>

        {pedidosCancelados.map((pedido) => (
          <MenuPedido key={pedido.id} id={pedido.id}>
            <Ionicons name="close-circle-outline" size={22} color="#c0392b" />
            <View style={estilos.cardTexto}>
              <Text style={estilos.cardTitulo}>Pedido #{pedido.id}</Text>
              <Text style={estilos.cardLinha}>Produto: {pedido.produto}</Text>
              <Text style={estilos.cardLinha}>Qtd: {pedido.quantidade}</Text>
              <Text style={estilos.cardLinha}>Destino: {pedido.destino}</Text>
              <Text style={estilos.cardLinha}>Endereço: {pedido.endereco}</Text>
              <Text style={estilos.cardLinha}>Cancelado: {pedido.cancelado}</Text>
              <Text style={estilos.cardLinha}>Motivo: {pedido.motivo}</Text>
              <Text style={estilos.statusCancelado}>Cancelado</Text>
            </View>
          </MenuPedido>
        ))}
      </ScrollView>
    </Tela>
  );
}
