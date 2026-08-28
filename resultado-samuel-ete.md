Data de atualização: Dia 28/8/2026 às 11:9 

| Questão | Teste | Entregue | Correto | Mensagem de Erro |
|---------|-------|----------|---------|------------------|
| respostas.js - R1 | Resposta r1 deve ser uma string | ✅ | ❌ | AssertionError: "r1" não pode ser vazia: expected 0 to be greater than 0 |
| respostas.js - R1 | consulta a tabela clientes | ✅ | ❌ | AssertionError: expected '' to match /from\s+clientes/i |
| respostas.js - R1 | filtra pela coluna cidade com IN | ✅ | ❌ | AssertionError: expected '' to match /where\b/i |
| respostas.js - R1 | inclui as cidades Jaboatão dos Guararapes e Olinda | ✅ | ❌ | AssertionError: expected '' to match /["']jaboatão\s+dos\s+guararapes["']/i |
| respostas.js - R2 | Resposta r2 deve ser uma string | ✅ | ❌ | AssertionError: "r2" não pode ser vazia: expected 0 to be greater than 0 |
| respostas.js - R2 | consulta a tabela produtos selecionando nome e preço | ✅ | ❌ | AssertionError: expected '' to match /from\s+produtos/i |
| respostas.js - R2 | ordena por preço em ordem decrescente (DESC) | ✅ | ❌ | AssertionError: expected '' to match /order\s+by\s+preco\s+desc/i |
| respostas.js - R3 | Resposta r3 deve ser uma string | ✅ | ❌ | AssertionError: "r3" não pode ser vazia: expected 0 to be greater than 0 |
| respostas.js - R3 | consulta a tabela pedidos | ✅ | ❌ | AssertionError: expected '' to match /from\s+pedidos/i |
| respostas.js - R3 | filtra data_pedido entre 2025-10-01 e 2025-11-30 | ✅ | ❌ | AssertionError: expected '' to match /data_pedido/i |
| respostas.js - R4 | Resposta r4 deve ser uma string | ✅ | ❌ | AssertionError: "r4" não pode ser vazia: expected 0 to be greater than 0 |
| respostas.js - R4 | usa a tabela de ligação itens_pedido para juntar pedidos e produtos | ✅ | ❌ | AssertionError: expected '' to match /from\s+pedidos/i |
| respostas.js - R4 | define as condições de junção pelas chaves estrangeiras | ✅ | ❌ | AssertionError: expected '' to match /pedido_id/i |
