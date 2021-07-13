import { Request, Response } from 'express'
import { CreatetagService } from '../services/CreateTagService'

class CreateTagController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        
        const createTagService = new CreatetagService()
        
        const tag = await createTagService.execute(name)

        return response.json(tag)
    }
}

export { CreateTagController }