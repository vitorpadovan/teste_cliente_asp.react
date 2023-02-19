import { Table } from "react-bootstrap"

function ListaCliente(props) {
    return <>
        <Table striped bordered hover responsive size="sm" className="table-hover">
            <thead>
                <tr>
                    <th className="th-sm">#</th>
                    <th className="th-lg">Nome</th>
                    <th className="th-sm">Documento</th>
                    <th className="th-sm">Data de nascimento</th>
                    <th className="th-sm">CEP</th>
                    <th className="th-lg">Endereço</th>
                </tr>
            </thead>
            <tbody>
                {props.clientes.map((e, i) => {
                    return <tr>
                        <td className="th-sm">{e.id}</td>
                        <td className="th-lg">{e.nome}</td>
                        <td className="th-sm">{e.cpfCnpj}</td>
                        <td className="th-sm">{e.dataNascimento}</td>
                        <td className="th-sm">{e.cep}</td>
                        <td className="th-lg">{e.endereco}</td>
                    </tr>
                })}
            </tbody>
        </Table>
    </>
}
export default ListaCliente