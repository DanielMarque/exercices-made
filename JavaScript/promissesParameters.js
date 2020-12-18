
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            var deuErro = false
            console.log("Email enviado!")
            
            if(!deuErro){

                resolve({time: 12, to: "daniel.marques@.com"})
                console.log("Tudo Certo!")
            }else{

                reject("Fila Cheia")
            }
        }, 2500)
    })
}

enviarEmail("Lorem ipsun sit amet color dolor", "daniel@marques.com").then((tempo) => {  // Só é executado quando a promisse é cumprida
    console.log(`

    Email Recebido!
    -----------------------------------
    Para: ${tempo.to}
    -----------------------------------
    O tempo de envio foi ${tempo.time}s
    --------------------------------------
    
    `)
    console.log("OPA, Você conseguiu fazer o que foi prometido!")
}).catch(() => {        // Executado quando a promisse não é cumprida

    console.log("Que Pena, Não funcionou!")
})