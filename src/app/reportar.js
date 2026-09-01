import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { buscarPedido } from '@/dadosPedidos';
import { estilos } from '@/estilos';

export default function Reportar() {
  const { id } = useLocalSearchParams();
  const pedido = buscarPedido(id);
  const [problema, setProblema] = useState('');

  function enviar() {
    Alert.alert('Problema enviado', `Pedido #${pedido.id}: recebemos seu relato.`);
    setProblema('');
    router.back();
  }

  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Cabecalho />
        <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
          <Text style={estilos.tituloPagina}>Reportar problema</Text>

          <Text style={estilos.cardLinha}>Pedido #{pedido.id}</Text>
          <Text style={[estilos.cardLinha, { marginBottom: 16 }]}>Produto: {pedido.produto}</Text>

          <Text style={estilos.rotulo}>Descreva o problema</Text>
          <View style={estilos.campo}>
            <TextInput
              style={estilos.input}
              placeholder="Ex.: atraso, produto errado, avaria..."
              placeholderTextColor="#9a9a9a"
              value={problema}
              onChangeText={setProblema}
              multiline
            />
          </View>

          <Pressable accessibilityRole="button" style={estilos.botao} onPress={enviar}>
            <Text style={estilos.botaoTexto}>Enviar</Text>
          </Pressable>
        </ScrollView>
      </View>
    </View>
  );
}
