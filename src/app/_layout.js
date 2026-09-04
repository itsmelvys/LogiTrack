import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { UsuarioProvider } from '@/contexto';

export default function Layout() {
  return (
    <UsuarioProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { flex: 1 } }} />
    </UsuarioProvider>
  );
}
