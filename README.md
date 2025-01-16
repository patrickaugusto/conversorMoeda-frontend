# Conversor de Moedas - Front-End React 🚀💰

## Descrição 🌍

Este projeto é uma interface simples e responsiva para um conversor de moedas, construída com React e estilizada com CSS. A aplicação consome uma API back-end para realizar conversões de moedas em tempo real, permitindo que o usuário insira valores e escolha moedas de origem e destino.

---

## Funcionalidades ✨

- **Seleção de moedas**: Lista de moedas disponíveis para conversão.
- **Conversão em tempo real**: Exibe o resultado ao lado do seletor de moeda de destino.
- **Atualização automática**: Mostra a data e hora da última atualização das taxas de câmbio.

---

## Tecnologias Utilizadas ⚙️

- **React**: Biblioteca JavaScript para a criação de interfaces.
- **Axios**: Para requisições HTTP.
- **CSS**: Para estilização da aplicação.

---

## Como Executar 🛠️

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute o projeto:
   ```bash
   npm run dev
   ```

---

## Deploy no Vercel 🌐

A aplicação está disponível online no Vercel. Acesse diretamente o link para testar a funcionalidade do conversor de moedas:

[**Clique aqui para acessar**]([https://seu-app.vercel.app](https://conversor-moeda-seven.vercel.app/)) ✨

---

## Integração com a API 💸

A aplicação consome uma API de back-end que realiza a lógica de conversão de moedas. A API oferece suporte às seguintes funcionalidades:

- **Conversão de moedas** com base em valores e moedas fornecidos.
- **Atualização de taxas** em tempo real.

### Principais Endpoints da API 🛠️

- **POST /api/conversor/converter**  
  Realiza a conversão entre duas moedas.  
  **Corpo da requisição**:
  ```json
  {
    "valor": 100.0,
    "moedaOrigem": "BRL",
    "moedaDestino": "USD"
  }
  ```
  **Exemplo de resposta**:
  ```json
  {
    "valorConvertido": 16.53,
    "ultimaAtualizacao": "16/01/2025 00:00:01"
  }
  ```
