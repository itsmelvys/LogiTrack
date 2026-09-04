import { Ionicons } from '@expo/vector-icons';
import { ScrollView, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Tela } from '@/componentes/Fundo';
import { Rodape } from '@/componentes/Rodape';
import { useUsuario } from '@/contexto';
import { ICONE, estilos } from '@/estilos';

const avisosFixos = [
  {
    id: 'fixo-1',
    icone: 'car-outline',
    titulo: 'Saiu para entrega',
    texto: 'Seu pedido #12345 saiu para entrega.',
    data: '11/04/2025 09:15',
  },
  {
    id: 'fixo-2',
    icone: 'checkmark-circle-outline',
    titulo: 'Pedido entregue',
    texto: 'Seu pedido #12345 foi entregue com sucesso!',
    data: '12/04/2025 16:30',
  },
];

export default function Notificacoes() {
  const { avisos } = useUsuario();
  const lista = [...avisos, ...avisosFixos];

  return (
    <Tela>
      <Cabecalho />
      <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
        <Text style={estilos.tituloPagina}>Notificações</Text>

        {lista.map((aviso) => (
          <View key={aviso.id} style={estilos.card}>
            <Ionicons name={aviso.icone || 'notifications-outline'} size={22} color={ICONE} />
            <View style={estilos.cardTexto}>
              <Text style={estilos.cardTitulo}>{aviso.titulo}</Text>
              <Text style={estilos.cardLinha}>{aviso.texto}</Text>
              <Text style={estilos.dataCard}>{aviso.data}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Rodape
        ativa={3}
        titulo="Receba notificações"
        texto="Acompanhe as atualizações do pedido."
      />
    </Tela>
  );
}
