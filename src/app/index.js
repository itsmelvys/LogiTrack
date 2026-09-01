import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Pressable, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Rodape } from '@/componentes/Rodape';
import { estilos } from '@/estilos';

export default function Login() {
  return (
    <SafeAreaView style={estilos.tela} edges={['top']}>
      <View style={estilos.caixa}>
        <View style={estilos.conteudo}>
          <View style={estilos.logo}>
            <Text style={estilos.caminhao}>🚚</Text>
            <Text style={estilos.nomeApp}>LogiTrack</Text>
            <Text style={estilos.subtitulo}>Rastreamento de Entregas</Text>
          </View>

          <View style={estilos.campo}>
            <Ionicons name="mail-outline" size={18} color="#9a9a9a" style={estilos.icone} />
            <TextInput
              style={estilos.input}
              placeholder="E-mail"
              placeholderTextColor="#9a9a9a"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={estilos.campo}>
            <Ionicons name="lock-closed-outline" size={18} color="#9a9a9a" style={estilos.icone} />
            <TextInput
              style={estilos.input}
              placeholder="Senha"
              placeholderTextColor="#9a9a9a"
              secureTextEntry
            />
          </View>

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Entrar"
            style={estilos.botao}
            onPress={() => router.push('/rastrear')}>
            <Text style={estilos.botaoTexto}>Entrar</Text>
          </Pressable>

          <Text style={estilos.link}>Esqueci minha senha</Text>
        </View>

        <Rodape ativa={0} titulo="Acesse sua conta" texto="Entre para acompanhar seus pedidos." />
      </View>
    </SafeAreaView>
  );
}
