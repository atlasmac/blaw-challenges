let changes = {
  '0': 'O',
  '5': 'S',
  '1': 'I',
  '6': 'G',
  '2': 'Z',
  '7': 'L',
  '3': 'E',
  '8': 'B',
  '4': 'h',
  '9': 'q'
}

let keys = Object.keys(changes)
let entries = Object.entries(changes).map(el => el[1])

function fixString(str){
  return str.split('').map(el =>{
    if (keys.includes(el)){
      return changes[el]
    } else if (entries.includes(el)){
      return keys[entries.indexOf(el)]
    } else {
      return el
    }
  }).join('')

}