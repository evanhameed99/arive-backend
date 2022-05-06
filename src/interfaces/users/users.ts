import { Document, Model , Types } from "mongoose";
export interface IUser {
  name: string;
  hobbies?: string[];
  createdAt: Date;
}
export interface IUserDocument extends IUser, Document {}
export interface IUserModel extends Model<IUserDocument> {}