import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequst {
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string; 
}

class CreateComplimentService {
    async execute( { tag_id, user_receiver, user_sender, message } : IComplimentRequst) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
        const usersRepositories =getCustomRepository(UsersRepositories)

        if ( user_sender === user_receiver) {
            throw new Error("Incorrect User Receiver!")
        }

        const userRedceiverExists = await usersRepositories.findOne(user_receiver)

        if ( !userRedceiverExists) {
            throw new Error("User  Receiver does not exists!")
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_sender,
            user_receiver,
            message
        })

        await complimentsRepositories.save(compliment)

        return compliment

    }
}

export { CreateComplimentService }