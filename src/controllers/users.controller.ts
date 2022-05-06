import { Request, Response, NextFunction } from 'express';
import mongoose from "mongoose";
import User from '../models/user.model';
import { validationResult } from 'express-validator';
import { IUserDocument, IUserModel } from '../interfaces/users/users';


export const getAllUsers = async (req: Request, res: Response) => {
    const result = (await User.find().sort({ 'createdAt': -1 })) as IUserDocument[];
    return res.json({ result });
}

export const createUser = async (req: Request, res: Response): Promise<any> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const userBody = (req.body) as IUserDocument;

    const user = new User(userBody);
    try {
        const result = (await user.save()) as IUserDocument;
        return res.json(result);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }

}


