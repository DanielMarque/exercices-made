// Creating the promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ user: "Daniel" });
    reject(new Error("Your request has been faield"));
  }, 2000);
});

// consuming the promise

promise
  .then((say) => {
    console.log(say.user);
  })
  .catch((err) => {
    console.log(err);
  });
