import { StyleSheet } from 'react-native';

export const AZUL = '#1E67C6';

export const estilos = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  caixa: {
    flex: 1,
    width: '100%',
    maxWidth: 360,
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  topo: {
    backgroundColor: AZUL,
    paddingHorizontal: 20,
    paddingBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topoTitulo: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  flex: {
    flex: 1,
  },
  conteudo: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 20,
  },
  conteudoCurto: {
    paddingHorizontal: 28,
    paddingTop: 24,
    paddingBottom: 20,
  },
  voltarLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  tituloPedido: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222222',
  },
  etapa: {
    flexDirection: 'row',
    minHeight: 44,
  },
  etapaEsquerda: {
    width: 24,
    alignItems: 'center',
  },
  circulo: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#cfcfcf',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circuloOk: {
    backgroundColor: '#2E9B4F',
    borderColor: '#2E9B4F',
  },
  linhaEtapa: {
    width: 2,
    flex: 1,
    backgroundColor: '#cfcfcf',
    marginVertical: 2,
  },
  linhaOk: {
    backgroundColor: '#2E9B4F',
  },
  etapaTexto: {
    flex: 1,
    paddingLeft: 12,
    paddingBottom: 16,
  },
  etapaNome: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  etapaData: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f3f3f3',
    borderRadius: 10,
    padding: 14,
    marginBottom: 12,
    gap: 12,
  },
  cardTexto: {
    flex: 1,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 2,
  },
  cardLinha: {
    fontSize: 13,
    color: '#555555',
    marginTop: 2,
  },
  rotulo: {
    fontSize: 14,
    color: '#222222',
    marginBottom: 6,
  },
  itemMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingVertical: 16,
  },
  itemMenuTexto: {
    fontSize: 16,
    color: '#222222',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 36,
  },
  caminhao: {
    fontSize: 48,
  },
  nomeApp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E4F96',
    marginTop: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: '#888888',
    marginTop: 4,
  },
  tituloPagina: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 24,
  },
  campo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cfcfcf',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 14,
    backgroundColor: '#ffffff',
  },
  icone: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: '#222222',
  },
  botao: {
    backgroundColor: AZUL,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: AZUL,
    textAlign: 'center',
    marginTop: 16,
    fontSize: 14,
  },
  rodape: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 20,
    alignItems: 'center',
  },
  bolinhas: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  bolinha: {
    width: 8,
    height: 8,
    backgroundColor: '#d0d0d0',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  bolinhaAtiva: {
    backgroundColor: AZUL,
  },
  rodapeTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 6,
  },
  rodapeTexto: {
    fontSize: 13,
    color: '#777777',
    textAlign: 'center',
  },
});
