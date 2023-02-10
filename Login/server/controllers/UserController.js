const User = require("../models/User")

const bcrypt = require("bcryptjs")

// Registrar usuario
const register = async (req, res) => {
    
    const {name, email, password} = req.body

    // Checar se o usuario existe
    const user = await User.findOne({email})
    
    if(user) {
        res.status(422).json({errors: ["Por favor, utilize outro e-mail"]})

        return
    }

    // gerador de senha hash
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // Criar usuario
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    // gerando id do usuario
    res.status(201).json({
        _id: newUser._id
    })

}


// Logando o usuario
const login = async (req, res) => {
    
    const {email, password} = req.body

    const user = await User.findOne({email})

    // Checar se o usuario existe
    if(!user) {
        res.status(404).json({errors: ["Usuário não encontrado."]})

        return
    }

    //Checar senha do usuario
    if(!(await bcrypt.compare(password, user.password))) {
        res.status(422).json({errors: ["Senha inválida."]})

        return
    }

    // gerando id do usuario
    res.status(201).json({
        _id: user._id
    }) 

}


module.exports = {
    register,
    login,
}