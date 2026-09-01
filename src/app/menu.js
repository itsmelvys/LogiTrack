import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { estilos } from '@/estilos';

const itens = [
  { nome: 'Rastrear pedido', rota: '/rastrear' },
  { nome: 'Meu pedido', rota: '/pedido' },
  { nome: 'Notificações', rota: '/notificacoes' },
  { nome: 'Novo pedido', rota: '/novo-pedido' },
  { nome: 'Sair', rota: '/' },
];

export default function Menu() {
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Cabecalho />
        <View style={estilos.conteudo}>
          <Text style={estilos.tituloPagina}>Menu</Text>
          {itens.map((item) => (
            <Pressable
              key={item.nome}
              accessibilityRole="button"
              style={estilos.itemMenu}
              onPress={() => router.push(item.rota)}>
              <Text style={estilos.itemMenuTexto}>{item.nome}</Text>
              <Ionicons name="chevron-forward" size={18} color="#9a9a9a" />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
