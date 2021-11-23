
function friend(friends) {

  const result = []

  friends.filter((friend) => {
    if (friend.length === 4) {
      result.push(friend)
    }
  })

  return result
}

console.log(friend(["Ryan", "Kieran", "Mark", "Carla"]))
