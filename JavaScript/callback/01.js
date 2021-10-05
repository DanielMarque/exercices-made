console.log('Start')
function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log('Email Confirmado')
    callback ({ userEmail: email })
  }, 3000)
}

function getVideos(email, callback) {
  setTimeout(() => {
    callback (['200', 111, 'Daniel'])
  }, 2000)
}

const user = loginUser('daniel@daniel.com', 12345, (user) => {
  getVideos(user.userEmail, (result) => {
    console.log(result)
  })
})

console.log('Finish')
