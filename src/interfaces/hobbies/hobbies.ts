import { Types, Document } from "mongoose";

export interface IHobbie {
    name: string;
    year: number;
    passionLevel: string;
    createdAt: Date;
}

export interface IHobbieDocument extends Document<Types.ObjectId> {
    name: string;
    year: number;
    passionLevel: string;
    createdAt: Date;
}