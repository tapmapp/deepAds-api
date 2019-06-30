import express from "express";
import { UserMethods } from "../models/users.model";

export const usersRoute = express.Router();

interface IUser {
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
  }

// GET USERS
usersRoute.post("/", (req, res, next) => {
    UserMethods.getUsers().then((users: IUser[]) => {
        // console.log(users);
    });
});

// GET USERS
usersRoute.post("/location", (req, res, next) => {
    UserMethods.saveCurrentLocation().then(() => {

    });
});
