 const { userSignUpMsg } = require("../outlook/users.js");
 const bcrypt = require("bcrypt");
 const userModel = require("../models/user.js")
const StatusCodes =require("../statuscodes.js");




 const userReg = async (req, res, next) => {  
    const { email, password } = req.body;

    const userExist = await userModel.findOne({ email: email });
       if (userExist) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: false,
            message: "user already exist",
        });
}
 

    const salt = await bcrypt.genSaltSync(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log({hashedPassword}) 

    const saveUser = await userModel.create({
    email: email,
    password:  hashedPassword,
    }); 
    
    await userSignUpMsg(email);

    return res.status(StatusCodes.CREATED).json({
        status: true,
        message: "registration successful",
        data: saveUser,
    });
};

const logIn = async (req, res, next) => {
    const { email, password, } = req.body;
    
    console.log( email, password);
   
    const userExist = await userModel.findOne({ email: email });
   
    if (!userExist) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: false,
            message: "user account not found please signup",
        });
    }

    //ELSE

    const passwordMacthes = await bcrypt.compare(password, passwordMacthes)
    if (!passwordMacthes) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            status: false,
            message: "incorrect password",
        });
    }

    return res.status(StatusCodes.CREATED).json({
        status: true,
        message: "welcome to DEBUX_EATERY",
        data: userExist,
    });
  

};

 module.exports = { userReg, logIn };
