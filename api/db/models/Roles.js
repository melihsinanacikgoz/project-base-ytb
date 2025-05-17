const mongoose = require("mongoose");

const schema = mongoose.Schema(
    {
        //ID yı mongoose otomatık olarak tanımlar.
        role_name : {type : String, required : true},
        is_active : {type : Boolean, default : true},
        created_by : {
            type : mongoose.SchemaTypes.ObjectId,
            required : true
        }
    },
    {
        versionKey : false,
        //timestamps: true //Otomatik olarak oluşturur.
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    }
)

class Roles extends mongoose.Model{

}

schema.loadClass(Roles)
module.exports = mongoose.model("roles", schema)