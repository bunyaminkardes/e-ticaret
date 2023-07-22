import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div id="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-2 flex-center">
                            <NavLink to="/"> <img id="logo" src="../../logo192.png" alt="logo"/> </NavLink>
                        </div>
                        <div className="col-lg-5">
                            <form id="search-bar">
                                <input type="search" placeholder="ara" />
                            </form>
                        </div>
                        <div className="col-lg-5">
                            user section
                        </div>
                    </div>
                </div>
            </div>
            <div className="kusak"></div>
            <div id="navbar">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div >
                                <ul>
                                    <li> <NavLink to="/elektronik">Elektronik</NavLink> </li>
                                    <li> <NavLink to="/kozmetik">Kozmetik</NavLink> </li>
                                    <li> <NavLink to="/moda">Moda</NavLink> </li>
                                    <li> <NavLink to="/spor-outdoor">Spor & Outdoor</NavLink> </li>
                                    <li> <NavLink to="/kitap-muzik-film-oyun">Kitap, Müzik, Film, Oyun</NavLink> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;