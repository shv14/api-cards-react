import React from 'react';
import { Link } from 'react-router-dom';
import "../Home.css"
export default function Home() {
  return (
    <>
      <div className="container-fluid container-fluid-custom py-md-5">
        <main>
          <div className="row pt-5 text-center justify-content-center">
            <div className="col-md-12 col-lg-6 mb-6 mb-md-0 query">
              <h1 className="display-2 text-light fw-bold mb-4 position-relative">
                Dive into Random Awesomeness
              </h1>
              <p className="fs-4 mb-4 text-light">
                It is a simple to use app that renders random posts using API calls.
              </p>
              <Link to="/about" className="btn bg-dark text-light bt-lg rounded-pill" style={{ backgroundColor: "#3C0753", border: "#3C0753" }} >Try RandomRevolve, it's FREE!</Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
