
function daniel({ daniel, carla, sett }) {
  console.log(daniel, carla, sett)
}

const homem = {
  nome: "Daniel",
  idade: 23
}

const mulher = {
  nome: "carla",
  idade: 33
}

const numero = 7

daniel({ daniel: homem, carla: mulher, sett: numero })
