const { userSignUpMsg } = require("../outlook/users.js");
const bcrypt = require("bcrypt");
const userModel = require("../models/user.js")
const StatusCodes =require("../statuscodes.js");
const Joi = require("joi");




 const userReg = async (req, res, next) => {  
    const schema = Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string().min(6).required(),
    });

     const { error } =schema.validate(req.body);
     if (error) {
        error.StatusCodes = StatusCodes.CONFLICT;
        return next (error);
     }
    
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
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
      error.StatusCodes = StatusCodes.CONFLICT;
      return next(error);
    }

    const { email, password } = req.body;

    // Find the user account
    const userExist = await userModel.findOne({ email });

    if (!userExist) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: false,
        message: "User account not found. Please sign up.",
      });
    }

    // Check if password matches
    const passwordMatches = await bcrypt.compare(password, userExist.password);

    if (passwordMatches) {
      return res.status(StatusCodes.CREATED).json({
        status: true,
        message: "Welcome to BELLE_FOOD",
        data: userExist,
      });
    } else {
      return res.status(StatusCodes.BAD_REQUEST).json({
        status: false,
        message: "Incorrect password",
      });
    }
  } catch (error) {
    // Handle any bcrypt or other errors here
    console.error("Error comparing passwords:", error);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: false,
      message: "An error occurred while checking the password",
    });
  }
};


 module.exports = { userReg, logIn };





  