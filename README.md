<div>
  <h1>Task - API</h1>

  <p>Api criada utilizando TypeScrip, Nest e Graphql, banco de dados utilizado MySql</p>

  <h2>Instruções</h2>
  <ul>
    <li>Criar um database Produtos</li>
    <li>Baixar as dependências com o comando "yarn" ou "npm install"</li>
    <li>Rodar a Api com o comando "yarn start" ou "npm run start"</li>
    <li>Abrir o navegador no endereço: http://localhost:3000/graphql</li>
  </ul>

  <h2>Realizando consultas</h2>
  ```
  {
    BuscarProdutos{
      ID
      nome_do_produto
      fabricante
      quantidade_em_estoque
      valor
    }
  }
  ```
  <p>retorna todos os produtos cadastrados trazento as informações solicitadas</p>

```
{
  BuscarProdutos{
    ID
    nome_do_produto
    fabricante
    quantidade_em_estoque
    valor
  }
}
```

</div>
