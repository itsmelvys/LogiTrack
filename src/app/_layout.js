import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { UsuarioProvider } from '@/contexto';

export default function Layout() {
  return (
    <UsuarioProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </UsuarioProvider>
  );
}
