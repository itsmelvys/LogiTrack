import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, ScrollView, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { AZUL, estilos } from '@/estilos';

const pastas = [
  { nome: 'Pedidos concluídos', rota: '/concluidos', icone: 'folder-outline' },
  { nome: 'Pedidos cancelados', rota: '/cancelados', icone: 'folder-outline' },
];

export default function Pedidos() {
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Cabecalho />
        <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
          <Text style={estilos.tituloPagina}>Meus pedidos</Text>
          <Text style={[estilos.rodapeTexto, { marginBottom: 16 }]}>Abra uma pasta para ver os pedidos</Text>

          {pastas.map((pasta) => (
            <Pressable
              key={pasta.rota}
              accessibilityRole="button"
              style={estilos.itemMenu}
              onPress={() => router.push(pasta.rota)}>
              <View style={estilos.pastaLinha}>
                <Ionicons name={pasta.icone} size={22} color={AZUL} />
                <Text style={estilos.itemMenuTexto}>{pasta.nome}</Text>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#9a9a9a" />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
