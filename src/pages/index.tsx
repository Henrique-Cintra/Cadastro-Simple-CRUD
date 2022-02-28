
import Botao from "../components/Botão";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useCliente";

export default function Home() {

  const { 
    cliente, 
    clientes, 
    salvarCliente,
    novoCliente, 
    selecionarCliente, 
    excluirCliente,
    tabelaVisivel,
    exibirTabela
  } = useClientes()

  

 
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-fuchsia-900 to-pink-900
    text-white
    `}>

      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (

          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={novoCliente}>
                Novo Cliente</Botao>
            </div>
            <Tabela clientes={clientes}
            clienteSelecionado = {selecionarCliente}
            clienteExcluido = {excluirCliente} 
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteMudou= {salvarCliente}
            cancelado={exibirTabela}
            
          />
          
        )}

      </Layout>

    </div>
  )
}
