import React from 'react'
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free shipping over $100</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">Offers only available until this weekend!</p>
            </div>
          </div>
        </div>
      </header>
      <div className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Famazon</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search product"
                       aria-label="Search product" aria-describedby="basic-addon2"/>
                <span className="input-group-text p-2" id="basic-addon2"><BsSearch/></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gx-10 text-white cart">
                    <img src="/images/compare.svg" alt="compare"/>
                    <p>Compare</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gx-10 text-white cart">
                    <img src="/images/wishlist.svg" alt="wishlight"/>
                    <p>Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white cart">
                    <img src="/images/menu.svg" alt="menu"/>
                    <p>Menu</p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center text-white cart">
                    <img src="/images/cart.svg" alt="cart"/>
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p>$12.59</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1"
                            data-bs-toggle="dropdown" aria-expanded="false">
                      Shop Catagories
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="/">Action</a></li>
                      <li><a className="dropdown-item" href="/">Another action</a></li>
                      <li><a className="dropdown-item" href="/">Something else here</a></li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink className="text=white" to="">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;