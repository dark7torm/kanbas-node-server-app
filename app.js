import express from 'express';
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors"
import "dotenv/config";
// const express = require('express')
const app = express()
app.use(cors());
app.use(express.json());
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000);