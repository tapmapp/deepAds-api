import express from "express";
import { User } from "../models/user.model";

// INTERFACES
import { IUser } from "../interfaces/user.interface";

export const homeRoute = express.Router();

// GET USERS
homeRoute.get("/", (req, res, next) => {

    console.log("hi");

    res.status(200).json({
        _id: "afajk3jk2j3k5235253afs",
        lat: 0,
        lng: 0
    });
    /*
    User.schema.methods.getUsers().then((users: IUser[]) => {
        res.status(200).json(users);
    });
    */
});
