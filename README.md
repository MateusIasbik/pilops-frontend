✈️ Pilops Frontend

Frontend do projeto Pilops, desenvolvido em React + TypeScript com Vite e styled-components. O sistema consome a API do backend (Render) e exibe:

📋 Lista de voos (com dados vindos da API)

📑 Detalhes de cada voo ao clicar em um card

🎨 Estilização com styled-components

🎬 Animação de loading com Lottie

Deploy disponível em: Pilops Frontend (Vercel)

---

🚀 Tecnologias utilizadas

React + TypeScript

Vite

styled-components

React Router DOM

Axios

Lottie React

---

📦 Pré-requisitos

Antes de começar, você precisa ter instalado na sua máquina:

Node.js (versão 18 ou superior recomendada)

npm

---

⚙️ Como rodar o projeto localmente

Clonar o repositório

bash
git clone https://github.com/seu-usuario/pilops-frontend.git
cd pilops-frontend
Instalar dependências

bash
npm install
ou

bash
yarn install

--

Configurar variáveis de ambiente Crie um arquivo .env na raiz do projeto com a URL do backend:

.env
VITE_API_BASE_URL=https://seu-backend.onrender.com

--

Rodar em ambiente de desenvolvimento

bash
npm run dev

--

O projeto estará disponível em: 👉 http://localhost:5173

--

Gerar build de produção

bash
npm run build
Pré-visualizar build

bash
npm run preview

---

🗂 Estrutura do projeto
Código
src/
 ├─ components/       # Componentes reutilizáveis (Top, Historical, Flight, FlightDetails)
 ├─ api.tsx           # Configuração do Axios
 ├─ App.tsx           # Definição de rotas e lógica principal
 ├─ main.tsx          # Ponto de entrada do React
 └─ types.ts          # Tipos TypeScript (Flight, Aircraft, etc.)

---

🌐 Deploy

O projeto está configurado para deploy na Vercel.

Build command: npm run build

Output directory: dist

---

✨ Funcionalidades

Listagem de voos consumindo a API

Navegação entre lista e detalhes com React Router

Layout responsivo com styled-components

Animação de loading com Lottie

Deploy contínuo na Vercel

---

Desenvolvido por Mateus