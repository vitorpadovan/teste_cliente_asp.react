import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
function Snack(props){
    const {hasError, mensagem}= props;
    const [ativo, setAtivo] = useState(hasError);
    return  <Toast bg={props.cor ? props.cor : "dark"} onClose={() => {setAtivo(!ativo)}} show={ativo} delay={6000} autohide>
      <Toast.Header closeButton={true}>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">{props.titulo}</strong>
      </Toast.Header>
      <Toast.Body>{mensagem}</Toast.Body>
    </Toast>
}

export default Snack;