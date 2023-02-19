import { useEffect, useState } from "react";
import ListaCliente from "../../../components/lista_cliente/lista_cliente";
import clienteService from "../../../services/cliente_service";

function LstCliente(props) {
    const [clientes, setClientes] = useState([])
    useEffect(() => {
        clienteService.getClientes()
            .then(
                (e) => setClientes(e.data)
            )
    }, [])
    return <div className="square m-auto my-5 w-75">
        <ListaCliente clientes={clientes} />
    </div>
}

export default LstCliente;