
setTimeout(()=>{
console.log("two seconds are up")
},2000)


const names=['Andrew','Rohan','Neil']

const shortNames=names.filter((name)=>{
  return name.length <= 4;
})

const geocode=(address,callback)=>{

 setTimeout(()=>{
    const data={
    latitude:0,
    longitude:0
  }
   callback(data)
 },2000)

}
geocode("Texas",(data)=>{
  console.log(data)
})

const add=(a,b,sum)=>{
  setTimeout(()=>{
    result=a+b
    sum(result)
  },2000)
}
add(1,4, (sum)=>{
  console.log(sum)
})