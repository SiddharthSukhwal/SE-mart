import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}
<footer className="text-center text-lg-start bg-light text-muted">
  {/* <!-- Section: Social media --> */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* <!-- Left --> */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* <!-- Left --> */}

    {/* <!-- Right --> */}
    <div>
      <Link to="" className="me-4 text-reset">
        <i className="fab fa-facebook-f"></i>
      </Link>
      <Link to="" className="me-4 text-reset">
        <i className="fab fa-twitter"></i>
      </Link>
      <Link to="" className="me-4 text-reset">
        <i className="fab fa-google"></i>
      </Link>
      <Link to="" className="me-4 text-reset">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link to="" className="me-4 text-reset">
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link to="" className="me-4 text-reset">
        <i className="fab fa-github"></i>
      </Link>
    </div>
    {/* <!-- Right --> */}
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Company name
          </h6>
          <p>
           Siddharth Interprises
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <Link to="/" className="text-reset">Air-Conditioner</Link>
          </p>
          <p>
            <Link to="/" className="text-reset">Refrigerator</Link>
          </p>
          <p>
            <Link to="/" className="text-reset">Washing Machine</Link>
          </p>
          <p>
            <Link to="/" className="text-reset">Microwave</Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <Link to="/" className="text-reset">Pricing</Link>
          </p>
          <p>
            <Link to="/" className="text-reset">Settings</Link>
          </p>
          <p>
            <Link to="/" className="text-reset">Orders</Link>
          </p>
          <p>
            <Link to="" className="text-reset">Help</Link>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> 31-A Meera Nagar, Colectory, Chittorgarh (Raj.)</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            sidhart1213.com
          </p>
          <p><i className="fas fa-phone me-3"></i> +919460711671</p>
          <p><i className="fas fa-print me-3"></i> +918306523783</p>
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  {/* <!-- Section: Links  --> */}

  {/* <!-- Copyright --> */}
  <div className="text-center p-4" >
    © 2021 Copyright:
    <Link className="text-reset fw-bold" to="/Home">SE Mart</Link>
  </div>
  {/* <!-- Copyright --> */}
</footer>
{/* <!-- Footer --> */}
    </div>
  )
}

export default Footer
