import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';

function LayoutComponent({ navClass }) {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    return (
        <>
            <nav id='navbar' className={`navbar navbar-expand-lg p-4 ${navClass}`}>
                <div className="container-fluid mt-3">
                    <a href="#" className="navbar-brand">Logo</a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <Link
                                to="/home"
                                className={`nav-item nav-link ${location.pathname === '/' || location.pathname === '/home' ? 'actived' : ''}`}
                            >
                                Anasayfa
                            </Link>

                            <Link
                                to="/contact"
                                className={`nav-item nav-link ${location.pathname === '/contact' ? 'actived' : ''}`}
                            >
                                İletişim
                            </Link>
                            <Link
                                to="/projects"
                                className={`nav-item nav-link ${location.pathname === '/projects' ? 'actived' : ''}`}
                            >
                                Projelerimiz
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default LayoutComponent;
