
  const mongoose = require('mongoose');

    const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String

    
    });

    const UserModel = mongoose.model('User', userSchema);

    module.exports = UserModel;



 // const userSchema = mongoose.Schema(
    //     {
    //     email: {
    //         type: String,
    //         required: true,
    //         unique: true,
    //         lowercase: true,
    //         match:
    //         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    //     },
    //     password: { type: String, required: true },
        
    //     },
    //     { timestamps: true }
    // );

    // const UserModel = mongoose.model('User', userSchema);

    // module.exports = UserModel;







// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema(
//     {
//         first_name: {type: String},
//         last_name: {type: String},
//         email: {type: String},
//         phone_number: {type: String},
//         // subject: {type: String},

//         isDeleted: {type: Boolean, default: false},
//         DeletedAt: {type: Date, default: null},
//     },
//     {timestamps: true}
// );

// module.exports = mongoose.model("user", userSchema);
