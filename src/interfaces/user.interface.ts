import { Document } from "mongoose";

export interface IUser {
    _id: string;
    email: string;
    name: string;
    lastName: string;
    address: string;
    postalCode: string;
    city: string;
    country: string;
    dateBirth: string;
    genre: string;
    password: string;
    created: string;
    status: string;
    img: string;
    getUsers?: any;
}

export interface IUserModel extends Document {
    getUsers: any;
    createUser: any;
    userInfo: any;
    usersByDisplayer: any;
    saveUserCurrentLocation: any;
}
