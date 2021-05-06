const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstName:  String,
    
    lastName: String,

    username: { 
        type: String,
         required: true, 
         index: {unique: true} 
    },

    pasword:  { 
        type: String, 
        required: true,
        validate: [({ length }) => length >= 6, "Password should be longer."] 
    }
});

const User = mongoose.model("Post", userSchema);

module.exports = User;