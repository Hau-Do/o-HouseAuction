package com.bidhouse.connect;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;

import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.methods.response.TransactionReceipt;
import org.web3j.protocol.core.methods.response.Web3ClientVersion;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.Transfer;
import org.web3j.utils.Convert;

import com.bidhouse.models.FixedSupplyToken;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class EthereumConnection {
	public static void main(String[] args) throws IOException, NoSuchAlgorithmException, NoSuchProviderException,
			InvalidAlgorithmParameterException, CipherException {
		Web3j web3j = Web3j.build(new HttpService()); // defaults to http://localhost:8545/
		Web3ClientVersion web3ClientVersion = web3j.web3ClientVersion().send();
		String clientVersion = web3ClientVersion.getWeb3ClientVersion();
		log.info("Client version: {}", clientVersion);

		// Create an wallet
		String walletFileName = WalletUtils.generateFullNewWalletFile("baotoan123", new File("/home/baotoan/"));
		log.info("Wallet name: {}", walletFileName);
		// Get basic info of wallet
		String[] fetchAddress = walletFileName.split("--");
		String accountAddress = fetchAddress[fetchAddress.length - 1].split("\\.")[0];
		log.info("Account address: {}", accountAddress);

		// Create smart contract
		Credentials credentials = WalletUtils.loadCredentials("baotoan123", "/home/baotoan/" + walletFileName);

		// Funds
		try {
			TransactionReceipt transferReceipt = Transfer
					.sendFunds(web3j, credentials, accountAddress, BigDecimal.ONE, Convert.Unit.WEI) // 1 wei = 10^-18
					.send();
			log.info("Transaction complete, view it at https://rinkeby.etherscan.io/tx/"
	                + transferReceipt.getTransactionHash());
		} catch (Exception e1) {
			e1.printStackTrace();
		}

		// Deploy and transfer contract
		BigInteger gasPrice = BigInteger.valueOf(4700000); // 0.0000000000047 ETHER
		BigInteger gasLimit = BigInteger.valueOf(3100000); // 0.0000000000031 ETHER
		BigInteger totalSupply = BigInteger.valueOf(1000000);
		String tokenName = new String(accountAddress);
		BigInteger decimalUnits = BigInteger.valueOf(8);
		String tokenSymbol = new String("baotoan123");
		try {
			FixedSupplyToken tokenFuture = FixedSupplyToken
					.deploy(web3j, credentials, gasPrice, gasLimit, totalSupply, tokenName, decimalUnits, tokenSymbol)
					.send();
			String contractAddress = tokenFuture.getContractAddress();
			log.info(contractAddress);
		} catch (Exception e) {
			e.printStackTrace();
		}

	}
}
