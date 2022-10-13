//reading and writing data in chunks
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example.txt', 'utf8');
readStream.on('data',(chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
}) 

//different from read because it read/writes chunks of infos in chunks 
//using multiple buffers

//a stream uses a very small buffer that reads the file in chunks
//every time a data event occurs you're getting a chunk of the file


