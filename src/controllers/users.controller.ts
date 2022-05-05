import { Request, Response, NextFunction } from 'express';
import mongoose from "mongoose";
import User from '../models/user.model';
import { validationResult } from 'express-validator';
import { IUser } from '../interfaces/users/users';


export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {

    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            return next(err)
        })

}

export const createUser = (req: Request, res: Response) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = new User(req.body);
    user.save()
        .then((user: any) => {
            res.json({ user });
        })
        .catch((err: any) => {
            res.status(500).send(err);
        }
        )

}


