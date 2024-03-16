const express=require('express');
const router = express.Router();
router.use(express.json());
const studentmModel = require('../Model/studentmodel');


router.get('/',async(req,res)=>{
try {
    const data = await studentmModel.find()
    res.send(data);
} catch (error) {
console.log(error);    
}

})
router.post('/add',async(req,res)=>{
    try {
        var item = req.body
        await studentmModel(item).save();
        res.send('data added');
    } catch (error) {
        console.log(error );
    }
})

// route to update

router.put('/edit/:id',async(req,res)=>{
    try {
       const id = req.params.id;
       const item =req.body;
       await studentmModel.findByIdAndUpdate(id,item);
       res.send('data updated')
    } catch (error) {
        console.log(error );
    }
})

//router to delete

router.delete('/remove/:id',async(req,res)=>{
    try {
       const id = req.params.id;
       const item =req.body;
       await studentmModel.findByIdAndDelete(id,item);
       res.send('data deleted')
    } catch (error) {
        console.log(error );
    }
})








module.exports=router;