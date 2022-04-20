import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    let navigate = useNavigate();
    return (
        <>
        <header className="fixed-top">
            <div className="container-fluid header-bg p-3">
            <div className="row align-items-center justify-content-around">
                <div className="col-xl-6">
                <div className=" w-50 m-auto text-sm-center mb-sm-4">
                    <h1 className="mb-0">
                    <span className="text-danger fs-1 fw-bolder">My</span>
                    <span className=" fs-2 fw-bolder">Reads</span>
                    </h1>
                </div>
                </div>
                <div className="col-xl-6">
                <div className=" w-50 m-auto text-sm-center mb-sm-4">
                    <button
                    className="btn btn-lg btn-outline-success"
                    onClick={() => navigate("/search")}
                    >
                    Search Anew Book <i className="fas fa-search fs-4 ms-2"></i>
                    </button>
                </div>
                </div>
            </div>
            </div>
        </header>
        </>
    );
}

export default Header;
