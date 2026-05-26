const userModel = require("../models/user.model")

async function registerUserController(req,res) {
  const  {username, email, password } = req.body

  if(!username||!email||!password) {
    return res.status(400).json({
        message:"Plese provide username,email and password"
    })
  }
  const isUserAlreadyExists = await userModel.findOne({
    $or: [{username}, {email}]
  })
  if(isUserAlreadyExists)   {
    return res.json({message: "Account already exist with username and email"}
        
    )
  }
}

module.exports = { registerUserController }