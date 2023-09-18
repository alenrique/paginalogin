import express, { Response, Request, Router } from 'express';
import { User } from '../models/User';

const router: Router = express.Router()
const users: User[] = []

router.get('/user', (req: Request, res: Response) => {
    res.json(users)
})

router.post('/user', (req: Request, res: Response) => {
    const name: string = req.body.name
    const email: string = req.body.email
    const password: string = req.body.password

    const user = new User(users.length + 1, name, email, password)
    users.push(user)
    console.log(users)
    res.status(200).json(user)
})

export default router