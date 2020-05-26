
const express = require("express");//importando o expres
const app = express();//express função que carrega todo o framework no projeto


//trabalhando com rotas chamar apenas uma requisição por rota!
app.get("/", function(req, res){
  res.send("<h1>Bem vindo a página inicial!</h1>");
});

//parametro opicional coloca "?"
app.get("/blog/:artigo?", function(req, res){

  //ira aparecer apenas se um parâmetro existir
  var artigo = req.params.artigo;
  if(artigo){
    res.send("<h2>Artigo: " + artigo + "</h2>")

  }else{

  }
  res.send("Bem Vindo ao meu blog!");
});

app.get("/canal", function(req, res){
  res.send("Bem Vindo ao meu canal!");
});

app.get("/ola/:nome/:empresa", function (req, res){
  //req => dados enviados pelo usuário
  //res => resposta que vai ser retornada para o usuário
  //params enviado pelo usuário
  var nome = req.params.nome;
  var empresa = req.params.empresa;
  res.send("<h1> Oi " + nome + " do " + empresa + " </h1>");
});


//Chamando o servidor na porta 4000

app.listen(4000,function(erro){
  if(erro){
    console.log("Ocorreu um erro!");

  }else{
    console.log("Servidor iniciado com sucesso!");
  }
})