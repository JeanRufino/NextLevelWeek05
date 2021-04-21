import { Request as req, Response as res } from "express";
import { UsersService } from "../services/UsersService";


class UsersController {

    async create(req: req, res: res ): Promise<res> {
        const { email } = req.body;

        const usersService = new UsersService();

        const user = await usersService.create(email);

        return res.json(user);
    }
}

export { UsersController }