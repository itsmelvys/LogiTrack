import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { useUsuario } from '@/contexto';
import { estilos } from '@/estilos';

const itens = [
  { nome: 'Início', rota: '/inicio' },
  { nome: 'Rastrear pedido', rota: '/rastrear' },
  { nome: 'Meus pedidos', rota: '/pedidos' },
  { nome: 'Em rota', rota: '/pedido' },
  { nome: 'Notificações', rota: '/notificacoes' },
  { nome: 'Novo pedido', rota: '/novo-pedido' },
  { nome: 'Sair', rota: '/' },
];

export default function Menu() {
  const { sair } = useUsuario();

  function irPara(rota) {
    if (rota === '/') {
      sair();
    }
    router.push(rota);
  }

  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Cabecalho mostrarVoltar={false} />
        <View style={estilos.conteudo}>
          <Text style={estilos.tituloPagina}>Menu</Text>
          {itens.map((item) => (
            <Pressable
              key={item.nome}
              accessibilityRole="button"
              style={estilos.itemMenu}
              onPress={() => irPara(item.rota)}>
              <Text style={estilos.itemMenuTexto}>{item.nome}</Text>
              <Ionicons name="chevron-forward" size={18} color="#9a9a9a" />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
