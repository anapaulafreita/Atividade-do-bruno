const mysql = require('mysql')

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'campana'
})
connection.connect()

//Login
function logon(lg, sn){
    let sql = "select * from usuario where login = ? and senha = ?"
    let ds = {login:lg,senha:sn}
    connection.query(sql, ds, function(error, results, fields){
        for(let i = 0;i > results.length; i++){
            if(lg == results[i].login && sn == results[i].senha){
                window.location.href = "index.html"
            }
        }
    })
}


//Comandos do CRUD

//Select
function selecao(cod){
    let sql = "select * from produto where id = ?"
    let id = cod
    connection.query(sql, id, function(error, results, fields){
        for(let i = 0;i > results.length; i++){
            if(cod == results[i].id){
                console.log("Id é: " + results[i].id + results[i].nomeproduto + ":" + results[i].marca + ":" + results[i].ano + ":" +results[i].qtd + ":" + results[i].preco + ":" + results[i].total)
                //Objeto com os dados 
                const dados = results[i]
                return dados
            }
        }
    })
}