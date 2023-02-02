const {connection}=require('../DataBaseMySQL/config')
module.exports={
    GetAllPostes:((req,res)=>{
        const query=`select * from postes`
        connection.query(query,(err,result)=>
          (err)?res.status(500).send(err):res.status(201).send(result)
        )
      })
}