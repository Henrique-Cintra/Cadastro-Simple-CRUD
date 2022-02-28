import { useState } from "react"
import Cliente from "../core/Cliente"
import Botao from "./Botão"
import Entrada from "./Entrada"
interface FormularioProps {

    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void

}
export default function Formulario(props: FormularioProps) {
    const id = props.cliente?.id
    const [nome, SetNome] = useState(props.cliente?.nome?? '')
    const [idade, SetIdade] = useState(props.cliente?.idade?? 0)
    return (
        <div>

            {id ? (
                <Entrada 
                    somenteLeitura
                    texto='Código' 
                    valor={id} 
                    className= "mb-5"
                />

            ) : false}
            <Entrada 
                texto='Nome'
                valor={nome}
                valorMudou= {SetNome}
                className="mb-5"
            />
            <Entrada 
                texto='Idade' 
                tipo ='number' 
                valor={idade} 
                valorMudou= {SetIdade}

            />
            <div className="flex justify-end mt-3">
                <Botao className= "mr-2 bg-blue-600" onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id)) } >
                    {id? 'Alterar' : 'Salvar'}
                </Botao>

                <Botao onClick={props.cancelado} className="bg-slate-500">
                    Cancelar
                </Botao>

            </div>
        </div>
    )
}