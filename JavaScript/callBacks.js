

function enviarEmail(corpo, dest, callback){

    setTimeout(() =>{

        console.log(`
        
            Para: ${dest}
            ---------------------------------
            ${corpo}
            ---------------------------------
            De: Daniel Marques
        `)
        callback()
    }, 3000)
}


console.log("Ok! Email enviado!")
console.log("Seu email chegará em breve!")
enviarEmail("Lorem Ipsum, Dolo sit amet", "Daniel", () => {

    console.log("Email recebido com sucesso!")
})

