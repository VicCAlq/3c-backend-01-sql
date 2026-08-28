Data de atualização: Dia 28/8/2026 às 11:8 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| respostas.js - R1 | Resposta r1 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R1 | consulta a tabela clientes | ✅ | ❌ | AssertionError: expected 'seletc * from cliente where cidade in…' to match /from\s+clientes/i |
| respostas.js - R1 | filtra pela coluna cidade com IN | ✅ | ✅ | Sem erros |
| respostas.js - R1 | inclui as cidades Jaboatão dos Guararapes e Olinda | ✅ | ✅ | Sem erros |
| respostas.js - R2 | Resposta r2 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R2 | consulta a tabela produtos selecionando nome e preço | ✅ | ✅ | Sem erros |
| respostas.js - R2 | ordena por preço em ordem decrescente (DESC) | ✅ | ❌ | AssertionError: expected 'select nome, preco from produtos orde…' to match /order\s+by\s+preco\s+desc/i |
| respostas.js - R3 | Resposta r3 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R3 | consulta a tabela pedidos | ✅ | ✅ | Sem erros |
| respostas.js - R3 | filtra data_pedido entre 2025-10-01 e 2025-11-30 | ✅ | ❌ | AssertionError: expected 'select data_pedido, status from pedid…' to match /2025-10-01/ |
| respostas.js - R4 | Resposta r4 deve ser uma string | ✅ | ✅ | Sem erros |
| respostas.js - R4 | usa a tabela de ligação itens_pedido para juntar pedidos e produtos | ✅ | ❌ | AssertionError: expected 'select \npr.nome,\npr.vendedor,\npr.p…' to match /from\s+pedidos/i |
| respostas.js - R4 | define as condições de junção pelas chaves estrangeiras | ✅ | ✅ | Sem erros |
