const isPalindrome = (line: string):boolean =>{

    const invertedWord = line.split('').reverse().join('')

    if(line === invertedWord) {
        return true
    }

    return false
}

console.log(isPalindrome('anna'))