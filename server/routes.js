const LidsService = require('./lidsService');

const router = require('express').Router();
 
router.post('/lids/add', async(req,res)=>{
    try{
        const {name, email, phone, city, member,delivry} = req.body.data
        await LidsService.addLid(name, email, phone, city, member,delivry)
        res.sendStatus(200)
    }catch(e){
        res.sendStatus(500).send(e.message);
    }
});
router.get('/lids/all', async(req,res)=>{
    try{
        const data = await LidsService.getAllLids()
        res.send(data);
    }catch(e){
        res.sendStatus(500).send(e.message);
    }
});
router.post('/login',(req,res)=>{
    if(req.body.username==="admin" && req.body.password==="admin"){
        res.sendStatus(200);
    }
    else
        res.sendStatus(401);
})
router.post('/lids/edit', (req,res)=>{
    const lids = req.body;
    console.log(req.body.lids);
    LidsService.lidsEdit(lids)
    res.sendStatus(200)
})
module.exports = router;