const express = require("express");
const User = require("../src/controller/user");
const userRouter = express.Router();

userRouter.post("/signup", User.createUser);
userRouter.post("/signin", User.signinUser);

// router.post('/user/:name', async(req, res) => {
//     var user = await db.user.create({
// 		name: req.body.name,
// 		email: req.body.email
// 	})
//     return res.json(user)
// });

// authRouter.post(
//     '/signup',
//     isNotLoggedIn,
//     async (req: Request, res: Response, next: NextFunction) => {
//       try {
//         const { email, username, password } = req.body;
//         if (!email || !username || !password) {
//           return res
//             .status(409)
//             .json({ message: "email & username & password can't be null" });
//         }
//         const existAccount = await User.findOne({ where: { email } });
//         if (existAccount) {
//           return res
//             .status(409)
//             .json({ code: 409, message: 'Aleady Exist email' });
//         }
//         const hash = await bcrypt.hash(password, 12);
//         const account = await User.create({ email, username, password: hash });
//         return res.json({ message: 'USER SIGNUP SUCCESS!' });
//       } catch (e) {
//         res.status(500).json({ code: 500, message: 'SERVER ERROR' });
//       }
//     }
//   );

module.exports = userRouter;
