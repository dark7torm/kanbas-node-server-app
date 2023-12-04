import express from 'express';
import session from "express-session";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors"
import "dotenv/config";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
import UserRoutes from "./users/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb+srv://dark7torm:jq3MEB3X5aWL26u@cluster0.a1cwrr8.mongodb.net/?retryWrites=true&w=majority'
// 
mongoose.connect(CONNECTION_STRING);
// const express = require('express')
const app = express()
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
   );
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
app.use(session(sessionOptions));
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);