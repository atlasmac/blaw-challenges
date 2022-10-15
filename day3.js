let keyArr = ['A','_','K','E','Y','!']

let testStr = 'AyouEcould!thinkKthisAisYhard_toYreadKbeforeYreplacingEthe_keyYcharacters'

function keyReplace(str, key){
  let regexArr = key.map(el => new RegExp(el, 'g', 'i'))
  regexArr.forEach(el =>{
    str = str.replace(el, ' ')
  })
  return str
}