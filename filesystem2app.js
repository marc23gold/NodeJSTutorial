const fs = require('fs');
//makes folder
fs.mkdir('Tutorial', (err) => {
    if(err){
        console.log(err)
    } else {
        /*
        fs.rmdir('Tutorial',(err)=>{
            if(err){
                console.log("Successfully Deleted Folder");
            }
        })
        */
        

        fs.writeFile('./Tutorial/example.txt', '123',(err)=>{
            if(err){
                console.log(err)
            } else{
                console.log('created file')
            }
        })
    }
})

// fs.unlink('./Tutorial/example.txt',(err)=> {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log("File Unlinked");
//     }
// })

// fs.rmdir('Tutorial', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         console.log("Deleted Folder");
//     }
// })


//name of directory with multiple files, call back function
fs.readdir('example',(err,files)=>{
    //files will be an array with the name of the file
     if(err) {
        console.log(err);
     } else{
        //printing out the array of files
        console.log(files);
        //loop through the array and delete
        for(let file of files) {
            fs.unlink('.example/'+ file, (err) => {
                if(err){
                    console.log(err);
                } else { 
                    console.log('succesffully deleted file')
                }
            })
        }
     }

});

