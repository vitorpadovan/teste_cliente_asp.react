import { useState } from "react";
import ptBR from 'date-fns/locale/pt-BR';
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IMaskInput } from "react-imask";
import Snack from "../../../components/snackbar/snackbar";
import clienteService from "../../../services/cliente_service";
import { ToastContainer } from 'react-bootstrap';
// import AlertaDesenvolvimento from "../../../components/alerta_desenvolvimento/alerta_desenvolvimento";
import OffLine from "../../../components/off_line/OffLine";

function CadCliente(props) {
    const today = new Date();

    const initialState = {
        nome: "",
        cpfCnpj: "",
        dataNascimento: null,
        tipoDocumento: 0,
        cep: "",
        numero: null,
        endereco: ""
    };

    const cpfMask = { name: "CPF", mascara: "000.000.000-00", placeholder: "Digite o CPF", documentType: 0 };
    const cnpjMask = { name: "CNPJ", mascara: "00.000.000/0000-00", placeholder: "Digite o CNPJ", documentType: 1 };

    const [alertList, setAlertList] = useState([]);
    const [hasAlert, setHasAlert] = useState(false);
    const [date, setDate] = useState();
    const [objeto, setObjeto] = useState(initialState);
    const [mask, setMask] = useState(cpfMask);

    const TratarDocumento = (e) => {
        e.target.checked ? setMask(cnpjMask) : setMask(cpfMask)
        setObjeto(
            { ...objeto, tipoDocumento: mask.documentType }
        )
    }

    const EnviarCadastro = (e) => {
        setAlertList([]);
        var temp = [];
        let ob = { ...objeto, tipoDocumento: mask.documentType }; //Necessário para corrigir um erro de sincronização
        setObjeto(ob)
        clienteService.salvarCliente(ob)
            .then((e) => {
                console.log(ob);
                setAlertList(
                    [{
                        titulo: "Sucesso!",
                        mensagem: e.data.nome + " cadastrado com sucesso com o código: " + e.data.id,
                        cor: "success"
                    }]
                )
                limparCampos();
                setHasAlert(true);
            })
            .catch((e) => {
                console.log(ob);
                if (e.response.data !== undefined) {
                    let httpResponse = e.response.data;
                    if (httpResponse.errorCount >= 1) {
                        httpResponse.error.forEach(e => {
                            temp.push({
                                titulo: httpResponse.message,
                                mensagem: e.message,
                                cor: "danger"
                            });
                        })
                        setAlertList(temp);
                        setHasAlert(true);
                    } else {
                        setAlertList(
                            [{
                                titulo: "Error de processamento.",
                                mensagem: httpResponse.message,
                                cor: "danger"
                            }]
                        )
                    }
                }
            });
    }

    const dateHandler = (date) => {
        setDate(date);
        setObjeto({
            ...objeto,
            dataNascimento: date
        })
    }

    const limparCampos = () => {
        setDate(null);
        setObjeto(initialState);
    }
    return <>
        <div className="square rounded border p-3 m-auto my-5 w-75 ">
            <Form.Group className="mb-3">
                <Form.Label>Nome do cliente</Form.Label>
                <Form.Control type="text"
                    value={objeto.nome}
                    onChange={(e) => {
                        setObjeto({
                            ...objeto,
                            nome: e.target.value
                        });
                    }}
                    placeholder="Entre com o nome do cliente"
                    id="NomeCliente">
                </Form.Control>
            </Form.Group>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Tipo de documento</Form.Label>
                        <Form.Check
                            onChange={(e) => TratarDocumento(e)}
                            type="switch"
                            id="switch"
                            label="Pessoa Jurídica"
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>{mask.name}</Form.Label>
                        <Form.Control type="text"
                            as={IMaskInput}
                            mask={mask.mascara}
                            placeholder={mask.placeholder}
                            value={objeto.cpfCnpj}
                            onChange={(e) => {
                                setObjeto({
                                    ...objeto,
                                    cpfCnpj: e.target.value
                                });
                            }}
                            id="cpfCnpj">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Data de nascimento</Form.Label>
                        <DatePicker
                            placeholderText="Entre com a data de nascimento"
                            showMonthDropdown
                            showYearDropdown
                            dropdownMode="select"
                            selected={date}
                            onChange={(e) => dateHandler(e)}
                            onSelect={(e) => dateHandler(e)}
                            className="form-control"
                            locale={ptBR}
                            maxDate={today} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>CEP</Form.Label>
                        <Form.Control type="text"
                            value={objeto.cep}
                            as={IMaskInput}
                            mask="00000-000"
                            onChange={(e) => {
                                setObjeto({
                                    ...objeto,
                                    cep: e.target.value
                                });
                            }}
                            id="CEP">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={9}>
                    <Form.Group className="mb-3">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control type="text"
                            value={objeto.endereco}
                            onChange={(e) => {
                                setObjeto({
                                    ...objeto,
                                    endereco: e.target.value
                                });
                            }}
                            id="CEP">
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="text"
                            value={objeto.numero}
                            onChange={(e) => {
                                setObjeto({
                                    ...objeto,
                                    numero: e.target.value
                                });
                            }}
                            id="CEP">
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <div className="d-grid gap-2">
                <Button onClick={() => EnviarCadastro(objeto)} size="lg">Salvar</Button>
                <Button onClick={() => EnviarCadastro(objeto)}>Limpar</Button>
            </div>
            <ToastContainer className="p-3" position="middle-center">
                {alertList.map((e, i) => {
                    return <Snack key={i} hasAlert={hasAlert} setHasAlert={setHasAlert} mensagem={e.mensagem} titulo={e.titulo} cor={e.cor} />
                })}
            </ToastContainer>

        </div>
        <div className="d-flex align-items-center justify-content-center ">
            <OffLine />
        </div>
    </>
}

export default CadCliente;
