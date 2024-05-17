import { Request, Response } from "express"
import sequelize from "../config/sequelize"

const getAllProducts = (req: Request, res: Response) => {
    try {
        const { body } = req.body
    } catch (error) {
        
    }
}

const getProduct = (req: Request, res: Response) => {

}

const createProduct = (req: Request, res: Response) => {

}

const updateProduct = (req: Request, res: Response) => {

}

const deleteProduct = (req: Request, res: Response) => {

}

export {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}