
/*------------------------------- AULA 01 -------------------------------*/

// var nome = "Daniel Marques";
// var idade = 23;
// var idade1 = 25;
// var frase = "A leste não fornece estágio";
// var fraseExm = "";

// //alert("Olá! " + nome + " vc tem a idade: " + idade);
// //alert(idade + idade1)
// console.log(idade + idade1);
// console.log(frase.replace("e","experiência"));       // Substitui a string selecionada, 
// console.log(frase.toUpperCase());                    // Para maiúscula
// console.log(frase.toLowerCase());                    //Para minúscula
// console.log(frase.split(" "))                        // Separa uma String por um valor passado, e os armazena em um Array

/*------------------------------- AULA 02 -------------------------------*/

/*---- ARRAYS ----*/

// var frutas = ["Pêra","Maça","Uva","Banana"]         // Array Em Javascript
// console.log(frutas[1])                              // Posição de um item em um Array
// frutas.push("Pão")                                  // Adição de um elemento no Array
// console.log(frutas)                                 // Exibição do Array
// frutas.pop()                                        // Dropa o último item do Array
// console.log(frutas.toString())                      // Passa um Array para String
// console.log(frutas[1][2])                           // Cada String Acessada vira um Array
// console.log(frutas.join(" e "))                     // Também transforma todo o Array em String, mas seta uma separador

/*---- DICIONÁRIO ----*/

// let frutas = {nome:"maça", cor:"Vermelha"}          // Um dicionário Comum
// console.log(frutas.nome)                            // Acessando o item de um dicionário

/*---- CONJUNTO DE DICIONÁRIO ----*/

// let pessoas = [
//     {nome:"Daniel", idade:23},
//     {nome:"Pedro", idade:22},
//     {nome:"Sofia", idade:18},
//     {nome:"Magda", saldo:454}
// ]
// console.log(pessoas[3].saldo)                           // Acessando o item(propriedade) de um dicionário

/*------------------------------- AULA 03 -------------------------------*/


/*---- ESTRUTURAS CONDICIONAIS ----*/

// var idade = prompt("Qual sua idade?")

// if (idade >= 18){
//     alert("Você é maior de idade!")
//     alert("Sua idade é: " + idade)
// }else {
//     alert("você não é menor de idade!")
//     alert("Sua idade é: " + idade)
// }

/*---- WHILE ----*/

// // Lendo um Array de trás para Frente
// var pessoas = ["João","Pedro","Anna"]
// count = pessoas.length
// alert(count)

// while (true){
    
//     alert(pessoas[count -1] + "Deixou a Sala")
//     --count

//     if (count === 0){
//         break
//     }
// }

/*---- WHILE1 ----*/

// var pessoas = ["Natália","Roberto","Carla","Alexandre"]

// while (true){

//     alert("O próximo da fila é: " + pessoas[pessoas.length -1])
//     pessoas.pop()

//     if (pessoas.length === 0){
//         alert("A fila ficou vazia!")
//         break
//     }
// }


/*---- FOR LOOP ----*/

// var count;
// for (count = 0; count <= 5; count++){
//     alert("O count vale: " + count);
// };


/*---- FUNÇÕES DATE ----*/

// var date = new Date() // Instânciação da Classe Date, permite a chamada de várias formatações de datas/anos/dias/horas
// alert(date.getHours())


/*------------------------------- AULA 03 -------------------------------*/



/*---- FUNÇÕES ----*/

// function soma(n1, n2){  // Soma dois Inteiros
//     var res = n1 + n2
//     return res
// }

// function firstUpper(phrase){ // Primeira Letra de uma frase maiúscula

//     var phrase = phrase.substring(0,1).toUpperCase().concat(phrase.substring(1));
   
//     alert(phrase)
// }


// function setReplace(phrase, word, new_word){

//     phrase = phrase.toUpperCase()
//     word = word.toUpperCase()
//     var res = phrase.replace(word, new_word)
//     res = res.toLowerCase()
    
//     return res
// }
// firstUpper("palavra cantada")
// alert(soma(12, 18))

// alert(setReplace("Pega o Jooj", "pega", "Captura"))

/*------------------------------- AULA 04 -------------------------------*/

var that = this
alert(that.Date())

function validateNumber(){  // Função que não permite números e nem campos vazios
   
    var msg = document.getElementById("texto").value


    for (letra of msg){

        if (!isNaN(letra)){

            alert("Números não são permitidos!")
            document.getElementById("texto").value=""
            return;
        }

    }if (msg === ""){

        alert("Você não digitou nada!")
        document.getElementById("texto").value=""

    }else if (!isNaN(msg)){
        
        alert("É um número!")
        document.getElementById("texto").value=""

    }else if (msg != ""){

        alert("Você Digitou: " + msg)   
        document.getElementById("texto").value=""

    }

    document.getElementById("muda").innerHTML = "Obrigado!"
    
    
}

function redirect(){        // Redireciona para um site
   // window.open("https://www.google.com.br/") // Abre uma nova guia
    window.location.href = "https://www.google.com.br/" // Abre o na mesma guia
}

function muda(oEvent){ // oEvent = Faz referência ao próprio objeto o qual pertence
    //document.getElementById("move").innerHTML = "Obrigado por passar por aqui!"
    oEvent.innerHTML = "Obrigado por passar aqui!"
}

function volta(oEvent){ // oEvent = Faz referência ao próprio objeto o qual pertence
    //document.getElementById("move").innerHTML = "Passe o mouve novamente!"
    oEvent.innerHTML = "Passe o mouse novamente!"
}

function mudaNome(oEvent){  // Mostra ou passa um valor quando ocorre alguma alteração
    console.log(oEvent.value)

}