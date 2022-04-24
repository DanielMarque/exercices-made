console.log("Start Requisistion")

function login(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ userEmail: email, userPass: password });
    }, 3000);
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
    }, 1000);
  });
}

// login("daniel@daniel.com", 3265, (user) => {
//   getProfile(user.userEmail, (profile) => {
//     console.log(profile);
//   });
// });

async function master() {
  try {
    const loggedUser = await login("daniel@daniel.com", 321);
    const getPerfil = await getProfile(loggedUser.userEmail);
    console.log(getPerfil);
    console.log("End Requisistion");
  } catch (error) {
    console.log(error);
    console.log("End Requisistion");
  }
}

master();
