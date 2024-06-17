// const Joi = require("joi");
// const STATUSCODE = require("../statuscodes.js")



// exports.authVerified = (req, res, next) => {
//     const schema = Joi.object({
//        email: Joi.string().email().required(),
//        password: Joi.string().min(6).required(),
//        // googleToken: Joi.string(),
//        // facebookToken: Joi.string(),
//        // twitterToken: Joi.string(),
//        // linkedinToken: Joi.string(),
//        // instagramToken: Joi.string(),
      
//     });
   
//    const validateOptions = {
//        abortEarly: false,
//        allowUnknown: true,
//        stripUnknown: true,
//    };
   
   
//     const result = formatResult(schema.validate(req.body, validateOptions));
//     if (result.error)  {   
//        return res.status(STATUSCODE.BAD_REQUEST).json({
//            error: {
//                message: result.message,
//            },
//        });
//    }
//        next();
//    };


   