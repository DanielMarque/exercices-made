function anagrams(word, words) {
  return words.filter(function (e) {
      return e.split('').sort().join('') === word.split('').sort().join('');
  })
}

console.log(anagrams('daniel',['marques','daniel']))
