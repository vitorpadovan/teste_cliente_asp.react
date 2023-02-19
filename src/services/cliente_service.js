import Axios from "axios";

const clienteService = {};

clienteService.salvarCliente = (cliente) =>{
    return Axios.post("http://localhost/Cliente", cliente);
}

clienteService.getClientes = () =>{
    return Axios.get("http://localhost/Cliente");
}
export default clienteService;