import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';

import { estilos } from '@/estilos';

export function MenuPedido({ id, children, compact }) {
  const [aberto, setAberto] = useState(false);

  function irPara(rota) {
    setAberto(false);
    router.push({ pathname: rota, params: { id } });
  }

  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Opções do pedido"
        style={compact ? estilos.botaoMenuPedido : estilos.card}
        onPress={() => setAberto(true)}>
        {compact ? <Ionicons name="ellipsis-vertical" size={20} color="#ffffff" /> : children}
        {compact ? null : <Ionicons name="ellipsis-vertical" size={18} color="#888888" />}
      </Pressable>

      <Modal visible={aberto} transparent animationType="fade" onRequestClose={() => setAberto(false)}>
        <Pressable style={estilos.fundoMenu} onPress={() => setAberto(false)}>
          <View style={estilos.caixaMenuPedido}>
            <Text style={estilos.cardTitulo}>Pedido #{id}</Text>
            <Pressable
              accessibilityRole="button"
              style={estilos.itemMenu}
              onPress={() => irPara('/pedido')}>
              <Text style={estilos.itemMenuTexto}>Detalhes</Text>
            </Pressable>
            <Pressable
              accessibilityRole="button"
              style={estilos.itemMenu}
              onPress={() => irPara('/reportar')}>
              <Text style={estilos.itemMenuTexto}>Reportar um problema</Text>
            </Pressable>
            <Pressable accessibilityRole="button" style={estilos.itemMenu} onPress={() => setAberto(false)}>
              <Text style={estilos.cardLinha}>Fechar</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
