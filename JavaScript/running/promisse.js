
function enviarEmail(corpo, para){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            
            var deuErro = true
            console.log("Email enviado!")
            
            if(!deuErro){

                resolve()
                console.log("Tudo Certo!")
            }else{

                reject()
            }
        }, 2500)
    })
}

enviarEmail("Lorem ipsun sit amet color dolor", "daniel@marques.com").then(() => {  // Só é executado quando a promisse é cumprida
    
    console.log("OPA, Você conseguiu fazer o que foi prometido!")
}).catch(() => {        // Executado quando a promisse não é cumprida

    console.log("Que Pena, Não funcionou!")
})