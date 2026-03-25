<h1 align="center">💰 LoanSim — Simulador de Empréstimos com Juros Compostos</h1>

<p align="center">
  O <strong>LoanSim</strong> é uma aplicação web interativa para simulação de empréstimos, desenvolvida com foco em experiência do usuário, validação de dados e precisão nos cálculos financeiros.
</p>

<p align="center">
  Este projeto foi totalmente desenvolvido por mim, <strong>Jean Pedro</strong>.
</p>

<p align="center">
  <img src="./img/apresentacao.gif" alt="Demonstração LoanSim" width="700px" style="border-radius: 10px; border: 2px solid #22c55e;"/>
</p>

<p align="center">
  <a href="https://jjeanpedro03.github.io/loansim/" target="_blank">
    <img src="https://img.shields.io/badge/💰🚀%20Visualizar%20Projeto-22c55e?style=for-the-badge&logo=javascript&logoColor=white" alt="Visualizar Projeto">
  </a>
</p>

---

## 🎯 Objetivo

Este projeto foi desenvolvido com o objetivo de praticar lógica de programação aplicada a cenários financeiros reais, além de reforçar conceitos de manipulação de DOM, validação de dados e construção de interfaces modernas.

---

## 🚀 Sobre o Projeto

O **LoanSim** permite que o usuário simule um empréstimo de forma simples e intuitiva, informando:

- 💰 Valor do empréstimo  
- 📊 Taxa de juros (%)  
- 📅 Número de parcelas  

A aplicação realiza os cálculos automaticamente e apresenta os resultados de forma organizada, clara e visualmente profissional.

---

## 🛠️ Tecnologias Utilizadas

<p align="left">
  <img src="https://skillicons.dev/icons?i=html,css,js,git" height="40px" />
</p>

- **HTML5:** Estrutura semântica da aplicação  
- **CSS3:** Estilização moderna e responsiva  
- **JavaScript (Vanilla):** Lógica de cálculo, validação e interatividade  
- **Git:** Versionamento do projeto  

---

## ⚙️ Funcionalidades

- **Simulação de Empréstimo:** Cálculo completo com base em juros compostos  
- **Validação de Dados:** Impede execução com campos inválidos  
- **Formatação Inteligente:** Máscara automática para valores em R$ e %  
- **Feedback Visual:** Resultados exibidos em cards organizados  
- **Interação Fluida:** Atualização dinâmica sem recarregar a página  
- **Nova Simulação:** Reset completo com um clique  

---

## 💡 Diferenciais Técnicos

- **Manipulação de DOM:** Criação dinâmica de elementos e eventos  
- **Formatação Profissional:** Uso de `toLocaleString` para padrão monetário brasileiro  
- **Separação de Responsabilidades:** Código organizado entre lógica, eventos e interface  
- **UX Orientada ao Usuário:** Feedback visual claro e intuitivo  
- **Clean Code:** Estrutura simples, legível e escalável  

---

## 🧠 Regra de Negócio

O cálculo é baseado na fórmula de juros compostos:

```math
M = P (1 + i)^n

Onde:

M = Montante final
P = Valor inicial
i = Taxa de juros
n = Número de parcelas
```

## 📂 Estrutura de Pastas

```
simulador-emprestimo/
│
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   └── apresentacao.gif
└── index.html
```

## 🚀 Como Executar

```
# Clonar o repositório
git clone https://github.com/jjeanpedro03/loansim.git

# Acessar a pasta
cd loansim

# Abrir no navegador
index.html
