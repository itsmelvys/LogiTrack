# LogiTrack

O LogiTrack é um app de rastreamento de entregas. A ideia é simples: a pessoa entra na conta, vê o pedido mais recente e acompanha o que está acontecendo com a encomenda — se já foi recebida, se está em rota, se chegou ou se foi cancelada.

O projeto foi feito com **Expo** (SDK 57) e **React Native**. As telas estão em JavaScript, na pasta `src/app`. Não tem servidor nem banco de dados: os pedidos, status e avisos são dados de exemplo, só para mostrar o fluxo na interface.

## O que dá para fazer no app

Depois do login (nome, e-mail e senha), a primeira tela é o **Início**, com o pedido mais recente e o status atual.

Dali dá para:

- rastrear um pedido pelo número
- ver o pedido **em rota**, com um acompanhamento que avança sozinho na tela (é simulado, não é GPS de verdade)
- receber atualizações com o nome de quem entrou
- abrir **Meus pedidos**, separado em pastas de concluídos e cancelados
- cadastrar um pedido novo (só no visual; nada é gravado)
- reportar um problema em um pedido, pelo menu de três pontinhos no card

O menu (ícone de três linhas no canto esquerdo do cabeçalho) leva para essas telas. Login, menu e início não têm botão de voltar; nas demais telas a seta aparece no topo.

Há também um protótipo antigo em HTML/CSS na pasta `html`, caso alguém queira abrir o login e o rastreio direto no navegador, sem o Expo.

## Como rodar

Precisa ter Node.js instalado.

```bash
npm install
npm start
```

Com o Expo aberto, dá para testar no celular (Expo Go), no emulador Android, no simulador iOS ou no navegador (tecla `w`).

Outros atalhos:

```bash
npm run android
npm run ios
npm run web
```

## Estrutura (bem por cima)

- `src/app` — telas (login, início, rastrear, pedido, notificações, etc.)
- `src/componentes` — cabeçalho, menu do pedido, rodapé
- `src/dadosPedidos.js` — lista de pedidos de vitrine
- `src/estilos.js` — cores e layout
- `html` — versão estática das primeiras telas

## Licença

Este projeto não possui licença de código aberto.

Todos os direitos são reservados à autora. Não é permitida a cópia,
modificação, distribuição ou utilização deste código sem autorização prévia.
