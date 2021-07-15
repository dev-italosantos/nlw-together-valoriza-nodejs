
import { getCustomRepository } from "typeorm"

import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

import { UsersRepositories } from "../repositories/UsersRepositories"

interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {
    async execute({ email, password } : IAuthenticateRequest)  {
        const usersRepositories = getCustomRepository(UsersRepositories)
        
        //  Verificar se o email existe
        const user = await usersRepositories.findOne({
            email
        })

        //  Verificar se o password existe
        if(!user) {
            throw new Error("Email and/or password incorrect");
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email and/or password incorrect");
        }

        const token = sign({
            email: user.email,
        }, "9e4e6ca705494ee92caf8899dff1040d", {
            subject: user.id,
            expiresIn: "1d"   
        }) 

        return token
    }
    
}

export { AuthenticateUserService }