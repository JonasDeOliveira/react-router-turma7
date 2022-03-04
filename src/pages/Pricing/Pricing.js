import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import PriceList from '../../components/PriceList/PriceList'
import Header from '../../components/Header/Header'

function Pricing() {
    return (
        <>
            <section>
                <Menu/>
                <Header/>
                <div className="main-content">
                    <div className="container-fluid content-top-gap">
                        {/* breadcrumbs */}
                        <nav aria-label="breadcrumb" className="mb-4">
                            <ol className="breadcrumb my-breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Pricing Tables</li>
                            </ol>
                        </nav>
                        {/* //breadcrumbs */}
                        {/* pricing */}
                        <PriceList/>
                        {/* pricing version 2 */}
                        <div className="pricing-version-2">
                            <div className="card card_border mb-5">
                                <div className="cards__heading">
                                    <h3>Pricing Tables -<span> Version 2</span></h3>
                                </div>
                                <div className="card-body">
                                    <div className="row px-2">

                                        {/* Table #1  */}
                                        <div className="col-lg-4 col-md-6 px-2 mb-4">
                                            <div className="card text-center card__hover">
                                                <div className="card-header">
                                                    <h3 className="display-4"><span className="currency">$</span>19<span className="period">/month</span></h3>
                                                </div>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Basic Plan
                                                    </h4>
                                                    <ul className="list-group">
                                                        <li className="list-group-item">1 Domain</li>
                                                        <li className="list-group-item">Ultimate Features</li>
                                                        <li className="list-group-item">Responsive Ready</li>
                                                        <li className="list-group-item">Editor Ready Builder</li>
                                                        <li className="list-group-item">Limited UI Blocks</li>
                                                        <li className="list-group-item">24/7 Support System</li>
                                                    </ul>
                                                    <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Table #2  */}
                                        <div className="col-lg-4 col-md-6 px-2 mb-4">
                                            <div className="card text-center card__hover">
                                                <div className="card-header">
                                                    <h3 className="display-4"><span className="currency">$</span>29<span className="period">/month</span></h3>
                                                </div>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Regular Plan
                                                    </h4>
                                                    <ul className="list-group">
                                                        <li className="list-group-item">10 Domain</li>
                                                        <li className="list-group-item">Ultimate Features</li>
                                                        <li className="list-group-item">Responsive Ready</li>
                                                        <li className="list-group-item">Editor Ready Builder</li>
                                                        <li className="list-group-item">Unlimited UI Blocks</li>
                                                        <li className="list-group-item">24/7 Support System</li>
                                                    </ul>
                                                    <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Table #3  */}
                                        <div className="col-lg-4 col-md-6 px-2 mb-4">
                                            <div className="card text-center card__hover">
                                                <div className="card-header">
                                                    <h3 className="display-4"><span className="currency">$</span>39<span className="period">/month</span></h3>
                                                </div>
                                                <div className="card-block">
                                                    <h4 className="card-title">
                                                        Premium Plan
                                                    </h4>
                                                    <ul className="list-group">
                                                        <li className="list-group-item">15 Domain</li>
                                                        <li className="list-group-item">Ultimate Features</li>
                                                        <li className="list-group-item">Responsive Ready</li>
                                                        <li className="list-group-item">Editor Ready Builder</li>
                                                        <li className="list-group-item">Unlimited UI Blocks</li>
                                                        <li className="list-group-item">24/7 Support System</li>
                                                    </ul>
                                                    <a href="#" className="btn btn-style btn-primary mt-4">Choose Plan</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pricing