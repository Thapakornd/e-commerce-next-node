import express, { Request, Response } from 'express'
import dotenv from "dotenv"
import sequelize from './src/config/sequelize'
import User from './src/models/user.model'

dotenv.config()
const app = express()
const PORT = process.env.PORT

app.get("/", (request: Request, response: Response) => {
    response.status(200).send("Hello world")
})

app.listen(PORT, async () => {
    await sequelize.authenticate()
    await sequelize.sync({ force: true })
    await User.sync({ force: true })

    console.log(`Server is running on port: ${PORT}`)
}).on("error", (err) => {
    throw new Error(err.message)
})