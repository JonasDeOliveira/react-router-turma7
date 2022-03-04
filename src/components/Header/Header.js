import ProfileImg from '../../assets/images/profileimg.jpg'


function Header() {

    return (
        <>
            <div className="header sticky-header">
                {/* notification menu start */}
                <div className="menu-right">
                    <div className="navbar user-panel-top">
                        <div className="search-box">
                            <form action="#search-results.html" method="get">
                                <input className="search-input" placeholder="Search Here..." type="search" id="search" />
                                <button className="search-submit" value=""><span className="fa fa-search"></span></button>
                            </form>
                        </div>
                        <div className="user-dropdown-details d-flex">
                            <div className="profile_details_left">
                                <ul className="nofitications-dropdown">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                            className="fa fa-bell-o"></i><span className="badge blue">3</span></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="notification_header">
                                                    <h3>You have 3 new notifications</h3>
                                                </div>
                                            </li>
                                            <li><a href="#" className="grid">
                                                <div className="user_img"><img src="assets/images/avatar1.jpg" alt="" /></div>
                                                <div className="notification_desc">
                                                    <p>Johnson purchased template</p>
                                                    <span>Just Now</span>
                                                </div>
                                            </a></li>
                                            <li className="odd"><a href="#" className="grid">
                                                <div className="user_img"><img src="assets/images/avatar2.jpg" alt="" /></div>
                                                <div className="notification_desc">
                                                    <p>New customer registered </p>
                                                    <span>1 hour ago</span>
                                                </div>
                                            </a></li>
                                            <li><a href="#" className="grid">
                                                <div className="user_img"><img src="assets/images/avatar3.jpg" alt="" /></div>
                                                <div className="notification_desc">
                                                    <p>Lorem ipsum dolor sit amet </p>
                                                    <span>2 hours ago</span>
                                                </div>
                                            </a></li>
                                            <li>
                                                <div className="notification_bottom">
                                                    <a href="#all" className="bg-primary">See all notifications</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><i
                                            className="fa fa-comment-o"></i><span className="badge blue">4</span></a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="notification_header">
                                                    <h3>You have 4 new messages</h3>
                                                </div>
                                            </li>
                                            <li><a href="#" className="grid">
                                                <div className="user_img"><img src="assets/images/avatar1.jpg" alt="" /></div>
                                                <div className="notification_desc">
                                                    <p>Johnson purchased template</p>
                                                    <span>Just Now</span>
                                                </div>
                                            </a></li>
                                            <li className="odd"><a href="#" className="grid">
                                                <div className="user_img"><img src="assets/images/avatar2.jpg" alt="" /></div>
                                                <div className="notification_desc">
                                                    <p>New customer registered </p>
                                                    <span>1 hour ago</span>
                                                </div>
                                            </a></li>
                                            <li><a href="#" className="grid">
                                                <div className="user_img"><img src="assets/images/avatar3.jpg" alt="" /></div>
                                                <div className="notification_desc">
                                                    <p>Lorem ipsum dolor sit amet </p>
                                                    <span>2 hours ago</span>
                                                </div>
                                            </a></li>
                                            <li><a href="#" className="grid">
                                                <div className="user_img"><img src="assets/images/avatar1.jpg" alt="" /></div>
                                                <div className="notification_desc">
                                                    <p>Johnson purchased template</p>
                                                    <span>Just Now</span>
                                                </div>
                                            </a></li>
                                            <li>
                                                <div className="notification_bottom">
                                                    <a href="#all" className="bg-primary">See all messages</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="profile_details">
                                <ul>
                                    <li className="dropdown profile_details_drop">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                                            aria-expanded="false">
                                            <div className="profile_img">
                                                <img src={ProfileImg} className="rounded-circle" alt="" />
                                                <div className="user-active">
                                                    <span></span>
                                                </div>
                                            </div>
                                        </a>
                                        <ul className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                                            <li className="user-info">
                                                <h5 className="user-name">John Deo</h5>
                                                <span className="status ml-2">Available</span>
                                            </li>
                                            <li> <a href="#"><i className="lnr lnr-user"></i>My Profile</a> </li>
                                            <li> <a href="#"><i className="lnr lnr-users"></i>1k Followers</a> </li>
                                            <li> <a href="#"><i className="lnr lnr-cog"></i>Setting</a> </li>
                                            <li> <a href="#"><i className="lnr lnr-heart"></i>100 Likes</a> </li>
                                            <li className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/*notification menu end */}
            </div>
        </>
    )
}

export default Header