import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserContyroller {
    async create(request: Request, response: Response) {
        const { name, email } = request.body;

        const usersRepository = getCustomRepository(UsersRepository);

        const userAlreadyExits = await usersRepository.findOne({
            email
        });

        if(userAlreadyExits) {
            return response.status(400).json({
                error: "User arleady exists!",
            });
        }

        const user = usersRepository.create({
            name, email
        });

        await usersRepository.save(user);

        return response.json(user);
    }
};

export { UserContyroller };
