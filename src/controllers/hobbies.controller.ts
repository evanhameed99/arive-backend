import { Request, Response, NextFunction } from 'express';
import mongoose, { Types } from "mongoose";
import Hobbie from '../models/hobbies.model';
import { validationResult } from 'express-validator';
import { IUser } from '../interfaces/users/users';
import User from '../models/user.model';


export const createUserHobbie = async (req: Request, res: Response): Promise<any> => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { _id } = req.params;
    const { name, passionLevel, year } = req.body;

    const hobbie = new Hobbie({
        name,
        passionLevel,
        year,
        createdAt: Date.now(),
    })

    const hobbieResult = await hobbie.save();
    const userResult = await User.findByIdAndUpdate(_id, { $push: { "hobbies": hobbieResult._id } }, { new: true });


    return res.json({ hobbieResult })

}


export const getUserHobbies = async (req: Request, res: Response): Promise<any> => {

    const { _id } = req.params;
    const user = await User.findById(_id);
    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }
    const hobbies = await Hobbie.find({ _id: { $in: user.hobbies } });
    return res.json({ hobbies });


}

export const deleteUserHobbie = async (req: Request, res: Response): Promise<any> => {

    const { _id } = req.params;
    const { hobbieId } = req.body;

    const [user, hobbie] = await Promise.all([User.findById(_id), Hobbie.deleteOne({ _id: new Types.ObjectId(hobbieId) })]);

    if (!user) {
        return res.status(404).json({
            message: 'User not found'
        });
    }

    const userResult = await User.findByIdAndUpdate(_id, { $pull: { "hobbies": new Types.ObjectId(hobbieId) } }, { new: true });
    return res.json({ userResult });


}
