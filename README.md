# FARMACIA CUIDA+

## INTEGRANTES
GUILHERME MATIAS RODRIGUES DE SOUZA RA: 22.122.071-8 </br>
CAIO ARNONI RA 22.221.019-7 </br>
TAINÁ CUNHA BUENO RA 22.119.025-9 

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

<img width="696" height="624" alt="image" src="https://github.com/user-attachments/assets/8fcde019-25d1-4ee6-837d-5ca6ac91d84a" />


# Casos de Uso — Farmácia Cuidar+

---

## UC01 – Gerenciar Estoque

| **Identificação** | **UC01 –Gerenciar Estoque** |
|---|---|
| **Função** | Permitir ao gerente cadastrar, atualizar e monitorar produtos e quantidades disponíveis no estoque. |
| **Atores** | Gerente |
| **Pré-condição** | Gerente autenticado no sistema com permissões administrativas. |
| **Pós-condição** | Estoque atualizado corretamente no sistema. |
| **Fluxo Principal** | **1. Atualizar estoque:**<br>a) Gerente acessa módulo de estoque;<br>b) Seleciona cadastrar ou atualizar produto;<br>c) Informa dados (nome, quantidade, validade);<br>d) Sistema salva informações;<br>e) Sistema confirma atualização. |
| **Fluxo Alternativo** | **2. Produto já existente:**<br>a) Gerente seleciona produto cadastrado;<br>b) Sistema permite apenas atualização de quantidade ou validade;<br>c) Sistema salva alterações. |
| **Fluxo Exceção** | **3. Erro ao salvar dados:**<br>a) Sistema tenta salvar informações;<br>b) Ocorre erro no banco;<br>c) Sistema informa falha ao usuário. |

---
## UC02 – Validação de Receita

| **Identificação** | **UC02 – Validação de Receita** |
|---|---|
| **Função** | Permitir que o cliente envie uma receita médica e que o farmacêutico valide ou rejeite o documento. |
| **Atores** | Cliente, Farmacêutico |
| **Pré-condição** | Cliente autenticado no sistema. |
| **Pós-condição** | Receita registrada como aprovada ou rejeitada e cliente notificado. |
| **Fluxo Principal** | **1. Enviar receita:**<br>a) Cliente acessa opção de envio de receita;<br>b) Cliente envia imagem ou arquivo;<br>c) Sistema registra envio;<br>d) Farmacêutico acessa receitas pendentes;<br>e) Farmacêutico analisa documento;<br>f) Farmacêutico aprova ou rejeita;<br>g) Sistema notifica cliente sobre resultado. |
| **Fluxo Alternativo** | **2. Receita ilegível ou incompleta:**<br>a) Farmacêutico analisa receita;<br>b) Farmacêutico identifica inconsistência;<br>c) Sistema solicita novo envio ao cliente. |
| **Fluxo Exceção** | **3. Erro no upload:**<br>a) Cliente envia arquivo;<br>b) Sistema detecta falha;<br>c) Sistema informa erro;<br>d) Cliente tenta novamente. |

## UC03 – Realizar Compra

| **Identificação** | **UC03 – Realizar Compra** |
|---|---|
| **Função** | Permitir que o cliente selecione produtos, envie receita quando necessário e finalize uma compra pelo aplicativo. |
| **Atores** | Cliente |
| **Pré-condição** | Cliente autenticado no sistema e aplicativo disponível para uso. |
| **Pós-condição** | Pedido registrado com sucesso, pagamento processado e estoque atualizado. |
| **Fluxo Principal** | **1. Comprar produtos:**<br>a) Sistema apresenta lista de produtos;<br>b) Cliente seleciona produtos;<br>c) Cliente adiciona ao carrinho;<br>d) Cliente confirma a compra;<br>e) Sistema processa pagamento;<br>f) Sistema registra pedido;<br>g) Sistema atualiza estoque;<br>h) Sistema exibe confirmação da compra. |
| **Fluxo Alternativo** | **2. Produto com receita obrigatória:**<br>a) Cliente seleciona produto controlado;<br>b) Sistema solicita envio da receita;<br>c) Cliente envia receita;<br>d) Sistema registra receita e continua processo de compra.<br><br>**3. Cancelar compra:**<br>a) Cliente acessa carrinho;<br>b) Cliente remove produtos;<br>c) Sistema atualiza carrinho;<br>d) Cliente pode encerrar processo sem finalizar pedido. |
| **Fluxo Exceção** | **4. Falha no pagamento:**<br>a) Sistema tenta processar pagamento;<br>b) Ocorre erro na transação;<br>c) Sistema informa falha;<br>d) Cliente pode tentar novamente ou cancelar. |

