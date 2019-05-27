const add=(x,y)=>{
  return x+y
}
const calculator=(callback,x,y)=>{
    return callback(x,y)
}
console.log(calculator(add,10,12));

const tasks={
  tasks:[{
    text:"Grocery Shopping",
    completed:true
  },{
    text:"Clean Yard",
    completed:false
  },
  {text:'Film Course', completed:false}
],
getTasksTodo(){
  const tasksTodo=this.tasks.filter(task=>{
    return task.completed===false
  })
  return tasksTodo
}
}

console.log(tasks.getTasksTodo())
