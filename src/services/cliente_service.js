import Axios from "axios";

const clienteService = {};

clienteService.salvarCliente = (cliente) =>{
    return Axios.post("http://52.90.15.15/Cliente", cliente); //TODO Adicionar variável de ambiente, fixo apenas para exibição
}

clienteService.getClientes = () =>{
    return Axios.get("http://52.90.15.15/Cliente"); //TODO Adicionar variável de ambiente, fixo apenas para exibição
}
export default clienteService;