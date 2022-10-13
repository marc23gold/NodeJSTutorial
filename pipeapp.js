const fs = require('fs');
//module for compressing files
const zlib = require('zlib');
const gzip = zlib.createGzip(); 
const readStream = fs.createReadStream('./example.txt', 'utf8');
const writeStream = fs.createWriteStream('example.txt', 'utf8');
// readStream.on('data',(chunk) => {
//     writeStream.write(chunk);
// }) 

//Instead of doing readstream with the event listener you can use pipes

//Pipe will take what read stream gives us and will pipe it to write stream
readStream.pipe(writeStream);

//In order to use a pipe you need two stream, a source and a destination stream

//Pipe chaining
readStream.pipe(gzip).pipe(writeStream);