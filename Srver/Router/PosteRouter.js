const router=require('express').Router();
const PosteController=require('../controller/CreatePoste');

router.post('/api/Create/NewPoste',PosteController.createPost);

module.exports={PosteRouter:router}