---

# Parte 3 - Interfaces de Software

### UC01 – Gerenciar Estoque
- Interface de Estoque
- Interface de Autenticação

### UC02 – Validação de Receita
- Interface de Receitas
- Interface de Autenticação

### UC03 – Realizar Compra
- Interface de Compras
- Interface de Pagamento
- Interface de Estoque
- Interface de Autenticação
  
---

# Interfaces em Componentes

## Componente 1 — Auth (Autenticação e Sessão)

- Responsabilidade: login, logout, emissão/validação de token, controle de perfil (cliente/gerente/farmacêutico).
- Interfaces fornecidas (provides):
  - IAuth
    - login()
    - logout()
    - validateToken()
    - getUserRole()

---

## Componente 2 — Estoque (Inventário e Validade)

- Responsabilidade: cadastrar/atualizar produto, consultar disponibilidade, alertas de vencimento, baixa de estoque por venda.
- Interfaces fornecidas (provides):
  - IEstoque
    - cadastrarProduto()
    - atualizarProduto()
    - consultarSaldo()
    - baixarEstoque()
    - listarVencimentos()
- Interfaces requeridas (requires):
  - IAuth (para checar permissões)

---

## Componente 3 — Receitas (Upload e Validação Farmacêutica)

- Responsabilidade: envio de receita pelo cliente, fila de pendentes, análise/aprovação/rejeição e registro do status.
- Interfaces fornecidas (provides):
  - IReceitas
    - enviarReceita()
    - listarPendentes()
    - validarReceita()
    - consultarStatus()
- Interfaces requeridas (requires):
  - IAuth (para validar autenticação e permissões)
  - INotificacao (para notificar o cliente sobre aprovação/rejeição)

---

## Componente 4 — Compras (Carrinho e Pedido)

- Responsabilidade: catálogo/listagem, carrinho, criação e confirmação de pedido, integração com pagamento, baixa de estoque.
- Interfaces fornecidas (provides):
  - ICompras
    - adicionarAoCarrinho()
    - removerDoCarrinho()
    - criarPedido()
    - confirmarPedido()
    - consultarPedido()
- Interfaces requeridas (requires):
  - IAuth (cliente autenticado)
  - IEstoque (validar saldo e baixar estoque)
  - IReceitas (quando houver item com receita obrigatória)
  - IPagamento (processar pagamento)

---

## Componente 5 — Pagamento (Gateway Mercado Pago)

- Responsabilidade: criar cobrança, confirmar pagamento, consultar status da transação e integrar com o Mercado Pago.
- Interfaces fornecidas (provides):
  - IPagamento
    - criarCobranca()
    - confirmarPagamento()
    - consultarStatusTransacao()
- Interfaces requeridas (requires):
  - IAuth (garantir vínculo da transação com usuário/sessão)
  - Mercado Pago API (serviço externo)

---

## Componente 6 — Notificações (Push/In-app)

- Responsabilidade: envio de notificações sobre compra, validação de receita e alertas (ex.: vencimento).
- Interfaces fornecidas (provides):
  - INotificacao
    - notificarUsuario()
    - notificarEvento()
