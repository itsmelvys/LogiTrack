import { Ionicons } from '@expo/vector-icons';
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Rodape } from '@/componentes/Rodape';
import { estilos } from '@/estilos';

export default function NovoPedido() {
  return (
    <View style={estilos.tela}>
      <View style={estilos.caixa}>
        <Cabecalho />
        <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
          <Text style={estilos.tituloPagina}>Novo pedido</Text>

          <Text style={estilos.rotulo}>Produto</Text>
          <View style={estilos.campo}>
            <TextInput
              style={estilos.input}
              placeholder="Selecione o produto"
              placeholderTextColor="#9a9a9a"
            />
          </View>

          <Text style={estilos.rotulo}>Quantidade</Text>
          <View style={estilos.campo}>
            <TextInput
              style={estilos.input}
              placeholder="Digite a quantidade"
              placeholderTextColor="#9a9a9a"
              keyboardType="number-pad"
            />
          </View>

          <Text style={estilos.rotulo}>Endereço de entrega</Text>
          <View style={estilos.campo}>
            <TextInput
              style={estilos.input}
              placeholder="Digite o endereço"
              placeholderTextColor="#9a9a9a"
            />
          </View>

          <Text style={estilos.rotulo}>Previsão de entrega</Text>
          <View style={estilos.campo}>
            <Ionicons name="calendar-outline" size={18} color="#9a9a9a" style={estilos.icone} />
            <TextInput
              style={estilos.input}
              placeholder="Selecione a data"
              placeholderTextColor="#9a9a9a"
            />
          </View>

          <Pressable
            accessibilityRole="button"
            style={estilos.botao}
            onPress={() => Alert.alert('Pedido cadastrado')}>
            <Text style={estilos.botaoTexto}>Cadastrar pedido</Text>
          </Pressable>
        </ScrollView>

        <Rodape
          ativa={4}
          titulo="Cadastre pedidos"
          texto="Preencha os dados para criar um pedido."
        />
      </View>
    </View>
  );
}
