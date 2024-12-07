import * as tutorials from '../tutorial.controller.js'
import express from 'express'

export default app => {
    const router = express.Router();

    router.post("/", tutorials.create)
    router.get("/", tutorials.readAll)

}