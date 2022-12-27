import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = ({
  account,
  handleLogin,
  handleLogout,
  copyToClipBoard,
  promiseData,
}) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const navigate = useNavigate();
  var location = useLocation();

  const handleSelectTab = (value) => {
    setSelectedTab(value);
  };

  const toggleMenu = () => {
    let x = document.getElementById("toggle-navbar-links");
    let y = document.getElementById("header");
    if (x.className === "navbar-links") {
      x.className += " responsive";
      y.className += " headerResponsive";
    } else {
      x.className = "navbar-links";
    }
  };

  return (
    <div id="header" className="header">
      <div id="link-containers">
        <Link to="/" id="logo">
          <img alt="logo" src="c-coin-logo.png" className="spinblade-icon" />
          &nbsp;
          <h1 className="logo-nulshock">Buy Culture Coin</h1>
        </Link>
        <div className="navbar-links" id="toggle-navbar-links">
          <div className="t-white link toggle-wallet-btn">
            {!account ? (
              <button
                className="connect-wallet link fs-18"
                onClick={handleLogin}
              >
                Connect Wallet
              </button>
            ) : (
              <button className="connect-wallet">
                <div className="right-header-wallet-flex">
                  <div
                    className="cursorPointer"
                    onClick={() => {
                      navigator.clipboard.writeText(account);
                      copyToClipBoard();
                    }}
                  >
                    <p>{account.slice(0, 6) + "..." + account.slice(-4)}</p>
                  </div>
                  <img
                    alt="logo"
                    className="wallet-img"
                    onClick={handleLogout}
                    src="wallet-icon.png"
                  />
                  <span id="snackbar">Copied</span>
                </div>
              </button>
            )}
          </div>
          <div className="toggle-link-group">
            <a
              className={
                location.pathname === "/"
                  ? " cursorPointer link fs-18 ml-30 active"
                  : " cursorPointer link fs-18 font-dark ml-30"
              }
              onClick={() => {
                handleSelectTab(1);
                navigate("/");
              }}
            >
              Presale
            </a>
            <a
              className={
                location.pathname === "/vesting"
                  ? " cursorPointer link fs-18 ml-30 active"
                  : " cursorPointer fs-18 ml-30 font-dark link"
              }
              onClick={() => {
                handleSelectTab(3);
                navigate("/vesting");
              }}
            >
              Claim CC
            </a>
            <a
              className={
                location.pathname === "/swap"
                  ? " cursorPointer link fs-18 ml-30 active"
                  : " cursorPointer fs-18 ml-30 font-dark link"
              }
              onClick={() => {
                handleSelectTab(2);
                navigate("/swap");
              }}
            >
              Swap
            </a>
          </div>
          <div className="toggle-coin-group">
            <div className="ccoin-title">
              <img alt="logo" src="c-coin-small.png" width={40} height={40} />
              <div className="ml-5">
                <p className="ccoin-title t-gray fs-14">Locked $CC</p>
                <p className="ccoin-value t-white fs-18">
                  {promiseData["vested_token"]
                    ? promiseData["vested_token"]
                    : 0}
                </p>
              </div>
            </div>
            <div className="ccoin-title">
              <img alt="logo" src="c-coin-small.png" width={40} height={40} />
              <div className="ml-5">
                <p className="ccoin-title t-gray fs-14">$CC</p>
                <p className="ccoin-value t-white fs-18">
                  {promiseData["ccoin_token"] ? promiseData["ccoin_token"] : 0}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-header">
        <div className="right-header-icon-flex">
          <div className="ccoin-title ml-50">
            <img alt="logo" src="c-coin-small.png" width={40} height={40} />
            <div className="ml-5">
              <p className="ccoin-title t-gray fs-14">Locked $CC</p>
              <p className="ccoin-value t-white fs-18">
                {promiseData["locked_token"] ? promiseData["locked_token"] : 0}
              </p>
            </div>
          </div>
          <div className="ccoin-title ml-50">
            <img alt="logo" src="c-coin-small.png" width={40} height={40} />
            <div className="ml-5">
              <p className="ccoin-title t-gray fs-14">$CC</p>
              <p className="ccoin-value t-white fs-18">
                {promiseData["ccoin_token"] ? promiseData["ccoin_token"] : 0}
              </p>
            </div>
          </div>
        </div>
        <div className="right-header-toggle-flex">
          <div className="t-white link ml-50 wallet-btn">
            {!account ? (
              <button
                className="connect-wallet link fs-18"
                onClick={handleLogin}
              >
                Connect Wallet
              </button>
            ) : (
              <button className="connect-wallet">
                <div className="right-header-wallet-flex">
                  <div
                    className="cursorPointer"
                    onClick={() => {
                      navigator.clipboard.writeText(account);
                      copyToClipBoard();
                    }}
                  >
                    <p>{account.slice(0, 6) + "..." + account.slice(-4)}</p>
                  </div>
                  <img
                    alt="logo"
                    className="wallet-img"
                    onClick={handleLogout}
                    src="wallet-icon.png"
                  />
                  <span id="snackbar">Copied</span>
                </div>
              </button>
            )}
          </div>
          <a className="navbar-menu-icon" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="30"
              height="30"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              <path fill="white" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
