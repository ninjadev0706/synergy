import React, { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../pages/connector";
import { toast } from "react-toastify";
let isConfirm = false;

const Menu = () => {
  const { account, activate, deactivate, error, active, chainId } =
    useWeb3React();

  const handleLogin = async () => {
    isConfirm = true;
    localStorage.setItem("accountStatus", "1");
    toast.success("Successfully Connected to Metamask", {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    activate(injected);
  };

  const handleLogout = () => {
    isConfirm = false;
    localStorage.removeItem("accountStatus");
    toast.success("Disconnected", {
      position: "bottom-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    deactivate();
  };

  function copyToClipBoard() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  return (
    <section className="main-header">
      <header className="home-header">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg align-items-center">
                <a className="navbar-brand" href="#">
                  <img src="/images/logo.png" alt="" className="img-fluid" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="fa fa-bars"></i>
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo02"
                >
                  <ul className="navbar-nav mt-2 mt-lg-0 ml-auto mx-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#home">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#about">
                        About ICO
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#benefit">
                        Benefits
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#token">
                        About Token
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#roadmap">
                        Roadmap
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#team">
                        Team
                      </a>
                    </li>
                  </ul>
                </div>
                {!account ? (
                  <div className="link" onClick={handleLogin}>
                    <a href="#" className="wallet-btn">
                      <span className="txt">Connect Wallet</span>
                    </a>
                  </div>
                ) : (
                  <div
                    className="link"
                    onClick={() => {
                      navigator.clipboard.writeText(account);
                      copyToClipBoard();
                    }}
                  >
                    <a href="#" className="wallet-btn">
                      <div className="right-header-wallet-flex">
                        <div
                          className="cursorPointer"
                          onClick={() => {
                            navigator.clipboard.writeText(account);
                            copyToClipBoard();
                          }}
                        >
                          <p>
                            {account.slice(0, 6) + "..." + account.slice(-4)}
                          </p>
                        </div>&nbsp;
                        <img
                          alt="logo"
                          className="wallet-img"
                          onClick={handleLogout}
                          src="wallet-icon.png"
                        />
                        <span id="snackbar">Copied</span>
                      </div>
                    </a>
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Menu;
