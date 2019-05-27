const https= require ("https")
const darkSky=`a0165bd6b4934bd385b8c70db60f00cf`
const url=`https://api.darksky.net/forecast/${darkSky}/40,-75?units=us&lang=en`

const request=https.request(url, (response)=>{
  let data=''
response.on('data',(chunk)=>{
  data=data + chunk.toString()
console.log(chunk)
})
response.on('end',()=>{
const body=JSON.parse(data)
console.log(body)
})
})
request.on("error",(error)=>{
  console.log("An error",error)
})
request.end()