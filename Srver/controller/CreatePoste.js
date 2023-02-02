const {connection}=require('../DataBaseMySQL/config')
module.exports={
    createPost:((req,res)=>{
        const query = `INSERT INTO postes(title,content,Image,Video) VALUES("${req.body.title}","${req.body.content}","${req.body.image}","${req.body.Video}")`;
        connection.query(query,(err,result)=>
          (err)?res.status(500).send(err):res.status(201).send('poste done')
        )
      })
}