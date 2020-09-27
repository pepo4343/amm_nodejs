const getDb = require("../utils/database").getDb;

const {ObjectID} = require("mongodb")

class User {
    constructor(
        name = "",
        username="",
        password="",
        role ="",
        email ="",
        device_alias = "",
        water_schedule = [0,0]
        
    ) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.role = role;
        this.email = email;
        this.device_alias =device_alias;
        this.water_schedule = water_schedule;
    }

    save(){
        const db = getDb();
        return db.collection("user").insertOne(this);
    }
    static fetchByUsername(username) {
        const db = getDb();
        try {
          return db.collection("user").findOne({ username });
        } catch (err) {
          console.log(err);
        }
    }
    static fetchByID(id) {
      const db = getDb();
      try {
        return db.collection("user").findOne({ _id:ObjectID(id) });
      } catch (err) {
        console.log(err);
      }
     }

     static fetchByDeviceAlias(device_alias) {
      const db = getDb();
      try {
        return db.collection("user").findOne({device_alias});
      } catch (err) {
        console.log(err);
      }
     }

    static fetchByEmail(email) {
        const db = getDb();
        try {
          return db.collection("user").findOne({ email });
        } catch (err) {
          console.log(err);
        }
    }

    static fetchAll = async () => {
        const db = getDb();
        try {
            return db.collection("user").find().toArray();
          } catch (err) {
            console.log(err);
          }y();

    }
    static updateSchedule = async (user_id,schedule)=>{
      const db = getDb();
      try{
        console.log("id",user_id);
        const results = await db.collection("user").findOne({_id:ObjectID(user_id)});
       
        results.water_schedule = schedule;
        return await db.collection("user").updateOne({_id:ObjectID(results._id)},{
          $set:results
        })

      }
      catch(err){
        console.log(err);
      }
    }
}

module.exports = User;