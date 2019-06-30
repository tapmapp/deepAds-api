import express from "express";
import { User } from "../models/user.model";

export const usersRoute = express.Router();

// GET USERS
usersRoute.get("/", (req, res, next) => {

    res.status(200).json([{
        _id: "afajk3jk2j3k5235253afs",
        lat: 0,
        lng: 0
    }]);

    /*
    // RETURN USERS
    User.schema.methods.getUsers().then(users => {
       res.status(200).json(users); 
    });
    */
                
});

// SAVE USER LOCATION
usersRoute.post("/location", (req, res, next) => {
    /*
    // SAVE CURRENT LOCATION
    User.schema.methods.saveCurrentLocation(req.body.user).then(() => {
        console.log("h");
    });
    */
    var SocketIo = req.app.get('ServerIo').of('/');
    SocketIo.in('app').emit('user-location', { _id: req.params._id, lng: req.params.lng, lat: req.params.lat });

});
