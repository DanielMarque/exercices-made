console.log("Start Requisistion");

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
      let jooj = true;
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

async function master() {
  const loggedUser = await login("daniel@daniel.com", 321);
  const getPerfil = await getProfile(loggedUser.userEmail);
  console.log(getPerfil);
}

master();

console.log("End Requisistion");
