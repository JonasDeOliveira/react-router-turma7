import { Link } from 'react-router-dom'

function Menu() {
    return (
        <>
            {/* sidebar menu start */}
            <div className="sidebar-menu sticky-sidebar-menu">

                {/* logo start */}
                <div className="logo">
                    <h1><Link to="/">Collective</Link></h1>
                </div>

                {/* if logo is image enable this */}
                {/* image logo --
                    <div className="logo">
                    <a href="index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" className="img-fluid" style="height:35px;" />
                    </a>
                    </div>*/}
                {/* //image logo */}

                <div className="logo-icon text-center">
                    <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon" /> </a>
                </div>
                {/* //logo end */}

                <div className="sidebar-menu-inner">

                    {/* sidebar nav start */}
                    <ul className="nav nav-pills nav-stacked custom-nav">
                        <li className="active"><Link to="/"><i className="fa fa-tachometer"></i><span> Dashboard</span></Link>
                        </li>
                        <li className="menu-list">
                            <a href="#"><i className="fa fa-cogs"></i>
                                <span>Elements <i className="lnr lnr-chevron-right"></i></span></a>
                            <ul className="sub-menu-list">
                                <li><a href="carousels.html">Carousels</a> </li>
                                <li><a href="cards.html">Default cards</a> </li>
                                <li><a href="people.html">People cards</a></li>
                            </ul>
                        </li>
                        <li><Link to="/pricing"><i className="fa fa-table"></i> <span>Pricing tables</span></Link></li>
                        <li><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
                        <li><a href="forms.html"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
                    </ul>
                    {/* //sidebar nav end */}
                    {/* toggle button start */}
                    <a className="toggle-btn">
                        <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
                        <i className="fa fa-angle-double-right menu-collapsed__right"></i>
                    </a>
                    {/* //toggle button end */}
                </div>
            </div>
            {/* //sidebar menu end */}
        </>
    )
}

export default Menu