import { getRepository } from "typeorm"
import { Financial } from "../entity/Financial"
import { Request, Response } from "express"

export const getFinancial = async (request: Request, response: Response) =>{

    const financial = await getRepository(Financial).find()
    return response.json(financial)

}

export const getOne = async (request: Request, response: Response) =>{
    
    const { id } = request.params
    const financial = await getRepository(Financial).findOne(id)
    return response.json(financial)
}

export const newFinancial = async (request: Request, response: Response) => {
    
    const financial = await getRepository(Financial).save(request.body)
    response.json(financial)


}

export const updateFinancial = async (request: Request, response: Response) => {
    
    const { id } = request.params
    const financial = await getRepository(Financial).update(id, request.body)
    
    if (financial.affected === 1) {
        const financialUpdated = await getRepository(Financial).findOne(id)
        return response.json(financialUpdated)
    }

    return response.status(404).json({ message: "Pagamento não encontrado!" })

}

export const paidFinancial = async (request: Request, response: Response) => {
    
    const { id } = request.params
    const financial = await getRepository(Financial).update(id, {
        Paid: true
    })
    
    if (financial.affected === 1) {
        const financialUpdated = await getRepository(Financial).findOne(id)
        return response.json({ message: "Pagamento efetuado!" })
    }

    return response.status(404).json({ message: "Pagamento não encontrado!" })

}


export const deleteFinancial = async (request: Request, response: Response) => {
    
    const { id } = request.params
    const financial = await getRepository(Financial).delete(id)
    
    if (financial.affected === 1) {
        const financialUpdated = await getRepository(Financial).findOne(id)
        return response.json({ message: "Pagamento deletado!" })
    }

    return response.status(404).json({ message: "Pagamento não encontrado!" })

}