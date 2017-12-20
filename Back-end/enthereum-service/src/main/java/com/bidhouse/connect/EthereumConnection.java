package com.bidhouse.connect;

import java.io.File;
import java.io.IOException;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;

import org.web3j.crypto.CipherException;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.Web3ClientVersion;
import org.web3j.protocol.http.HttpService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class EthereumConnection {
	public static void main(String[] args) throws IOException, NoSuchAlgorithmException, NoSuchProviderException, InvalidAlgorithmParameterException, CipherException {
		Web3j web3 = Web3j.build(new HttpService());  // defaults to http://localhost:8545/
		Web3ClientVersion web3ClientVersion = web3.web3ClientVersion().send();
		String clientVersion = web3ClientVersion.getWeb3ClientVersion();
		log.info("Client version: {}", clientVersion);
		
		// Create an account
		String walletFileName = WalletUtils.generateFullNewWalletFile("baotoan123", new File("/home/baotoan/"));
		log.info("Wallet name: {}", walletFileName);
		// Get basic info of wallet
		String[] fetchAddress=walletFileName.split("--");
		String accountAddress = fetchAddress[fetchAddress.length-1].split("\\.")[0];
		log.info("Account address: {}", accountAddress);
		
		
		
	}
}
