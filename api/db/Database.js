const mongoose = require("mongoose");

let instance = null;

class Database {

    constructor(){
        if (!instance) { //Singleton Pattern
            this.mongoConnection = null;
            instance = this;
        }

        return instance;
    }

    async connect(options){

        try {
            console.log("DB Connecting...")
            let db = await mongoose.connect(options.CONNECTION_STRING);
    
            this.mongoConnection = db;
            console.log("DB Connected!")

        } catch (error) {
            console.error(error);
            process.exit(1); //Direkt uygulamayı kapatmak için "1"
        }

    }


}

module.exports = Database