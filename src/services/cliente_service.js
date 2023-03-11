import Axios from "axios";

const clienteService = {};

clienteService.salvarCliente = (cliente) =>{
    return Axios.post("http://"+process.env.REACT_APP_API_LINK+"/Cliente", cliente); //TODO Adicionar variável de ambiente, fixo apenas para exibição
}

clienteService.getClientes = () =>{
    return Axios.get("http://"+process.env.REACT_APP_API_LINK+"/Cliente"); //TODO Adicionar variável de ambiente, fixo apenas para exibição
}
export default clienteService;