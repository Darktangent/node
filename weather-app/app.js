// const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require("./utils/forecast")
const address=process.argv[2]
console.log(process.argv)
if(!address){
  console.log("Please provide an address")
}else {

  geocode(address,(error,data)=>{
    const {latitude, longitude,location} =data
    if(error){
      return console.log(error)
     }
    // console.log("Error",error)
    // console.log("Data",data);
    
    forecast(latitude, longitude,(error,forecastData)=>{
  
     if(error){
       return console.log(error)
     }
  
    console.log(location)
    console.log(forecastData)
     
    })
    
  
  
  
    })
}








  // console.log( data.summary, `It is currently ${data.temperature} degrees out. There is a ${data.probability}% chance of rain. The timezone is->${data.timezone}`)