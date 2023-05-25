"use client";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { Contract, providers } from "ethers";
import styles from "./style/Home.module.css";
import jsonWhitelist from "../utils/whitelist.json";

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [joinedWhitelist, setJoinedWhitelist] = useState(false);
  const [loading, setLoading] = useState(false);
  const [numOfWhitelisted, setNumOfWhitelisted] = useState(0);
  const web3ModelRef = useRef();
  const abi = jsonWhitelist;
  const WHITELIST_CONTRACT_ADDRESS =
    "0x53B5C3A559d2ba2f1550Bc976e7E53b47cb689a3";

  const getProviderOrSigner = async (needSigners = false) => {
    const provider = await web3ModelRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Ploygon Mumbai");
      throw new Error("Change network to Ploygon Mumbai");
    }

    if (needSigners) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  const addAddressToWhitelist = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer
      );

      const txn = await whitelistContract.addAddress();
      setLoading(true);
      await txn.wait();
      setLoading(false);

      await getNoOfwhitelisted();
      setJoinedWhitelist(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getNoOfwhitelisted = async () => {
    try {
      const provider = await getProviderOrSigner();
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        provider
      );
      const _numberOfWhitelisted =
        await whitelistContract.numWhitelistedAddress();
      setNumOfWhitelisted(_numberOfWhitelisted);
    } catch (error) {
      console.log(error);
    }
  };

  const checkWhitelistAddress = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      const whitelistContract = new Contract(
        WHITELIST_CONTRACT_ADDRESS,
        abi,
        signer,
      );
      
      const address = await signer.getAddress();
      const _joinedWhitelist = await whitelistContract.isWhitelistAddress(
        address
      );
      setJoinedWhitelist(_joinedWhitelist);
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      await getProviderOrSigner();
      setWalletConnected(true);
      checkWhitelistAddress();
      getNoOfwhitelisted();
    } catch (error) {
      console.log(error);
    }
  };

  const renderButton = () => {
    if (walletConnected) {
      if (joinedWhitelist) {
        return (
          <div className={styles.description}>
            Thanks for joining the Whitelist!
          </div>
        );
      } else if (loading) {
        return <button className={styles.button}>Loading...</button>;
      } else {
        return (
          <button onClick={addAddressToWhitelist} className={styles.button}>
            Join the Whitelist!
          </button>
        );
      }
    } else {
      return (
        <button onClick={connectWallet} className={styles.button}>
          Connect Wallet
        </button>
      );
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModelRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
    }
  }, [walletConnected]);

  return (
    <div>
      <Head>
        <title>Whitelist Dapp</title>
        <meta name="description" content="Whitelist-Dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Welcome to Crypto Devs!</h1>
          <div className={styles.description}>
            {/* Using HTML Entities for the apostrophe */}
            It&#39;s an NFT collection for developers in Crypto.
          </div>
          <div className={styles.description}>
            {numOfWhitelisted} have already joined the Whitelist
          </div>
          {renderButton()}
        </div>
        <div>
          <img className={styles.image} src="./crypto-devs.svg" />
        </div>
      </div>

      <footer className={styles.footer}>
        Made with &#10084; by Crypto Devs
      </footer>
    </div>
  );
}
