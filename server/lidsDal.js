const fs = require('fs')

const path = require('path')
const addLid = (name, email, phone, city, member,delivry) => {
    return new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,'lids.json'), 'utf8', (err,data) =>{
            if(err)
                reject(err);
            else{
                let obj = JSON.parse(data);
                obj.lids.push({name, email, phone, city, member,delivry});
                let json = JSON.stringify(obj);
                fs.writeFile(path.join(__dirname,'lids.json'), json, 'utf8', (err) =>{ reject(err);})
                resolve();
            }
        });
    });
};

const getAllLids = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname,'lids.json'), (err,data) =>{
            if(err){ 
                reject(err);
            }
            else
                resolve(JSON.parse(data));
        });
    })
};
const editLids =  (lids) => {
    console.log(lids)
    fs.writeFileSync(path.join(__dirname,'lids.json'), JSON.stringify(lids))
};
module.exports = {
    addLid,
    getAllLids,
    editLids
}