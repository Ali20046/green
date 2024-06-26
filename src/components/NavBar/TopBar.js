import React from 'react'

const TopBar = () => {
    return (
        <section id="topbar" className="d-flex align-items-center">
            <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope-fill"></i><a href="">info@example.com</a>
                    <i className="bi bi-phone-fill phone-icon"></i> +1 5589 55488 55
                </div>
                <div className="social-links d-none d-md-block">
                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
        </section >
    )
}

export default TopBar