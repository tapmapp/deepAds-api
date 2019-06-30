import express from "express";
import http from "http";
import io from "socket.io";

const app = express();
const server = http.createServer(app);
const ServerIo = io(server);

// SOCKET
ServerIo.on("connection", (socket) => {

    socket.emit("news", { hello: "world" });
    socket.on("test", (data) => {
        console.log(data);
    });

    // USERS EMITING THEIR POSITION
    socket.on("position", (data) => console.log(data));

});

// ROUTES
import { usersRoute } from "./routes/users.route";

// ROUTES DEFINITION
app.use("/users", usersRoute);

server.listen(80, () => {
console.log("listening on *:80");
});
