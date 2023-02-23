// import AlertaDesenvolvimento from '../../components/alerta_desenvolvimento/alerta_desenvolvimento';
import OffLine from '../../components/off_line/OffLine';
import './HomePage.css'
function HomePage(props) {
    // return <div className="homePage">Gestão de Clientes</div>
    return <div className="d-flex align-items-center justify-content-center vh-100 flex-column text-center" >
        <h1 className='container'>Gestão de Clientes</h1>
        <OffLine />
    </div>
}

export default HomePage;