import express from "express"
import cors from "cors"
import UsersController from "./users/users-controller.js";
import DetailsController from "./details/details-controller.js";
import LikesController from "./likes/likes-controller.js";
import mongoose from "mongoose";
import PostsController from "./posts/posts-controller.js";
mongoose.connect('mongodb+srv://dogLand:dogLand@cluster1.8uzug5v.mongodb.net/dogLand?retryWrites=true&w=majority');

const app = express()
app.use(cors());

app.use(express.json())
UsersController(app)
DetailsController(app)
LikesController(app)
PostsController(app)

app.listen(4000)