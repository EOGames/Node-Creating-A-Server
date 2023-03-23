const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'dir');

fs.readdir(dirPath,(err,files)=>
{
    console.log(files);

    files.forEach((f,i)=>
    {
        console.log("FileName :",f,"located on Pos :",i );
    })
});