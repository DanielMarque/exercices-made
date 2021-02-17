console.log("Start Requisition");

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email, userPass: password });
    }, 2000);
  });
}

function getProfile(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let jooj = false;
      if (jooj) {
        resolve(`Email: ${email} | ${["Photo", "Desc", "Friends", "Age"]}`);
      }
      reject(new Error());
    }, 3000);
  });
}

// login("daniel@daniel.com", 3265, (user) => {
//   getProfile(user.userEmail, (profile) => {
//     console.log(profile);
//   });
// });

login("daniel@daniel", 123).then((obj) => {
  console.log(obj.userEmail);
  getProfile(obj.userEmail)
    .then((obj) => {
      console.log("Dados do perfil", obj);
    })
    .catch((err) => {
      console.log("Ocorreu um Erro", err.message);
    });
});

console.log("End Requisition");
