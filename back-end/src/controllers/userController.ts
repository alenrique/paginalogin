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

    if(users.some(obj => obj['name'] == name)){
        res.status(409).json({msg: 'Esse nome de usuário já existe!'})
    }
    else if(users.some(obj => obj['email'] == email)){
        res.status(409).json({msg: 'Esse email já existe!'})
    }
    else if(users.some(obj => obj['password'] == password)){
        res.status(409).json({msg: 'Essa senha já existe!'})
    }
    else{
        const user = new User(users.length + 1, name, email, password)
        users.push(user)
        console.log(users)
        res.status(200).json(user)
    }
})

export default router