- Interfaces requeridas (requires):
  - Serviço de Push/E-mail (externo, ex.: Expo Push Notifications)

---
<br>

# Contratos das Operações (Pré e Pós-condições)

## Componente 1 — Auth (Autenticação e Sessão)

Operação: login(email, senha)

- Pré-condições:
  - email e senha não podem estar vazios.
  - usuário deve existir e estar ativo no sistema.

- Pós-condições:
  - sessão/token válido é gerado e armazenado.
  - perfil do usuário (cliente/gerente/farmacêutico) fica disponível para autorização nas demais operações.

---

## Componente 2 — Estoque (Inventário e Validade)

Operação: atualizarProduto(produtoId, qtd, validade)

- Pré-condições:
  - usuário deve estar autenticado.
  - usuário deve possuir permissão de gerente.
  - qtd deve ser maior ou igual a 0.
  - validade deve ser uma data válida (quando aplicável).
  - produtoId deve existir no sistema.

- Pós-condições:
  - dados do produto (quantidade e/ou validade) são persistidos com sucesso.
  - sistema registra auditoria da alteração (usuário e data/hora).
  - caso a validade esteja próxima do vencimento, um evento de alerta pode ser gerado.

---

## Componente 3 — Receitas (Upload e Validação Farmacêutica)

Operação: validarReceita(receitaId, decisao, motivo)

- Pré-condições:
  - usuário deve estar autenticado.
  - usuário deve possuir permissão de farmacêutico.
  - receitaId deve existir no sistema.
  - a receita deve estar com status PENDENTE.
  - decisao deve ser APROVAR ou REJEITAR.
  - se decisao = REJEITAR, motivo deve ser informado.

- Pós-condições:
  - status da receita é atualizado para APROVADA ou REJEITADA.
  - farmacêutico responsável e data/hora da validação são registrados.
  - cliente é notificado sobre o resultado.

---

## Componente 4 — Compras (Carrinho e Pedido)

Operação: confirmarPedido(pedidoId)

- Pré-condições:
  - usuário deve estar autenticado.
  - usuário deve possuir perfil de cliente.
  - pedidoId deve existir no sistema.
  - pedido deve estar com status EM_ABERTO.
  - todos os itens do pedido devem ter saldo disponível em estoque.
  - se houver item controlado, deve existir receita APROVADA vinculada ao cliente/pedido.

- Pós-condições:
  - pagamento é processado e registrado.
  - se pagamento aprovado, o estoque é baixado automaticamente.
  - pedido muda para status CONFIRMADO (ou PAGO).
  - cliente recebe notificação de confirmação da compra.

---

## Componente 5 — Pagamento (Gateway Mercado Pago)

Operação: confirmarPagamento(transacaoId)

- Pré-condições:
  - transacaoId deve existir no sistema.
  - a transação deve estar com status PENDENTE.
  - dados/assinatura de validação do gateway devem ser válidos.

- Pós-condições:
  - status da transação é atualizado para APROVADO ou RECUSADO.
  - referência do pedido associada à transação é registrada para rastreabilidade.
  - sistema disponibiliza o resultado para o fluxo de compras.

---

## Componente 6 — Notificações (Push/In-app)

Operação: notificarUsuario(userId, mensagem, tipo)

- Pré-condições:
  - userId deve ser válido.
  - mensagem não pode estar vazia.
  - tipo deve ser um valor aceito (ex.: RECEITA_STATUS, COMPRA_STATUS, ALERTA_VENCIMENTO).

- Pós-condições:
  - notificação é registrada no sistema (log/histórico).
  - notificação é enviada ao canal disponível (push/in-app/e-mail).
  - status de entrega é armazenado (sucesso ou falha).

---

## Diagrama de Componentes
<img width="1032" height="536" alt="Captura de tela 2026-03-04 220601" src="https://github.com/user-attachments/assets/e45cc267-2a03-457c-912e-ecf75f93c2a1" />

