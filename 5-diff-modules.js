const os=require('os')
//console.log(os.userInfo())
//similarly we can find many methods in os module which can be used 
const path=require('path')
//console.log(path.sep)
//const trail_path=path.join('/content/','subfolder','trial.txt')
//console.log(trail_path)
const {readFileSync,writeFileSync,readFile,writeFile}=require('fs')
const first=readFileSync('./content/first.txt','utf8')
//console.log(first)
const second=readFileSync('./content/second.txt','utf8')
//console.log(second)
//writeFileSync('./content/new_file.txt',`hello here is the result ${first,second}`)
// we can use writeFile or readFile to make the code asyncronous which make the code to work properly
// even if there are some errors. 
// by using writeFile or readFile we can use call back functions 
//ex:
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
      console.log('there is an error')
      return 
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
      if(err){
        console.log('there is an erroe in second file')
        return 
      }
      const second=result 
      console.log(first,second)
    })
    // you can see we are using the call back function inside another this will create the
    // call back hell .. which can be resolved using async and await function.
  })