import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer>
        <div className="top-section container py-3">
            <div className="row d-flex align-items-center py-4">
                <div className="col-5">
                    <div className="footer-top d-flex gap-30">
                        <img src="/images/newsletter.png" alt="newsletter"/>
                        <h2 className="text-white mb-0">Sign up for newsletter</h2>
                    </div>
                </div>
                <div className="col-7">
                    <div className="input-group">
                        <button className="input-group-text" id="basic-addon1">Submit</button>
                        <input type="text" className="form-control" placeholder="email" aria-label="email"
                               aria-describedby="basic-addon1" />
                    </div>
                </div>
            </div>
        </div>
        <div className="container middle-section">
            <div className="row">
                <div className="col-4 text-white mb-3">
                    <h4>Contact Us</h4>
                    <div className="contact-links d-flex flex-column">
                        <address>
                            <p>3572 Preston Street Moundridge, KS 67107</p>
                            <p>Telephone: 320-899-6324</p>
                            <p>Mobile: 620-200-1488</p>
                        </address>
                    </div>
                </div>
                <div className="col-3 text-white mb-3">
                    <h4>Information</h4>
                    <div className="information-links d-flex flex-column">
                        <Link className="footer-link" to="/">Privacy Policy</Link>
                        <Link className="footer-link" to="/">Refund Policy</Link>
                        <Link className="footer-link" to="/">Shipping Policy</Link>
                        <Link className="footer-link" to="/">Terms of Service</Link>
                        <Link className="footer-link" to="/">Blogs</Link>
                    </div>
                </div>
                <div className="col-3 text-white mb-3">
                    <h4>Account</h4>
                    <div className="account-links d-flex flex-column">
                        <Link className="footer-link" to="/">Search</Link>
                        <Link className="footer-link" to="/">About us</Link>
                        <Link className="footer-link" to="/">Faq</Link>
                        <Link className="footer-link" to="/">Contact</Link>
                        <Link className="footer-link" to="/">Size Chart</Link>
                    </div>
                </div>
                <div className="col-2 text-white mb-3">
                    <h4>Quick Links</h4>
                    <div className="quick-links d-flex flex-column">
                        <Link className="footer-link" to="/">Accessories</Link>
                        <Link className="footer-link" to="/">Laptops</Link>
                        <Link className="footer-link" to="/">Headphones</Link>
                        <Link className="footer-link" to="/">Smart Watches</Link>
                        <Link className="footer-link" to="/">Tablets</Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottom-section container-fluid">
            <div className="row py-4">
                <div className="col-12">
                    <p className="mb-0 text-center text-white">&copy; {new Date().getFullYear()} </p>
                </div>
            </div>
        </div>
      </footer>
  )
}

export default Footer;