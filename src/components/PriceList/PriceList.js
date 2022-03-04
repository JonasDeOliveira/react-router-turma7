import PriceItem from '../PriceItem/PriceItem'
import {lista} from './lista'

function PriceList() {

    const getPriceItem = () => {
        return lista.map(item => {
            return (
                <PriceItem 
                    price={item.price} 
                    domain={item.domain} 
                    users={item.users} 
                    storage={item.storage}
                    image={item.image}/>
            )
        })
    }

    return (
        <>
            <section className="pricing">
                <div className="card card_border mb-5">
                    <div className="cards__heading">
                        <h3>Pricing Tables -<span> Version 1</span></h3>
                    </div>
                    <div className="card-body">
                        {/* pricing version 1 */}

                        {/*//BLOCK ROW END*/}

                        <section className="w3l-pricing1">
                            <div className="row px-2">
                                {getPriceItem()}
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PriceList