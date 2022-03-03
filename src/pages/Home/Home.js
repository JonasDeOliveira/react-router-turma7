import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer';


function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to={'/product'}>Ir para produto</Link>
            <Footer/>
        </>
        
    )
}

export default Home