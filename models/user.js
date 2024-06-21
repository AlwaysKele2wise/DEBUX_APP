
  const mongoose = require('mongoose');
  const bcrypt = require('bcrypt')
  const validator = require('validator')

 const userSchema = mongoose.Schema(
        {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            validate : [validator.isEmail, "Please Enter a valid Email"]
          },
        
        password: {
          type: String,
          required: [true, 'Password is required'],
          minlength: [8, 'Password must be at least 8 characters long'],
        }
        },
        { timestamps: true }
    );
    

    // Pre-save hook to hash the password before saving
// userSchema.pre('save', async function(next) {
//   if (this.isModified('password')) {
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   next();
// });

    const UserModel = mongoose.model('User', userSchema);

    module.exports = UserModel;







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

//     const UserModel = mongoose.model('User', userSchema);

    // module.exports = UserModel;
