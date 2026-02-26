# FARMACIA CUIDA+

## INTEGRANTES
GUILHERME MATIAS RODRIGUES DE SOUZA RA: 22.122.071-8 </br>
CAIO ARNONI RA 22.221.019-7 </br>
TAINA CUNHA BUENO RA 22.119.025-9 

## 1. Objetivo do Laboratório

## Cuidar+ | Farmácia e Saúde 💚💊
  
A Cuidar+ nasce com um propósito simples e poderoso: ir além da venda e oferecer cuidado de verdade.

Trabalhamos com medicamentos, dermocosméticos, suplementos, produtos ortopédicos e itens de cuidado diário — sempre com curadoria técnica e acompanhamento farmacêutico.

Na Cuidar+, acreditamos que saúde não é apenas tratar sintomas, mas prevenir, orientar e estar presente. Por isso, oferecemos:

- Atendimento farmacêutico personalizado
- Orientação sobre uso correto de medicamentos
- Espaço organizado, acessível e humanizado

Mais do que uma farmácia, somos um ponto de apoio à comunidade. Um espaço onde o cuidado é prioridade, a escuta é ativa e a confiança é construída todos os dias.

Cuidar+  porque saúde é mais do que produto, é presença. 💚

## 2. Definição do Domínio do Sistema
### Descrever, em poucas linhas:
* Qual é o domínio do sistema? </br>
Sistema de gestão e apoio operacional para uma farmácia física com foco em atendimento humanizado e controle de vendas. </br>

* Qual problema real ele resolve? </br>
Controle ineficiente de estoque </br>
Falta de organização no cadastro de clientes </br>
Dificuldade em acompanhar vendas </br>
Falta de registro de atendimentos farmacêuticos </br>
Risco de perda por vencimento de medicamentos </br>

* Quem são os principais usuários? </br>
Farmacêutico responsável </br>
Atendentes da farmácia </br>
Gerente / proprietário </br>


## 3. Visão Geral do Sistema
### Preencher os itens abaixo:
* Nome do sistema: </br>
  Farmacia Cuidar+ </br>
  
* Usuários principais:</br>
Farmacêuticos </br>
Atendentes </br>
Gerente da unidade </br>

* Principais funcionalidades (alto nível)</br>
Cadastro de clientes</br>
Cadastro e controle de medicamentos</br>
Controle de estoque com alerta de vencimento</br>
Registro de vendas</br>
Registro de atendimentos farmacêuticos</br>
Relatórios de vendas e produtos mais vendidos</br> 
Controle de caixa</br>


## 4. Identificação dos Processos de Negócio
## Identificar de 2 a 4 processos principais do domínio.
## Para cada processo, descrever:
🔹 Processo 1: Venda de Medicamento

Entrada:
Solicitação do cliente / Receita médica

Saída:
Venda registrada e atualização do estoque

Atores envolvidos:
Cliente
Atendente
Sistema

🔹 Processo 2: Controle de Estoque

Entrada:
Cadastro de novos produtos / Entrada de mercadoria

Saída:
Atualização de estoque / Alerta de vencimento

Atores envolvidos:
Gerente
Farmacêutico
Sistema

🔹 Processo 3: Atendimento Farmacêutico

Entrada:
Solicitação de orientação do cliente

Saída:
Registro de atendimento no sistema

Atores envolvidos:
Farmacêutico
Cliente
Sistema

🔹 Processo 4: Geração de Relatórios Gerenciais

Entrada:
Dados de vendas e estoque

Saída:
Relatórios de desempenho

Atores envolvidos:
Gerente
Sistema
## 5. Diagrama Simplificado de Processo

<img width="571" height="642" alt="image" src="https://github.com/user-attachments/assets/93a79161-7c2c-4beb-8702-764bc42f34c5" />


## 6. Preparação do Ambiente
* Criar repositório do projeto (Git)
* Definir linguagem e framework </br>
React </br>
EXPO GO </br>
* Registrar essas decisões no README

--------------------------------------
# Parte 2

#  Parte 1 – Identificação de Pontos de Reuso

Foram identificados os seguintes pontos de reuso no sistema:

---

##  Estrutura Base do Aplicativo Mobile
- **Framework:** React Native + Expo  

