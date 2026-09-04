import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useRef, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { Cabecalho } from '@/componentes/Cabecalho';
import { Tela } from '@/componentes/Fundo';
import { MenuPedido } from '@/componentes/MenuPedido';
import { Rodape } from '@/componentes/Rodape';
import { useUsuario } from '@/contexto';
import { AMARELO, ICONE, estilos } from '@/estilos';
import { buscarPedido, etapasDoPedido, passosRastreio } from '@/dadosPedidos';

function horaAgora() {
  return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

export default function Pedido() {
  const { id } = useLocalSearchParams();
  const { nome, addAviso } = useUsuario();
  const pedido = buscarPedido(id);
  const etapas = etapasDoPedido(pedido.status);
  const emRota = pedido.status === 'Em rota';
  const titulo = emRota ? `Em rota #${pedido.id}` : `Pedido #${pedido.id}`;

  const [passo, setPasso] = useState(null);
  const [atualizacoes, setAtualizacoes] = useState([]);
  const indice = useRef(0);

  useEffect(() => {
    if (!emRota) {
      return;
    }

    const passos = passosRastreio(nome, pedido);
    indice.current = 0;

    function aplicar(item) {
      setPasso(item);
      const aviso = {
        id: `${Date.now()}-${item.titulo}`,
        icone: 'navigate-outline',
        titulo: item.titulo,
        texto: item.texto,
        data: horaAgora(),
      };
      setAtualizacoes((lista) => [aviso, ...lista]);
      addAviso(aviso);
    }

    aplicar(passos[0]);

    const timer = setInterval(() => {
      indice.current += 1;
      if (indice.current >= passos.length) {
        clearInterval(timer);
        return;
      }
      aplicar(passos[indice.current]);
    }, 4000);

    return () => clearInterval(timer);
  }, [pedido.id, emRota, nome]);

  return (
    <Tela>
      <Cabecalho />
      <ScrollView style={estilos.flex} contentContainerStyle={estilos.conteudoCurto}>
        <View style={estilos.voltarLinha}>
          <Text style={estilos.tituloPedido}>{titulo}</Text>
          <MenuPedido id={pedido.id} compact />
        </View>

        {etapas.map((etapa, i) => {
          const atual = etapa.ok && (i === etapas.length - 1 || !etapas[i + 1].ok);
          return (
            <View key={etapa.nome} style={estilos.etapa}>
              <View style={estilos.etapaEsquerda}>
                <View style={[estilos.circulo, etapa.ok && estilos.circuloOk, atual && estilos.circuloAtual]}>
                  {etapa.ok ? <Ionicons name="checkmark" size={14} color={AMARELO} /> : null}
                </View>
                {i < etapas.length - 1 ? (
                  <View style={[estilos.linhaEtapa, etapa.ok && etapas[i + 1].ok && estilos.linhaOk]} />
                ) : null}
              </View>
              <View style={estilos.etapaTexto}>
                <Text style={estilos.etapaNome}>{etapa.nome}</Text>
              </View>
            </View>
          );
        })}

        {emRota && passo ? (
          <View>
            <View style={estilos.pontoAoVivo}>
              <View style={estilos.bolinhaViva} />
              <Text style={estilos.etapaNome}>Rastreamento ao vivo</Text>
            </View>
            <View style={estilos.barraFundo}>
              <View style={[estilos.barraPreenchida, { width: `${passo.porcentagem}%` }]} />
            </View>
            <Text style={estilos.rodapeTexto}>Local: {passo.local}</Text>
            <Text style={estilos.rodapeTexto}>Progresso: {passo.porcentagem}%</Text>
            <Text style={[estilos.etapaNome, { marginBottom: 12 }]}>
              Chegada em cerca de {passo.minutos} min
            </Text>
          </View>
        ) : null}

        <View style={estilos.card}>
          <Ionicons name="cube-outline" size={22} color={ICONE} />
          <View style={estilos.cardTexto}>
            <Text style={estilos.cardLinha}>Produto: {pedido.produto}</Text>
            <Text style={estilos.cardLinha}>Quantidade: {pedido.quantidade}</Text>
            <Text style={estilos.cardLinha}>Destino: {pedido.destino}</Text>
            <Text style={estilos.cardLinha}>Endereço: {pedido.endereco}</Text>
            <Text style={estilos.cardLinha}>Recebido: {pedido.recebido}</Text>
            <Text style={estilos.cardLinha}>Previsão: {pedido.previsao}</Text>
            <Text style={estilos.statusPedido}>{pedido.status}</Text>
          </View>
        </View>

        {emRota ? (
          <View>
            <Text style={estilos.tituloSecao}>Atualizações</Text>
            {atualizacoes.map((aviso) => (
              <View key={aviso.id} style={estilos.card}>
                <Ionicons name="notifications-outline" size={22} color={ICONE} />
                <View style={estilos.cardTexto}>
                  <Text style={estilos.cardTitulo}>{aviso.titulo}</Text>
                  <Text style={estilos.cardLinha}>{aviso.texto}</Text>
                  <Text style={estilos.dataCard}>{aviso.data}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : null}
      </ScrollView>

      <Rodape ativa={2} titulo="Em rota" texto="Seu pedido está a caminho." />
    </Tela>
  );
}
