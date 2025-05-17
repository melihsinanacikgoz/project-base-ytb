const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        //ID yı mongoose otomatık olarak tanımlar.
        email : {type : String, required : true},
        password : {type : String, required : true},
        is_active : {type : Boolean, default : true},
        first_name : String,
        last_name : String,
        phone_number : String
    },
    {
        //timestamps: true //Otomatik olarak oluşturur.
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)

class Users extends mongoose.Model{

}

schema.loadClass(Users)
module.exports = mongoose.model("users", schema)