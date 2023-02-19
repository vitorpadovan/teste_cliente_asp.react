import AlertaDesenvolvimento from '../../components/alerta_desenvolvimento/alerta_desenvolvimento';
import './HomePage.css'
function HomePage(props) {
    // return <div className="homePage">Gestão de Clientes</div>
    return <div className="d-flex align-items-center justify-content-center vh-100 flex-column text-center" >
        <h1 className='container'>Gestão de Clientes</h1>
        <AlertaDesenvolvimento />
    </div>
}

export default HomePage;