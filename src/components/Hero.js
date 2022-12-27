import React, { useState, useEffect } from "react";
import Header from "./Header";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../pages/connector";
import { toast } from "react-toastify";
import "../styles/Hero.css";

let isConfirm = false;

const Hero = props => {
  
  const { account, activate, deactivate, error, active, chainId } = useWeb3React();
  const { promiseData } = props;
  
  const handleLogin = async () => {
    //   const { address, status } = await connectWallet();
    //   console.log("address => ", address)
    //   console.log("status  => ", status)
      isConfirm = true
      localStorage.setItem("accountStatus", "1");
      toast.success('Successfully Connected to Metamask', {
        position: "bottom-right",
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      activate(injected)
  }

  const handleLogout = () => {
        isConfirm = false
        localStorage.removeItem("accountStatus")
        toast.success('Disconnected', {
            position: "bottom-right",
            autoClose: 2000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        deactivate()
  }

  function copyToClipBoard() {
      var x = document.getElementById("snackbar");
      x.className = "show";
      setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  useEffect(() => {
    
      if (!chainId && isConfirm) {
          const { ethereum } = window;
          (async () => {
              try {
                  await ethereum.request({
                      method: "wallet_switchEthereumChain",
                      params: [{ chainId: "0xA869" }],		// Testnet fuji
		      // params: [{ chainId: "0xa86a" }], 	// Mainnet avax/avalanche
                  });
              } catch (switchError) {
                  if (switchError.code === 4902) {
                      try {
			  /* Testnet */
                          await ethereum.request({
                              method: "wallet_addEthereumChain",
                              params: [
                                  {
                                      chainId: "0xA869",
                                      chainName: "Avalanche Testnet C-Chain",
                                      nativeCurrency: {
                                          name: "Avalanche",
                                          symbol: "AVAX",
                                          decimals: 18,
                                      },
                                      rpcUrls: ["https://api.avax-test.network/ext/bc/C/rpc"],
                                      blockExplorerUrls: ["https://testnet.snowtrace.io/"],
                                  },
                              ],
                          });
			  /*  Testnet */

			  /* Mainnet 
                          await ethereum.request({
                              method: "wallet_addEthereumChain",
                              params: [
                                  {
                                      chainId: "0xa86a",
                                      chainName: "Avalanche C-Chain",
                                      nativeCurrency: {
                                          name: "Avalanche",
                                          symbol: "AVAX",
                                          decimals: 18,
                                      },
				      rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                                      blockExplorerUrls: ["https://snowtrace.io/"],
                                  },
                              ],
                          });
			  Mainnet */

                      } catch (addError) {
                          console.error(addError);
                      }
                  }
              }
              activate(injected);
          })();
          isConfirm = false;
      }
  }, [account, error, active, chainId, activate ]);


  useEffect(() => {
      if (!active && localStorage.getItem("accountStatus")) {
          activate(injected);
      }
  }, [ active, activate])

  return (
    <>
      <Header account={account} handleLogin={handleLogin} handleLogout={handleLogout} copyToClipBoard={copyToClipBoard} promiseData={promiseData} />
      {/* <NotificationContainer /> */}
    </>
  );
};

export default Hero;
