import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar(props) {
    props.setprogress(0)
    let location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg text-light font-weight-bold" style={{ backgroundColor: "#030637" }} >
            <div className="container-fluid">
                <a className="navbar-brand text-light font-weight-bolder" href="/api-cards-react">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item text-light">
                            <Link className={`nav-link text-light ${location.pathname === "/api-cards-react" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item text-light">
                            <Link className={`nav-link text-light ${location.pathname === "/about" ? "active" : ""}`} to="/about">{props.Page1}</Link>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="text-light form-control me-2 rounded-pill" type="search" placeholder="Search" onChange={props.search} aria-label="Search" style={{ backgroundColor: "#3C0753", border: "#3C0753" }} />
                    </form>

                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    Page1: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    Page1: "About"
}
