import { Router, Request, Response } from 'express';
import { getFinancial, newFinancial, getOne, updateFinancial, paidFinancial, deleteFinancial } from "./controller/FinancialController"

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: "Bem - Vindo a minha API de financeiro, é só ver as rotas e testar os pontos de acesso =D!", contato: "Qualquer crítica ou sugestão henriquebarros@gmail.com"})
})

routes.get("/financial", getFinancial)
routes.get("/financial/:id", getOne)
routes.post("/newfinancial", newFinancial)
routes.put("/financial/:id", updateFinancial)
routes.patch("/financial/:id", paidFinancial)
routes.delete("/financial/:id", deleteFinancial)

export default routes;