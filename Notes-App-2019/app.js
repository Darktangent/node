const validator=require('validator')
const notes=require('./notes')
const chalk=require('chalk')
const yargs=require('yargs')

//add remove read list

//create add cmd
yargs.command({
  command:"add",
  describe:"add a new note",
  builder:{
    title:{
      describe:"Note title",
      demandOption:true,
      type:'string'
    },
    body:{
      describe:"Note body",
      demandOption:true,
      type:'string'
    }
  },
  handler:function(argv){
    notes.addNote(argv.title,argv.body)
}})
yargs.command({
  command:"remove",
  describe:"remove a note",
  builder:{
    title:{
      describe:"Note title",
      demandOption:true,
      type:'string'
    }},
  handler:function(argv){
    notes.removeNote(argv.title)
  }
})
yargs.command({
  command:"list",
  describe:"list all the notes",
  handler:function(){
    notes.listNotes()
  }
})

yargs.command({
  command:'read',
  builder:{
    title:{
      describe:"Note title",
      demandOption:true,
      type:'string'
    }
  },
  describe:"read a specific note",
  handler:function(argv){
   notes.readNote(argv.title)
  }
})
// console.log(yargs.argv)
yargs.parse()




