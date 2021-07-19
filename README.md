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
  <p>Adiciona um produto e retorna as informações solicitadas</p>
  
  ```mutation{
  AdicionarProduto(
    data:{
      nome_do_produto: "produto03"
      fabricante: "test01"
      quantidade_em_estoque: 3
      valor: 5.99
    }
  )
  {
    nome_do_produto
    fabricante
    quantidade_em_estoque
  }
}
  ```
  <p>Busca um produto por id e retorna as informações solicitadas</p>
  
  ```
  {
BuscarProdutoPorId(id: "2"){
  nome_do_produto
}
}
  ```
<p>Altera um produto retorna as informações solicitadas</p>

  ``` mutation{
  AlterarProduto(
    id:"1"
    data: {
      nome_do_produto:"Cacio"
    }
  ){
    nome_do_produto
    
  }
}
  ```
  
  <p>Deleta um produto</p>
  
  
  ```
  mutation{
  DeletarProduto(id:"1")
}
  ```
  <p>Obtem a quantidade de produtos cadastrados</p>
  
  ```
  {
  ObterQuantidadeProdutos
}
  ```

<p>Obtem o produto com menor estoque e retorna suas informações</p>

```
  {
  ObterProdutoComMenorEstoque{
    nome_do_produto
    quantidade_em_estoque
  }
}
  ```

  
<p>Obtem o produto com maior estoque e retorna suas informações</p>

```
  {
  ObterProdutoComMaiorEstoque{
    nome_do_produto
    quantidade_em_estoque
  }
}
  ```
  
  
<p>Obtem o produtos com estoque menor que 5 e retorna suas informações</p>

  ```
  {
  ObterProdutosSemEstoque{
    nome_do_produto
    quantidade_em_estoque
  }
}
  ```
  
</div>
