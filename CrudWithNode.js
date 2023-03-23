const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'test');
const f =`${filePath}/testfile.txt`;

fs.writeFileSync(f,'Its A Simple File');

//reading file
fs.readFile(f,'utf8',(err,r)=>
{
    if (!err)
    {
        console.log(r);
    }else
    {
        console.log(err);
    }
});

//updating file
fs.appendFile(f,' Its Appended By Script',(err)=>
{
    if(!err)
    {
        console.log(f);
    }
});

//renaming file
fs.rename(f,`${filePath}/testNewfile.txt`,(err)=>
{
    if(!err)
    {
        console.log("Successfully Updated Name");
    }else
    {
        console.log(err);
    }
});

//delete file
fs.unlinkSync(`${filePath}/testfile.txt`);
