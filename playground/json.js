const fs=require('fs')

const book={
  title:"Ego is the enemy",
  author:"Ryan Holiday"
}
// const dataBuffer=fs.readFileSync('./json.json')
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title);

// const bookJson=JSON.stringify(book)
// fs.writeFileSync('json.json',bookJson)
// console.log(bookJson);
// const bookParse=JSON.parse(bookJson)
// console.log(bookParse.author)


const dataBufer1=fs.readFileSync('./json.json')
const data=dataBufer1.toString()
console.log(data);
let dataParse=JSON.parse(data)
dataParse.name="rohan"
dataParse.age=38
console.log(dataParse)
jsonString=JSON.stringify(dataParse)
fs.writeFileSync('./json.json',jsonString)
