import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema ({
    firstName:  String,
    lastName: String,
    username: { type: String, required: true, index: {unique: true} },
    body:  { type: String, required: true }
});

const User = mongoose.model("Post", userSchema);

module.exports = User;