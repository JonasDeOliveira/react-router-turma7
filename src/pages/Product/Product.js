import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';

function Product() {
    return (
        <>
            <h1>Produto</h1>
            <Link to={'/'}>Voltar para home</Link>
            <Footer/>
        </>
    )
}

export default Product