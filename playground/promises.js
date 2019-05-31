const doWorkCallback=(callback)=>{
	setTimeout(()=>{
		// callback('This is my error',undefined)
		callback(undefined,[1,4,7])
	},2000)
}

doWorkCallback((error,result)=>{
	if(error){
		return console.log(error)
	}
	console.log(result)
})

const doWorkPromise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve([1,4,7])
	},2000)
})
doWorkPromise.then((data)=>{
	console.log("Success",data)
}).catch((err)=>{
	console.log("Error",err)
})