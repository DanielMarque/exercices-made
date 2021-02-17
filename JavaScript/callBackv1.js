console.log("Start Requisistion");

function login(email, password, callback) {
  setTimeout(() => {
    callback({ userEmail: email, userPass: password });
  }, 2000);
}

function getProfile(email, callback) {
  setTimeout(() => {
    callback(`Email: ${email} | ${["Photo", "Desc", "Frinds", "Age"]}`);
  }, 3000);
}

login("daniel@daniel.com", 3265, (user) => {
  getProfile(user.userEmail, (profile) => {
    console.log(profile);
  });
});

console.log("End Requisistion");
