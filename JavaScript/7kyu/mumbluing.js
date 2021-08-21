function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
console.log(accum('abcd'))

console.log('Daniel'.repeat(3))

sss