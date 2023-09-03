
//----------- Import the packages from packages, use to make strong apis -------X
//Packages
const bcrypt = require('bcryptjs'); //Convert password into hash
const jwt = require('jsonwebtoken'); // Tokenized our users

//Models
const UserModel = require('../models/UsersModel'); //User modal
const { JWT_SECRET_KEY } = require('../../config/config');

//------------------ Creating the AuthControllers to authenticate the users -----------X
function AuthController() {
    return {
        //1. Register the users, using POST '/api/user/register'
        async Register(req,res){
            
            try {
                //--------- Req.body content
                const {name,email,password,cpassword,phone,address} = req.body;

                //Requring all the specific fields
                if(!name || !email || !password || !cpassword || !phone) {return res.status(404).json({success:false,msg:"All fields are required"})};

                if(password.length < 8 || cpassword.length < 8) 
                    return res.status(404).json({success:false,msg:"Password & Confirm password must be 8 char long"})

                if(phone < 10) 
                    return res.status(404).json({success:false,msg:"Phone 10 char long"})

                //check password and confirm password match
                if(password !== cpassword) {return res.status(404).json({success:false,msg:"Password and ConfrimPassword did not match"})};

                // Check the user is already register
                let users = await UserModel.findOne({email})
                if(users) { return res.status(401).json({success:false,msg:"this crenditentals's user is already exist"})};

                //Converting the password into hash
                let hashPassword = await bcrypt.hash(password,10);

                //Register the users
                users = await UserModel({
                    name,
                    email,
                    password:hashPassword,   
                    phone,
                    address                 
                })
                await users.save();

                return res.status(200).json({success:true,msg:'You are successfully register',users});
                
            } catch (error) { return res.status(500).json({success:false,msg:`${error.message}` });  }
        },

        //2. Login the users, using POST '/api/user/login'
        async Login(req,res){
            try {
                //--------- Req.body content
                const {email,password} = req.body;

                //Requring all the specific fields
                if(!email || !password ) {return res.status(404).json({success:false,msg:"All fields are required"})};
                
                // Check the user is not already register
                let users = await UserModel.findOne({email})
                if(!users) { return res.status(401).json({success:false,msg:"this crenditentals's user is not register, Plz register first"})};

                //Comparing the password of register and login user
                let isMatch = await bcrypt.compare(password,users.password)
                if(!isMatch) { return res.status(404).json({success:false,msg:"Your credentials not right, plz re-write!"})}

                // Now create the token to authorizing the users
                const payloads = {
                    user : {id : users._id}
                }
                const Secret_Key = process.env.JWT_SECRET_KEY || JWT_SECRET_KEY
                const token = await jwt.sign(payloads,Secret_Key,{expiresIn : '10d'})
                
                return res.status(200).json({success:true,msg:'You are successfully login',token});
                
            } catch (error) { return res.status(500).json({success:false,msg:`${error.message}` });  }
        },

        //3. Get the info of login user, using GET '/api/user/getUser'
        async getUser(req,res){
            try {
                // console.log(req.user);
                return res.status(200).json({success:true,msg:'User found successfully',user:req.user});

            } catch (error) { return res.status(500).json({success:false,msg:`${error.message}` });  }
        },

    }
}

module.exports = AuthController;