import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useUsuario } from '@/contexto';
import { estilos } from '@/estilos';

export function Cabecalho({ mostrarVoltar = true }) {
  const insets = useSafeAreaInsets();
  const { nome } = useUsuario();
  const saudacao = nome ? nome : 'usuário';

  return (
    <>
      <StatusBar style="light" />
      <View style={[estilos.topo, { paddingTop: insets.top + 12 }]}>
        {mostrarVoltar ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Voltar"
            onPress={() => {
              if (router.canGoBack()) {
                router.back();
              } else {
                router.push('/inicio');
              }
            }}>
            <Ionicons name="arrow-back" size={24} color="#ffffff" />
          </Pressable>
        ) : null}
        <Pressable accessibilityRole="button" accessibilityLabel="Menu" onPress={() => router.push('/menu')}>
          <Ionicons name="menu" size={24} color="#ffffff" />
        </Pressable>
        <Pressable accessibilityRole="button" onPress={() => router.push('/inicio')}>
          <Text style={estilos.topoTitulo}>LogiTrack</Text>
        </Pressable>
        <View style={estilos.tagBoasVindas}>
          <Text style={estilos.tagBoasVindasTexto} numberOfLines={1}>
            Olá, {saudacao}
          </Text>
        </View>
      </View>
    </>
  );
}
