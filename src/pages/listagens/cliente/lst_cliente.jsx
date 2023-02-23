import { useEffect, useState } from "react";
// import AlertaDesenvolvimento from "../../../components/alerta_desenvolvimento/alerta_desenvolvimento";
import ListaCliente from "../../../components/lista_cliente/lista_cliente";
import OffLine from "../../../components/off_line/OffLine";
import clienteService from "../../../services/cliente_service";

function LstCliente(props) {
    const [clientes, setClientes] = useState([])
    useEffect(() => {
        clienteService.getClientes()
            .then(
                (e) => setClientes(e.data)
            )
    }, [])
    return <>
        <div className="square m-auto my-5 w-75">
            <ListaCliente clientes={clientes} />
        </div>
        <div className="d-flex align-items-center justify-content-center ">
            <OffLine />
        </div>
    </>
}

export default LstCliente;