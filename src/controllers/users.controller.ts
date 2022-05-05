import { Request, Response, NextFunction } from 'express';
import mongoose from "mongoose";
import User from '../models/user.model';
import { validationResult } from 'express-validator';
import { IUser } from '../interfaces/users/users';


export const getAllUsers = async (req: Request, res: Response)  : Promise<any> => {

    const result  = await User.find();

    return res.json({ result });

}

export const createUser = async (req: Request, res: Response): Promise<any> => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const user = new User(req.body);
    try {
        const result = await user.save();
        return res.json(result);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }

}


