const f = process.argv;
const fs = require('fs');

if (f[2] == 'add')
{
    fs.writeFileSync(f[3],f[4]);
}else
if (f[2]=='remove')
{
    fs.unlinkSync(f[3]);
}else
{
    console.log('invalid Input');
}

