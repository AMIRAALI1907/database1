 

    const mongodb = require ('mongodb')

    const mongoClient = mongodb.MongoClient

    const connectionUrl = 'mongodb://127.0.0.1:27017'

    const dbname = "proj-2"

    mongoClient.connect(connectionUrl , (error,res1) =>{
        if(error){
            return  console.log('error has occured')
        }
        console.log('All Perf')

        const db = res1.db(dbname)

        db.collection('users').insertOne({
            name:"amira",
            age:21,

        },(error,data)=>{
            if(error){
                console.log("unable to insert value");
            }
            console.log(data.insertedId);

        })



         db.collection('users').insertOne({
            name:"Marwa",
            age:21,

        },(error,data)=>{
            if(error){
                console.log("unable to insert value");
            }
            console.log(data.insertedId);

        })


        db.collection('users').insertMany([

            {
                name:"abdo",
                age:25,
    
            },
            {
                name:"mona",
                age:25,
    
            },
            {
                name:"Maii",
                age:25,
    
            },


            {
                name:"ahmad",
                age:25,
    
            },

             {
                name:"dina",
                age:25,
    
            },


            {
                name:"rania",
                age:23,
    
            },

            {
                name:"amir",
                age:22,
    
            },
            {
                name:"mazen",
                age:20,
    
            },
             {
                name:"kareem",
                age:23,
    
            },

             {
                name:"kareem",
                age:23,
    
            },

            {
                name:"fatma",
                age:21,
    
            }



        ]

        )



            db.collection('users').find({age:25}).toArray((error , data)=>{
                if (error) {
                    return console.log('error has occured')
                }
                console.log(data)
              })
        


              db.collection('users').find({age:25}).limit(3).toArray((error , data)=>{
                if (error) {
                    return console.log('error has occured')
                }
                console.log(data)
              })

        
              db.collection('users').updateOne({_id:mongodb.ObjectId("64da3c81221c56776c97bf9b")},{
                $set:{name:"Alaa"}
               
              })
              .then((data1)=>{ console.log(data1.modifiedCount)})
              .catch((error)=>{console.log(error)})



              db.collection('users').updateOne({_id:mongodb.ObjectId("64da3c81221c56776c97bf9c")},{
                $set:{name:"Ammar"}
               
              })
              .then((data1)=>{ console.log(data1.modifiedCount)})
              .catch((error)=>{console.log(error)})



              db.collection('users').updateOne({_id:mongodb.ObjectId("64da3c81221c56776c97bf9d")},{
                $set:{name:"reem"}
               
              })
              .then((data1)=>{ console.log(data1.modifiedCount)})
              .catch((error)=>{console.log(error)})



              db.collection('users').updateOne({_id:mongodb.ObjectId("64da3c81221c56776c97bf9e")},{
                $set:{name:"Mariem"}
               
              })
              .then((data1)=>{ console.log(data1.modifiedCount)})
              .catch((error)=>{console.log(error)})






              db.collection('users').updateOne({_id:mongodb.ObjectId("64da3c81221c56776c97bf9b")},{
                $inc:{age:20}
               
              })
              .then((data1)=>{ console.log(data1.modifiedCount)})
              .catch((error)=>{console.log(error)})


              db.collection('users').updateMany({},{
            
                $inc:{age:10}
              })
              .then((data1)=>{ console.log(data1.modifiedCount)})
              .catch((error)=>{console.log(error)})




              db.collection('users').deleteOne({_id:mongodb.ObjectId("64da3c81221c56776c97bf9b")})
              .then((data1)=>{ console.log(data1.deletedCount)})
              .catch((error)=>{console.log(error)})



              db.collection('users').deleteMany({age:35})
              .then((data1)=>{ console.log(data1.deletedCount)})
              .catch((error)=>{console.log(error)})




        })

        //////////////////////////////////////////////////////////////
       