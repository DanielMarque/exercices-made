function noSpace(x){
  let res = x.split('')
  res = res.map(item => item.replace(' ', ''))
  return res.join('')
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
