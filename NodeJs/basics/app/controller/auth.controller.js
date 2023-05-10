const userModel = require("../model/user.model");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.register = (req,res)=>{ 
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        hashedPassword: bycrypt.hashSync(req.body.password,8)
    });

    user.save()
    .then(()=>{
        res.send({message:"user registered successfully"});
    })
    .catch((err)=>{
        res.status(500).send({message:err.message});
    })
}

exports.login = (req,res)=>{
    const{email,password} = req.body;
    userModel.findOne({email})
    .then((user)=>{
        if(!user){
            return res.status(404).send({message:"user not found"});
        }
        let isValidPassword = bycrypt.compareSync(password,user.hashedPassword);
        if(!isValidPassword){
            return res.status(401).send({accessToken:null, message:"invalid password"})
        }
        let payload = {
            id : user._id
        }
        let token = jwt.sign(payload,process.env.SECRET_KEY,{expiresIn: 86400});
        res.send({
            user: user,
            message: "Login Succesful",
            accessToken: token
        })
    }
    )
    .catch((err)=>{
        res.status(500).send({message: err.message})
    }
    )
}
