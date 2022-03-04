import { Link } from 'react-router-dom'
import Menu from '../../components/Menu/Menu'
import Header from '../../components/Header/Header'
import ItemsHome from '../../components/ItemsHome/ItemsHome'

function Home() {
    return (
        <>
            <section>
                <Menu/>
                <Header/>
                {/* main content start */}
                <div className="main-content">
                    
                    {/* content */}
                    <div className="container-fluid content-top-gap">
                    <ItemsHome/>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb my-breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                        <div className="welcome-msg pt-3 pb-4">
                            <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
                            <p>Very detailed {'&'} featured admin.</p>
                        </div>

                        {/* statistics data */}
                        <div className="statistics">
                            <div className="row">
                                <div className="col-xl-6 pr-xl-2">
                                    <div className="row">
                                        <div className="col-sm-6 pr-sm-2 statistics-grid">
                                            <div className="card card_border border-primary-top p-4">
                                                <i className="lnr lnr-users"> </i>
                                                <h3 className="text-primary number">29.75 M</h3>
                                                <p className="stat-text">Total Users</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 pl-sm-2 statistics-grid">
                                            <div className="card card_border border-primary-top p-4">
                                                <i className="lnr lnr-eye"> </i>
                                                <h3 className="text-secondary number">51.25 K</h3>
                                                <p className="stat-text">Daily Visitors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 pl-xl-2">
                                    <div className="row">
                                        <div className="col-sm-6 pr-sm-2 statistics-grid">
                                            <div className="card card_border border-primary-top p-4">
                                                <i className="lnr lnr-cloud-download"> </i>
                                                <h3 className="text-success number">166.89 M</h3>
                                                <p className="stat-text">Downloads</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 pl-sm-2 statistics-grid">
                                            <div className="card card_border border-primary-top p-4">
                                                <i className="lnr lnr-cart"> </i>
                                                <h3 className="text-danger number">1,250k</h3>
                                                <p className="stat-text">Purchased</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //statistics data */}

                        {/* charts */}
                        <div className="chart">
                            <div className="row">
                                <div className="col-lg-6 pr-lg-2 chart-grid">
                                    <div className="card text-center card_border">
                                        <div className="card-header chart-grid__header">
                                            Bar Chart
                                        </div>
                                        <div className="card-body">
                                            {/* bar chart */}
                                            <div id="container">
                                                <canvas id="barchart"></canvas>
                                            </div>
                                            {/* //bar chart */}
                                        </div>
                                        <div className="card-footer text-muted chart-grid__footer">
                                            Updated 2 hours ago
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 pl-lg-2 chart-grid">
                                    <div className="card text-center card_border">
                                        <div className="card-header chart-grid__header">
                                            Line Chart
                                        </div>
                                        <div className="card-body">
                                            {/* line chart */}
                                            <div id="container">
                                                <canvas id="linechart"></canvas>
                                            </div>
                                            {/* //line chart */}
                                        </div>
                                        <div className="card-footer text-muted chart-grid__footer">
                                            Updated just now
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* //charts */}

                        {/* chatting */}
                        <div className="data-tables">
                            <div className="row">
                                <div className="col-lg-12 chart-grid mb-4">
                                    <div className="card card_border p-4">
                                        <div className="card-header chart-grid__header pl-0 pt-0">
                                            Chatting
                                        </div>
                                        <div className="messaging">
                                            <div className="inbox_msg">
                                                <div className="inbox_people">
                                                    <div className="headind_srch">
                                                        <div className="srch_bar">
                                                            <div className="stylish-input-group">
                                                                <input type="text" className="search-bar" placeholder="Search Chat" />
                                                                <span className="input-group-addon">
                                                                    <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                                                </span> </div>
                                                        </div>
                                                    </div>
                                                    <div className="inbox_chat">
                                                        <div className="chat_list active_chat">
                                                            <div className="chat_people">
                                                                <div className="chat_img"> <img src="assets/images/avatar5.jpg" alt="Alexander" className="img-fluid" />
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>Alexander <span className="chat_date">1 hour ago</span></h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"> <img src="assets/images/avatar3.jpg" alt="Anderson" className="img-fluid" />
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>Anderson <span className="chat_date">5 hours ago</span></h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"> <img src="assets/images/avatar5.jpg" alt="Isabella" className="img-fluid" />
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>Isabella <span className="chat_date">Yesterday</span></h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"> <img src="assets/images/avatar4.jpg" alt="Charlotte" className="img-fluid" />
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>Charlotte <span className="chat_date">Mar 04</span></h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"> <img src="assets/images/avatar2.jpg" alt="Davidson" className="img-fluid" />
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>Davidson <span className="chat_date">Feb 18</span></h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"> <img src="assets/images/avatar1.jpg" alt="Elexa ker" className="img-fluid" />
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>Elexa ker <span className="chat_date">Feb 04</span></h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="chat_list">
                                                            <div className="chat_people">
                                                                <div className="chat_img"> <img src="assets/images/avatar4.jpg" alt="Charlotte" className="img-fluid" />
                                                                </div>
                                                                <div className="chat_ib">
                                                                    <h5>Charlotte <span className="chat_date">Jan 28</span></h5>
                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mesgs">
                                                    <div className="msg_history">
                                                        <div className="incoming_msg">
                                                            <div className="incoming_msg_img"> <img src="assets/images/avatar5.jpg" alt="Alexander"
                                                                className="img-fluid" /> </div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>Coming along nicely, we've got a Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                    </p>
                                                                    <span className="time_date"> 10:05 AM | Mar 9</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outgoing_msg">
                                                            <div className="sent_msg">
                                                                <p>Great start, I've added some Lorem ipsum dolor sit amet. </p>
                                                                <span className="time_date"> 12:15 PM | Mar 9</span>
                                                            </div>
                                                        </div>
                                                        <div className="incoming_msg">
                                                            <div className="incoming_msg_img"> <img src="assets/images/avatar5.jpg" alt="Alexander"
                                                                className="img-fluid" /> </div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit</p>
                                                                    <span className="time_date"> 09:16 AM | Yesterday</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outgoing_msg">
                                                            <div className="sent_msg">
                                                                <p>But I must explain to you.</p>
                                                                <span className="time_date"> 03:15 PM | Today</span>
                                                            </div>
                                                        </div>
                                                        <div className="incoming_msg">
                                                            <div className="incoming_msg_img"> <img src="assets/images/avatar5.jpg" alt="Alexander"
                                                                className="img-fluid" /> </div>
                                                            <div className="received_msg">
                                                                <div className="received_withd_msg">
                                                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                                                        voluptatum deleniti atque corrupti quos dolores.</p>
                                                                    <span className="time_date"> 03:16 PM | Today</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="type_msg">
                                                        <div className="input_msg_write">
                                                            <input type="text" className="write_msg" placeholder="Type a message" />
                                                            <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o"
                                                                aria-hidden="true"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* chatting */}

                        {/* accordions */}
                        <div className="accordions">
                            <div className="row">
                                {/* accordion style 1 */}
                                <div className="col-lg-12 mb-4">
                                    <div className="card card_border">
                                        <div className="card-header chart-grid__header">
                                            Bootstrap Accordions
                                        </div>
                                        <div className="card-body">
                                            <div className="accordion" id="accordionExample">
                                                <div className="card">
                                                    <div className="card-header bg-white p-0" id="headingOne">
                                                        <a href="#" className="card__title p-3" data-toggle="collapse" data-target="#collapseOne"
                                                            aria-expanded="true" aria-controls="collapseOne">Collapsed accordion heading </a>
                                                    </div>

                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"
                                                        data-parent="#accordionExample">
                                                        <div className="card-body para__style">
                                                            Nulla tincidunt quam justo, in tincidunt tortor sollicitudin a. Donec porta posuere
                                                            libero sed varius. Phasellus hendrerit commodo sem, at sagittis sapien semper quis.
                                                            Etiam vitae facilisis nibh. Maecenas erat nisl, blandit at nunc a, lobortis sagittis
                                                            ex. Maecenas pharetra pulvinar tincidunt.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header bg-white p-0" id="headingTwo">
                                                        <a href="#" className="card__title p-3" data-toggle="collapse" data-target="#collapseTwo"
                                                            aria-expanded="false" aria-controls="collapseTwo">Click here to collapse accordion</a>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div className="card-body para__style">
                                                            Nulla tincidunt quam justo, in tincidunt tortor sollicitudin a. Donec porta posuere
                                                            libero sed varius. Phasellus hendrerit commodo sem, at sagittis sapien semper quis.
                                                            Etiam vitae facilisis nibh. Maecenas erat nisl, blandit at nunc a, lobortis sagittis
                                                            ex. Maecenas pharetra pulvinar tincidunt.
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="card-header bg-white p-0" id="headingThree">
                                                        <a href="#" className="card__title p-3" data-toggle="collapse" data-target="#collapseThree"
                                                            aria-expanded="false" aria-controls="collapseThree">Click here to
                                                            collapse accordion</a>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree"
                                                        data-parent="#accordionExample">
                                                        <div className="card-body para__style">
                                                            Nulla tincidunt quam justo, in tincidunt tortor sollicitudin a. Donec porta posuere
                                                            libero sed varius. Phasellus hendrerit commodo sem, at sagittis sapien semper quis.
                                                            Etiam vitae facilisis nibh. Maecenas erat nisl, blandit at nunc a, lobortis sagittis
                                                            ex. Maecenas pharetra pulvinar tincidunt.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* //accordion style 1 */}
                            </div>
                        </div>
                        {/* //accordions */}

                        {/* modals */}
                        <section className="template-cards">
                            <div className="card card_border">
                                <div className="cards__heading">
                                    <h3>Modals - <span>2 different types of bootstrap modals</span></h3>
                                </div>
                                <div className="card-body pb-0">
                                    <div className="row">
                                        <div className="col-lg-6 pr-lg-2 chart-grid">
                                            <div className="card text-center card_border">
                                                <div className="card-header chart-grid__header">
                                                    Demo modal
                                                </div>
                                                <div className="card-body">
                                                    {/* Button trigger modal */}
                                                    <button type="button" className="btn btn-primary btn-style" data-toggle="modal"
                                                        data-target="#exampleModal">
                                                        Launch demo
                                                    </button>

                                                    {/* Modal */}
                                                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                        <div className="modal-dialog" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-success">Save changes</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 chart-grid">
                                            <div className="card text-center card_border">
                                                <div className="card-header chart-grid__header">
                                                    Vertical centered
                                                </div>
                                                <div className="card-body">
                                                    {/* Button trigger modal */}
                                                    <button type="button" className="btn btn-primary btn-style" data-toggle="modal"
                                                        data-target="#exampleModalCenter">
                                                        Launch demo
                                                    </button>
                                                    {/* Modal */}
                                                    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
                                                        aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered" role="document">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div className="modal-body">
                                                                    ...
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                                    <button type="button" className="btn btn-success">Save changes</button>
                                                                </div>
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
                        {/* //modals */}

                    </div>
                    {/* //content */}
                </div>
                {/* main content end*/}
            </section>
        </>

    )
}

export default Home