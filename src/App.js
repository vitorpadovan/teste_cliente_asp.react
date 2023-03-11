import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CadCliente from "./pages/cadastros/cliente/cad_cliente.jsx";
import LstCliente from "./pages/listagens/cliente/lst_cliente.jsx";
import { LinkContainer } from "react-router-bootstrap";
import HomePage from "./pages/home/HomePage";
// import { Button } from "react-bootstrap";

const setores = [
  { id: 0, titulo: "Home Page", widget: <HomePage />, link: "/" },
  {
    id: 1,
    titulo: "Cadastro Clientes",
    widget: <CadCliente />,
    link: "/cliente",
  },
  {
    id: 2,
    titulo: "Listar clientes",
    widget: <LstCliente />,
    link: "/listaCliente",
  },
];

const Menu = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Gestão de Clientes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {setores.map((e, i) => (
              <LinkContainer to={e.link} key={i}>
                <Nav.Link>{e.titulo}</Nav.Link>
              </LinkContainer>
            ))}
          </Nav>
          <Nav>
            <Nav.Link>Servidor: {process.env.REACT_APP_API_LINK}</Nav.Link>
          </Nav>
          {/* <Nav>
            <Nav.Link>
              <Button>Logon</Button>
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

function App() {
  return (
    <div className="m-3">
      <Router>
        <Menu />
        <div>
          <Routes>
            {setores.map((e, i) => (
              <Route key={e.id} path={e.link} exact element={e.widget} />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
