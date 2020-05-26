
const express = require("express");//importando o expres
const app = express();//express função que carrega todo o framework no projeto


//trabalhando com rotas chamar apenas uma requisição por rota!
app.get("/", function(req, res){
  res.send("Bem vindo a página inicial!");
});

app.get("/blog", function(req, res){
  res.send("Bem Vindo ao meu blog!");
});

app.get("/canal", function(req, res){
  res.send("Bem Vindo ao meu canal!");
});


//Chamando o servidor na porta 4000

app.listen(4000,function(erro){
  if(erro){
    console.log("Ocorreu um erro!");

  }else{
    console.log("Servidor iniciado com sucesso!");
  }
})