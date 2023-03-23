const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'dir');
for (i=0; i < 5; i++)
{
    fs.writeFileSync(`${dirPath}/loopfile${i}.txt`,`Created With Node FS Loop And Value is ${i}`);
}