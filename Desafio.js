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
var IndexNomeSenha = 0
var arraySuporte = []
var indexSup = 0

var opcao = ""
var index = 0
var condicao = 1

while(condicao == 1){
    DesejaFazer()

}

function PedirNomeESenha(){
    nome[IndexNomeSenha] = prompt ("Digite o seu nome:")
    senha[IndexNomeSenha] = prompt ("Digite uma senha:")
    IndexNomeSenha++
}

function DesejaFazer(){
    opcao = prompt("O que você deseja fazer: 1- cadastrar, 2- fazer login, 3- excluir um cadastro ou 4- encerrar o programa")
    if (opcao == "1"){
        PedirNomeESenha()
    } else if (opcao == "2"){
        login(nome, senha)
    } else if (opcao == "3"){
        ExcluirCadastro(nome, senha)
    } else if (opcao == "4"){
        condicao = 2
        console.log("Fim do programa!")
    }
    return opcao
}

function login(nome, senha){
    var nomeLogin = prompt("Digite o seu Login")
    var senhaLogin = prompt("Digite a sua senha")   
        for (var index = 0; index < IndexNomeSenha; index++) {
            
            if(nomeLogin == nome[index] && senhaLogin == senha[index]){
                console.log("Login feito com sucesso!")
                return true
            } else{
                console.log("Nome ou senha incorretos!")
                return false
            }
        }
        
            
}

function ExcluirCadastro(nome){
    var NomeExcluir = prompt("Digite o nome do cadastro que deseja excluir:")
    for (var index = 0; index < IndexNomeSenha; index++) {
        if(NomeExcluir[index] == nome[IndexNomeSenha]){
            arraySuporte[indexSup] = nome[IndexNomeSenha]
        }
        
    }
}




