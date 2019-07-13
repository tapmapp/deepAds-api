import express from "express";
import { User } from "../models/user.model";

export const usersRoute = express.Router();

// GET USERS
usersRoute.get("/", (req, res, next) => {

    // RETURN USERS
    res.status(200).json([]);

});

// SAVE USER LOCATION
usersRoute.post("/location", (req, res, next) => {

    console.log(req.body);

    // SEND USER LOCATION
    const SocketIo = req.app.get("ServerIo").of("/");
    SocketIo.emit("user-location", { _id: req.body._id, lng: req.body.lng, lat: req.body.lat });

    // SUCCESS RESPONSE
    res.status(200).json({
        message: `${req.body._id} location saved!`
    });

    /*
    // SAVE USER CURRENT LOCATION
    User.schema.methods.saveCurrentLocation(req.body.user).then(() => {

        // SEND USER LOCATION
        const SocketIo = req.app.get("ServerIo").of("/");
        SocketIo.in("app").emit("user-location", { _id: req.body._id, lng: req.body.lng, lat: req.body.lat });

        // SUCCESS RESPONSE
        res.status(200).json({
            message: `${req.body._id} location saved!`
        });

    }).catch((err: any) => {

        // ERROR RESPONSE
        res.status(400).json({
            err
        });
    });
    */
});
