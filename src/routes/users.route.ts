import express from "express";
import { User } from "../models/user.model";

// INTERFACES
import { IUser } from "../interfaces/user.interface";

export const usersRoute = express.Router();

// GET USERS
usersRoute.get("/", (req, res, next) => {

    res.status(200).json([{
        _id: "afajk3jk2j3k5235253afs",
        lat: 0,
        lng: 0
    }]);
    /*
    User.schema.methods.getUsers().then((users: IUser[]) => {
        res.status(200).json(users);
    });
    */
});

// GET USERS
usersRoute.post("/location", (req, res, next) => {
    User.schema.methods.saveCurrentLocation().then(() => {
        console.log("h");
    });
});
