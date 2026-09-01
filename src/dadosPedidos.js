export const pedidosVitrine = [
  {
    id: '12345',
    produto: 'Notebook',
    quantidade: '1',
    destino: 'São Paulo - SP',
    endereco: 'Av. Paulista, 1000',
    previsao: '15/04/2025',
    status: 'Em rota',
    recebido: '10/04/2025 - 08:00',
  },
  {
    id: '12346',
    produto: 'Smartphone',
    quantidade: '2',
    destino: 'Campinas - SP',
    endereco: 'Rua das Flores, 50',
    previsao: '12/04/2025',
    status: 'Entregue',
    recebido: '08/04/2025 - 09:30',
  },
  {
    id: '12347',
    produto: 'Cadeira gamer',
    quantidade: '1',
    destino: 'Rio de Janeiro - RJ',
    endereco: 'Rua do Catete, 200',
    previsao: '18/04/2025',
    status: 'Em separação',
    recebido: '11/04/2025 - 11:00',
  },
  {
    id: '12348',
    produto: 'Fone de ouvido',
    quantidade: '3',
    destino: 'Belo Horizonte - MG',
    endereco: 'Av. Afonso Pena, 800',
    previsao: '20/04/2025',
    status: 'Recebido',
    recebido: '12/04/2025 - 16:45',
  },
];

export const pedidosCancelados = [
  {
    id: '12320',
    produto: 'Monitor 24"',
    quantidade: '1',
    destino: 'São Paulo - SP',
    endereco: 'Rua Augusta, 300',
    cancelado: '05/04/2025 - 10:12',
    motivo: 'Endereço incompleto',
    status: 'Cancelado',
  },
  {
    id: '12321',
    produto: 'Teclado',
    quantidade: '1',
    destino: 'Santos - SP',
    endereco: 'Av. Ana Costa, 90',
    cancelado: '06/04/2025 - 14:40',
    motivo: 'Solicitado pelo cliente',
    status: 'Cancelado',
  },
  {
    id: '12322',
    produto: 'Mouse sem fio',
    quantidade: '2',
    destino: 'Guarulhos - SP',
    endereco: 'Rua Timóteo, 15',
    cancelado: '07/04/2025 - 09:05',
    motivo: 'Pagamento não confirmado',
    status: 'Cancelado',
  },
];

export const pedidosConcluidos = [
  {
    id: '12346',
    produto: 'Smartphone',
    quantidade: '2',
    destino: 'Campinas - SP',
    endereco: 'Rua das Flores, 50',
    previsao: '12/04/2025',
    status: 'Entregue',
    recebido: '08/04/2025 - 09:30',
    entregue: '12/04/2025 - 16:30',
  },
  {
    id: '12330',
    produto: 'Tablet',
    quantidade: '1',
    destino: 'Osasco - SP',
    endereco: 'Av. dos Autonomistas, 100',
    previsao: '02/04/2025',
    status: 'Entregue',
    recebido: '28/03/2025 - 10:00',
    entregue: '02/04/2025 - 11:20',
  },
];

export function buscarPedido(id) {
  const codigo = String(id || '12345');
  return (
    pedidosVitrine.find((pedido) => pedido.id === codigo) ||
    pedidosConcluidos.find((pedido) => pedido.id === codigo) ||
    pedidosCancelados.find((pedido) => pedido.id === codigo) ||
    pedidosVitrine[0]
  );
}

function dataDoPedido(texto) {
  const [dia, mes, resto] = texto.split('/');
  const [ano, hora] = resto.split(' - ');
  return new Date(`${ano}-${mes}-${dia}T${hora}:00`);
}

export function pedidoMaisRecente() {
  return [...pedidosVitrine].sort((a, b) => dataDoPedido(b.recebido) - dataDoPedido(a.recebido))[0];
}

export function etapasDoPedido(status) {
  const lista = [
    { nome: 'Recebido', data: '' },
    { nome: 'Em separação', data: '' },
    { nome: 'Em rota', data: '' },
    { nome: 'Saiu para entrega', data: '' },
    { nome: 'Entregue', data: '' },
  ];

  const ate = {
    Recebido: 1,
    'Em separação': 2,
    'Em rota': 3,
    'Em transporte': 3,
    'Saiu para entrega': 4,
    Entregue: 5,
    Cancelado: 0,
  };

  const qtd = ate[status] || 1;

  return lista.map((etapa, i) => ({
    ...etapa,
    ok: i < qtd,
  }));
}

export function passosRastreio(nome, pedido) {
  const quem = nome || 'usuário';
  const produto = pedido.produto;
  const codigo = pedido.id;
  const destino = pedido.destino;

  return [
    {
      porcentagem: 20,
      local: 'Centro de distribuição',
      minutos: 45,
      titulo: 'Pedido em rota',
      texto: `${quem}, seu ${produto} #${codigo} saiu do centro de distribuição.`,
    },
    {
      porcentagem: 45,
      local: 'Rodovia',
      minutos: 30,
      titulo: 'Na estrada',
      texto: `${quem}, seu pedido #${codigo} está na rodovia rumo a ${destino}.`,
    },
    {
      porcentagem: 70,
      local: 'Sua cidade',
      minutos: 15,
      titulo: 'Chegando na cidade',
      texto: `${quem}, o ${produto} já está em ${destino}.`,
    },
    {
      porcentagem: 90,
      local: 'Seu bairro',
      minutos: 8,
      titulo: 'No bairro',
      texto: `${quem}, o pedido #${codigo} está no seu bairro.`,
    },
    {
      porcentagem: 95,
      local: 'Próximo ao destino',
      minutos: 3,
      titulo: 'Quase lá',
      texto: `${quem}, seu ${produto} está próximo de ${pedido.endereco}.`,
    },
  ];
}
