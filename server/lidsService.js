const lidsDB = require('./lidsDal')

const addLid = async (name, email, phone, city, member,delivry) => {
    try{
        return await lidsDB.addLid(name, email, phone, city, member,delivry);
    }
    catch(e){
        throw new Error(e.message);
    }
}

const getAllLids = async () =>{
    try{
        let data =  await lidsDB.getAllLids();
        return data;
    }
    catch(e){
        throw new Error(e.message);
    }
}

module.exports = {
    addLid,
    getAllLids
}