O uso do React Native com Expo permite reutilização de componentes, desenvolvimento multiplataforma e acelera a criação do aplicativo.

---

##  Componentes de Formulário (Clientes, Produtos, Vendas)
- **React Hook Form** → gerenciamento de formulários  
- **Yup** → validação de dados  

Permite reaproveitar regras de validação e reduzir repetição de código em diferentes cadastros.

---

##  Autenticação de Usuários
- **Backend:** Node.js + Express  
- **Banco de Dados:** Firebase (Firestore + Authentication)  
- **Biblioteca:** JWT (JSON Web Token)  

Utiliza padrão moderno de autenticação com API REST e controle de sessão seguro.

---

##  Sistema de Navegação (Busca / Catálogo)
- **Biblioteca:** React Navigation  

Organiza o fluxo entre telas e permite separação lógica entre módulos.

---

##  API de Pagamento Online
- **API Externa:** Mercado Pago  

Reuso de serviço financeiro consolidado, evitando desenvolvimento de sistema próprio de pagamento.

---

##  Controle de Estoque e Alertas de Vencimento
- **Banco:** Firebase (Firestore)  
- **Biblioteca:** date-fns  

Permite cálculo de vencimentos e gerenciamento de estoque de forma organizada.

---

##  Geração de Relatórios
- **Banco:** Firebase  
- **Biblioteca:** React Native Chart Kit  

Permite geração de gráficos (linha, barra e pizza) para visualização de vendas e controle de estoque.

---

#  Parte 2 – Análise de Critérios Técnicos e Arquiteturais

---

##  React Native + Expo (Framework Mobile)

### Critérios Técnicos
- Ampla utilização no mercado  
- Boa documentação  
- Comunidade ativa  
- Compatibilidade com JavaScript  

### Critérios Arquiteturais
- Arquitetura modular baseada em componentes  
- Redução do tempo de desenvolvimento  
- Facilidade de manutenção e evolução futura  

---

##  Node.js + Express (Backend)

### Critérios Técnicos
- Leve e amplamente utilizado  
- Fácil integração com aplicações React  
- Grande ecossistema de bibliotecas  

### Critérios Arquiteturais
- Separação clara entre frontend e backend  
- Estruturação via API REST  
- Baixo acoplamento entre camadas  

---

##  Firebase (Firestore + Authentication)

### Critérios Técnicos
- Plataforma moderna e consolidada  
- Integração direta com React Native  
- Backend como serviço (BaaS)  
- Autenticação integrada  

### Critérios Arquiteturais
- Redução da complexidade (sem necessidade de servidor próprio)  
- Escalabilidade automática  
- Sincronização em tempo real  
- Agilidade na implementação  

---

##  React Navigation

### Critérios Técnicos
- Biblioteca oficial do ecossistema React Native  
- Fácil implementação  

### Critérios Arquiteturais
- Organização do fluxo entre telas  
- Separação lógica entre funcionalidades  

---

##  React Hook Form + Yup

### Critérios Técnicos
- Redução de código repetitivo  
- Padronização de validações  

### Critérios Arquiteturais
- Centralização das regras de validação  
- Redução de inconsistências nos dados  

---

##  Mercado Pago (API de Pagamento)

### Critérios Técnicos
- Solução consolidada e segura  
- Conformidade com padrões de segurança  

### Critérios Arquiteturais
- Evita desenvolvimento de sistema financeiro próprio  
- Reduz riscos de segurança  
- Mantém foco no domínio da farmácia  

---

##  React Native Chart Kit

### Critérios Técnicos
- Biblioteca amplamente utilizada  
- Fácil integração com Expo  
- Suporte a gráficos de linha, barra e pizza  
- Boa documentação  

### Critérios Arquiteturais
- Reutilização de componentes de visualização  
- Separação entre lógica (dados Firebase) e apresentação (gráficos)  
- Organização modular do sistema

## Análise Arqueteturial

<img width="829" height="540" alt="image" src="https://github.com/user-attachments/assets/37b7d03c-cc40-45da-a37f-22d9a4494c2b" />

---------------------------------------------------------------------
# Parte 3 - Diagrama de Componentes de Software

<img width="840" height="639" alt="image" src="https://github.com/user-attachments/assets/539cecb1-6ae2-4cc7-a328-56d55f778e97" />

