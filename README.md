# 🚚 LogiTrack

O **LogiTrack** é um aplicativo mobile de rastreamento e gerenciamento de entregas, desenvolvido com **React Native + Expo**.

O projeto tem como objetivo oferecer uma interface simples e intuitiva para consultar pedidos, acompanhar o andamento das entregas, receber notificações e cadastrar novos pedidos.

---

## 📱 Sobre o projeto

O LogiTrack foi pensado para facilitar o acompanhamento de entregas em um único aplicativo.

Por meio dele, o usuário poderá consultar o status de um pedido e acompanhar cada etapa do processo, desde o recebimento até a entrega no destino.

Além do rastreamento, o sistema também possui funcionalidades voltadas ao gerenciamento e cadastro de pedidos.

---

## ✨ Funcionalidades

- 🔐 Login de usuário
- 🔎 Consulta de pedidos pelo número
- 🚚 Rastreamento de entregas
- 📍 Acompanhamento das etapas do pedido
- 📦 Visualização das informações do produto
- 🏠 Visualização do destino da entrega
- 📅 Previsão de entrega
- 🔔 Notificações sobre alterações no pedido
- ➕ Cadastro de novos pedidos
- 📱 Interface responsiva para dispositivos móveis

---

## 🖥️ Telas

### 🔐 Login
Permite que o usuário acesse sua conta para acompanhar seus pedidos.

### 🔎 Rastrear Pedido
O usuário informa o número do pedido para consultar seu status.

### 🚚 Acompanhamento do Pedido
Exibe as etapas da entrega, como:

- Recebido
- Em preparação
- Em transporte
- Saiu para entrega
- Entregue

Também apresenta informações sobre o produto, destino e previsão de entrega.

### 🔔 Notificações
Exibe atualizações importantes relacionadas às entregas, como saída para entrega e confirmação de pedido entregue.

### ➕ Novo Pedido
Permite cadastrar um novo pedido informando:

- Produto
- Quantidade
- Endereço de entrega
- Previsão de entrega

---

## 🛠️ Tecnologias utilizadas

O projeto está sendo desenvolvido utilizando:

- React Native
- Expo
- TypeScript
- Expo Router
- React Native DateTimePicker
- React Native Picker
- Expo Vector Icons

---

## 📂 Estrutura do projeto

```text
LogiTrack/
│
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── login.tsx
│   ├── rastrear.tsx
│   ├── pedido.tsx
│   ├── notificacoes.tsx
│   └── novo-pedido.tsx
│
├── components/
│   ├── Header.tsx
│   ├── Input.tsx
│   ├── Button.tsx
│   └── StatusStep.tsx
│
├── assets/
│   └── images/
│
├── constants/
│   └── colors.ts
│
├── package.json
└── tsconfig.json
```

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd LogiTrack
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o Expo

```bash
npx expo start
```

Para executar diretamente no navegador:

```bash
npx expo start --web
```

Também é possível testar em um dispositivo móvel utilizando o aplicativo **Expo Go**.

---

## 🎨 Interface

O LogiTrack utiliza uma identidade visual simples e moderna, com predominância de azul e branco.

A interface foi projetada priorizando:

- facilidade de navegação;
- organização das informações;
- legibilidade;
- experiência do usuário;
- visualização rápida do status das entregas.

---

## 📌 Status do projeto

🚧 **Em desenvolvimento**

Funcionalidades e telas ainda poderão ser adicionadas ou modificadas durante o desenvolvimento.

---

## 🔮 Próximas etapas

- [ ] Desenvolver tela de Login
- [ ] Desenvolver tela de rastreamento
- [ ] Desenvolver acompanhamento do pedido
- [ ] Desenvolver tela de notificações
- [ ] Desenvolver cadastro de pedidos
- [ ] Implementar navegação entre as telas
- [ ] Implementar autenticação
- [ ] Criar banco de dados
- [ ] Desenvolver API / Back-end
- [ ] Integrar Front-end e Back-end
- [ ] Implementar rastreamento dos pedidos
- [ ] Realizar testes

---

## 👩‍💻 Desenvolvimento

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento de aplicações mobile.

**Letícia Viviane**

---

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.
