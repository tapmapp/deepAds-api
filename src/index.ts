import * as bodyParser from "body-parser";
import express from "express";
import http from "http";
import io from "socket.io";

const app = express();
const port = 8080;

// ROUTES
import { homeRoute } from "./routes/home.route";
import { usersRoute } from "./routes/users.route";

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    next();
});

// ROUTES DEFINITION
app.use("/", homeRoute);
app.use("/users", usersRoute);

const server = http.createServer(app);
const ServerIo = io(server);

app.set("ServerIo", ServerIo);

// SOCKET
ServerIo.on("connection", (socket) => {

    socket.emit("news", { hello: "world" });
    socket.on("test", (data) => {
        console.log(data);
    });

    // USERS EMITING THEIR POSITION
    socket.on("position", (data) => console.log(data));

});

server.listen(8080, () => {
    console.log(`listening on port${port}`);
});
