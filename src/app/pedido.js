import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Rodape } from '@/componentes/Rodape';
import { AZUL, estilos } from '@/estilos';

const etapas = [
  { nome: 'Recebido', data: '10/04/2025 - 08:00', ok: true },
  { nome: 'Em separação', data: '10/04/2025 - 14:20', ok: true },
  { nome: 'Em transporte', data: '11/04/2025 - 09:15', ok: true },
  { nome: 'Saiu para entrega', data: '', ok: false },
  { nome: 'Entregue', data: '', ok: false },
];

export default function Pedido() {
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Cabecalho />
        <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
          <Pressable
            accessibilityRole="button"
            style={estilos.voltarLinha}
            onPress={() => router.push('/rastrear')}>
            <Ionicons name="arrow-back" size={20} color="#222222" />
            <Text style={estilos.tituloPedido}>Pedido #12345</Text>
          </Pressable>

          {etapas.map((etapa, i) => (
            <View key={etapa.nome} style={estilos.etapa}>
              <View style={estilos.etapaEsquerda}>
                <View style={[estilos.circulo, etapa.ok && estilos.circuloOk]}>
                  {etapa.ok ? <Ionicons name="checkmark" size={14} color="#ffffff" /> : null}
                </View>
                {i < etapas.length - 1 ? (
                  <View style={[estilos.linhaEtapa, etapa.ok && etapas[i + 1].ok && estilos.linhaOk]} />
                ) : null}
              </View>
              <View style={estilos.etapaTexto}>
                <Text style={estilos.etapaNome}>{etapa.nome}</Text>
                {etapa.data ? <Text style={estilos.etapaData}>{etapa.data}</Text> : null}
              </View>
            </View>
          ))}

          <View style={estilos.card}>
            <Ionicons name="cube-outline" size={22} color={AZUL} />
            <View style={estilos.cardTexto}>
              <Text style={estilos.cardLinha}>Produto: Notebook</Text>
              <Text style={estilos.cardLinha}>Destino: São Paulo - SP</Text>
              <Text style={estilos.cardLinha}>Previsão de entrega: 15/04/2025</Text>
            </View>
          </View>
        </ScrollView>

        <Rodape
          ativa={2}
          titulo="Acompanhe as etapas"
          texto="Veja o status do seu pedido."
        />
      </View>
    </View>
  );
}
