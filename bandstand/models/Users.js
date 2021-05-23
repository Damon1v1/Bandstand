const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { 
        type: String,
        unique: true,
        required: [true, "Can't be left blank"],
        match: [/^[a-zA-Z0-9]+$/, "is taken"],
        index: true 
    },
    password: { 
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;