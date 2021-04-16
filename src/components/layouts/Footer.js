import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-12 text-center">
            <a href="#top" className="btn btn-outline-info position-fixed" style={{bottom:'4em',right:'1em',}}>
              <i className="fa fas fa-arrow-up"></i>
            </a>
            <p>Copyright &copy; &nbsp; {new Date().getFullYear()} &nbsp;
            All rights reserved | 測試網站 by <Link to='https://github.com/spacefisher09/shopping_cart'>spacefisher</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}


export default Footer;
