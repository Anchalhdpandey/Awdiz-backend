const { error } = require("console");
const fs = require("fs");
// fs.readFile('hello.txt', 'utf-8', (error,data)=>{
//     if(error) throw error;
//     console.log(data);
// })

fs.writeFile("hello.text", "Welcome to my new file", (error) => {
  if (error) {
    console.log(error);
  }else{
    console.log("File successfully written")
  }
});
fs.writeFile("welcome.txt", "Welcome again!!", (error) => {
  if (error) {
    console.log(error);
  }else{
    console.log("File successfully written")
  }
});

fs.readFile('hello.text', 'utf-8', (error,data)=>{
    if(error) throw error;
    console.log(data);
})
