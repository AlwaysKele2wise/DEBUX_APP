// const loginRequestOtp = async (req, res, next) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required(),
//         password: Joi.string().min(6).required(),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) {
//         error.statusCode = StatusCodes.BAD_REQUEST;
//         return next(error);
//     }

//     const { email, password } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             const error = new Error('Invalid email or password');
//             error.statusCode = StatusCodes.UNAUTHORIZED;
//             return next(error);
//         }

//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             const error = new Error('Invalid email or password');
//             error.statusCode = StatusCodes.UNAUTHORIZED;
//             return next(error);
//         }

//         const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
//         const hashedOtp = await bcrypt.hash(otp, 10);

//         user.otp = hashedOtp;
//         await user.save();

//         await sendEmail(email, 'OTP Verification', Your OTP is ${otp});

//         res.status(StatusCodes.OK).json({ message: 'OTP sent to your email' });
//     } catch (err) {
//         next(err);
//     }
// };

// //Verifies the OTP sent during the login process and issues a JWT token.
// const verifyLoginOtp = async (req, res, next) => {
//     const schema = Joi.object({
//         email: Joi.string().email().required(),
//         otp: Joi.string().length(6).required(),
//     });

//     const { error } = schema.validate(req.body);
//     if (error) {
//         error.statusCode = StatusCodes.BAD_REQUEST;
//         return next(error);
//     }

//     const { email, otp } = req.body;

//     try {
//         const user = await User.findOne({ email });
//         if (!user) {
//             const error = new Error('Invalid email');
//             error.statusCode = StatusCodes.NOT_FOUND;
//             return next(error);
//         }

//         const isMatch = await bcrypt.compare(otp, user.otp);
//         if (!isMatch) {
//             const error = new Error('Invalid OTP');
//             error.statusCode = StatusCodes.UNAUTHORIZED;
//             return next(error);
//         }

//         user.otp = undefined;
//         await user.save();

//         const payload = { userId: user.id, role: user.role };
//         const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.status(StatusCodes.OK).json({
//             message: 'Welcome back to FOODU!',
//             slogan: 'Savor the Flavor!',
//             token
//         });
//     } catch (err) {
//         next(err);
//     }
// };