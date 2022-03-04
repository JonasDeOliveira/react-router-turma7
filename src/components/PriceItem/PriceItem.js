function PriceItem(props) {
    return (
        <>
            <div className="col-md-4 px-2">
                <div className="mb-4 price-card price-card1 p-lg-4 p-md-3 p-4">
                    <div className="card-header p-0 card-heading">
                        {props.free ? <h4 className="mb-4">Free</h4>: ''}
                    </div>
                    <div className="card-body p-0">
                        <div>
                            <img src={props.image}/>
                        </div>
                        <h1 className="card-title pricing-card-title my-price-title">{props.price}<small className="text-dull">/month</small>
                        </h1>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <ul className="list-unstyled list-pricing mt-3 mb-4">
                            <li>{props.domain} Domain</li>
                            <li>{props.users} users included</li>
                            <li>{props.storage}of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                        </ul>
                        <div className="mt-4">
                            <a href="signup.html" className="btn btn-lg btn-outline-primary btn-style border-btn">Sign up for
                                free</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PriceItem