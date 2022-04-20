import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="container  d-flex flex-column align-items-center justify-content-center shelf-bg my-5 py-5">
        <h1>404 Error</h1>
        <h2>PAGE NOT FOUND</h2>
        <Link to='/'>
        <button className="btn btn-lg btn-outline-info">Go Home</button>
        </Link>
        
      </div>
    </>
  );
}

export default NotFound;
