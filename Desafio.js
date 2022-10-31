/* Desafio:
1. Crie uma função que solicite dois valores ao usuário, um nome e uma senha e
guarde cada um no seu respectivo array.
2. Crie uma função que solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer
login, excluir um cadastro ou encerrar o programa. Essa função deve retornar a
opção escolhida pelo usuário.
3. Crie uma função de login e recebe dois valores como parâmetro, um nome e uma
senha, depois procure o nome recebido no array de nomes e em caso positivo
compare a senha no array de senhas. Se as duas comparações forem válidas
retorne true se uma delas não for válida retorne false.
4. Crie uma função de exclusão de cadastro que recebe um nome como parâmetro,
então procure pelo nome no array de nomes e exclua ele e a senha correspondente
do outro varray, por fim organize o array para eliminar os espaços vazios.
5. Utilizando as funções criadas, faça o fluxo de funcionamento do código, considere
que o usuário pode escolher quando encerrar o programa conforme as opções e
que no login caso seja bem sucedido retorna uma mensagem “Login feito com
sucesso!” e em caso negativo “Nome ou senha incorretos!” */

var nome = []
var senha = []
var index = 0

var opcao = ""
var condicao = 1

while(condicao == 1){
    DesejaFazer()

}

function PedirNomeESenha(){
    nome[index] = prompt ("Digite o seu nome:")
    senha[index] = prompt ("Digite uma senha:")
    index++
}

function DesejaFazer(){
    opcao = prompt("O que você deseja fazer: 1- cadastrar, 2- fazer login, 3- excluir um cadastro ou 4- encerrar o programa")
    if (opcao == "1"){
        PedirNomeESenha()
        console.log("Cadastro Realizado com Sucesso!")
    } else if (opcao == "2"){
        login(nome, senha)
    } else if (opcao == "3"){
        var nome = prompt ("Insira um nome de Cadastro para ser excluído.")
        ExcluirCadastro(nome)
        console.log("Cadastro excluido com Sucesso!")
    } else if (opcao == "4"){
        condicao = 2
        console.log("Fim do programa!")
    }
    return opcao
}

function login(nome, senha){
    var nomeLogin = prompt("Digite o seu Login")
    var senhaLogin = prompt("Digite a sua senha")   
        for (var index1 = 0; index1 < nome.length; index1++) {
            
            if(nomeLogin == nome[index1] && senhaLogin == senha[index1]){
        
                console.log("Login feito com sucesso!")
                return true
            } else{
                console.log("Nome ou senha incorretos!")
                return false
            }
        }              
                       
}


var nomeSup = []
var senhaSup = []
var index2 = 0

function ExcluirCadastro(nome){
    for (var index1 = 0; index1 < nome.length; index1++) {
        if (nome == nome[index1]){
            nome[index1] = 0
            senha[index1] = 0
        }        
    }

    for (var index1 = 0; index1 < nome.length; index1++) {
        if (nome[index1] != 0){
            nomeSup[index2] = nome[index1]
            senhaSup[index2] = senha[index1]
            index2++
        }
        
    }

    nome = nomeSup
    senha =senhaSup
}
    




