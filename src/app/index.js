import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Rodape } from '@/componentes/Rodape';
import { useUsuario } from '@/contexto';
import { estilos } from '@/estilos';

function nomeDoLogin(nome, email) {
  const texto = (nome || email.split('@')[0] || 'usuário').trim();
  if (!texto) {
    return 'usuário';
  }
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export default function Login() {
  const { setNome } = useUsuario();
  const [nome, setNomeCampo] = useState('');
  const [email, setEmail] = useState('');

  function entrar() {
    setNome(nomeDoLogin(nome, email));
    router.push('/inicio');
  }

  return (
    <SafeAreaView style={estilos.tela} edges={['top']}>
      <View style={estilos.caixa}>
        <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
          <View style={estilos.logo}>
            <Text style={estilos.caminhao}>🚚</Text>
            <Text style={estilos.nomeApp}>LogiTrack</Text>
            <Text style={estilos.subtitulo}>Rastreamento de Entregas</Text>
          </View>

          <View style={estilos.campo}>
            <Ionicons name="person-outline" size={18} color="#9a9a9a" style={estilos.icone} />
            <TextInput
              style={estilos.input}
              placeholder="Nome"
              placeholderTextColor="#9a9a9a"
              value={nome}
              onChangeText={setNomeCampo}
            />
          </View>

          <View style={estilos.campo}>
            <Ionicons name="mail-outline" size={18} color="#9a9a9a" style={estilos.icone} />
            <TextInput
              style={estilos.input}
              placeholder="E-mail"
              placeholderTextColor="#9a9a9a"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
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
            onPress={entrar}>
            <Text style={estilos.botaoTexto}>Entrar</Text>
          </Pressable>

          <Text style={estilos.link}>Esqueci minha senha</Text>
        </ScrollView>

        <Rodape ativa={0} titulo="Acesse sua conta" texto="Entre para acompanhar seus pedidos." />
      </View>
    </SafeAreaView>
  );
}
