const fs=require('fs')
const chalk=require('chalk')
//getting notes function
const getNotes=()=>{
  return ( 'Your notes' )
}
const readNote=(title)=>{
  const notes=loadNotes();
  const note=notes.find(note=>{
    return note.title===title
  })
  if(note){
    console.log(chalk.inverse.green(note.title))
    console.log(note.body)
  }else{
    console.log(chalk.inverse.red("Note not found"))
  }
}
const listNotes=()=>{
  notes=loadNotes()
  console.log(chalk.green.inverse("Your Notes"))
  notes.map(element => {
    console.log(element.title, element.body)
    
  })
 
}
const removeNote=(title)=>{
  const notes=loadNotes();
  const notesToKeep=notes.filter(note=>{
    return note.title!==title
  })
  if(notes.length>notesToKeep.length){
    console.log(chalk.green.inverse('Note removed'))
    saveNotes(notesToKeep)
  }else{
    console.log(chalk.red.inverse("No note found"))
  }
}

const addNote=(title,body)=>{
  const notes=loadNotes();
  const duplicateNotes=notes.filter(note=>{
    return note.title===title
  })
  const duplicateNote=notes.find(note=>{
    return note.title===title
  })
  
  console.log(duplicateNote)
  if(!duplicateNote){
    // [...notes,title,body]
    notes.push({
      title:title,
      body:body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse("New note added"));
    
  }else{
    console.log(chalk.red.inverse("Note title exists! Please enter a different titile for your note"))
  }
 

}
const saveNotes=(notes)=>{
  const dataJSON=JSON.stringify(notes);
  fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=()=>{
  try{
    const dataBuffer=fs.readFileSync('notes.json')
    const dataJSON=dataBuffer.toString()
    return JSON.parse(dataJSON)
  }catch (e){
    //if no file
    return []
  }
  

}

module.exports={
  getNotes:getNotes,addNote:addNote,removeNote:removeNote,listNotes:listNotes,readNote:readNote
}