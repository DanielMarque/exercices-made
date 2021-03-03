

function enviarEmail(corpo, dest, callback){

    setTimeout(() =>{

       //Lógica do programa
       var erro = true

        if(erro){
            callback(12 ,"404")
        }else{
            callback(12)
        }
        
    }, 3000)
}


console.log("Ok! Email enviado!")
console.log("Seu email chegará em breve!")
enviarEmail("Lorem Ipsum, Dolo sit amet", "Daniel", (time, erro) => {

        if(erro == undefined){
            console.log("Email recebido com sucesso!")   
            console.log(`Tempo de envio ${time}s`)
        }else{
            console.log("Ocorreu um erro:" + erro)
        }
})

