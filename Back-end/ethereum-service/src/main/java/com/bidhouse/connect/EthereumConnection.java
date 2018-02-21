package com.bidhouse.connect;

import java.io.IOException;
import java.math.BigInteger;
import java.security.InvalidAlgorithmParameterException;
import java.security.NoSuchAlgorithmException;
import java.security.NoSuchProviderException;
import java.util.concurrent.TimeUnit;

import org.bouncycastle.util.encoders.Hex;
import org.web3j.crypto.CipherException;
import org.web3j.crypto.Credentials;
import org.web3j.crypto.RawTransaction;
import org.web3j.crypto.TransactionEncoder;
import org.web3j.crypto.WalletUtils;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.core.DefaultBlockParameterName;
import org.web3j.protocol.core.methods.response.EthGetBalance;
import org.web3j.protocol.core.methods.response.EthGetTransactionCount;
import org.web3j.protocol.core.methods.response.EthSendTransaction;
import org.web3j.protocol.core.methods.response.Web3ClientVersion;
import org.web3j.protocol.ipc.UnixIpcService;

import lombok.extern.slf4j.Slf4j;
import rx.Subscription;

@Slf4j
public class EthereumConnection {
	public static void main(String[] args) throws IOException, NoSuchAlgorithmException, NoSuchProviderException,
			InvalidAlgorithmParameterException, CipherException {
		// Web3j web3j = Web3j.build(new HttpService()); // defaults to
		// http://localhost:8545/
		Web3j web3j = Web3j.build(
				new UnixIpcService("/home/baotoan/Development/O-HouseAuction/PrivateBlockchain/Testnet/geth.ipc"));
		Web3ClientVersion web3ClientVersion = web3j.web3ClientVersion().send();
		String clientVersion = web3ClientVersion.getWeb3ClientVersion();
		log.info("Client version: {}", clientVersion);
		
		// Create an wallet
		// String walletFileName = WalletUtils.generateFullNewWalletFile("baotoan123",
		// new File("/home/baotoan/"));
		// log.info("Wallet name: {}", walletFileName);
		// Get basic info of wallet
		// String[] fetchAddress = walletFileName.split("--");
		// String accountAddress = fetchAddress[fetchAddress.length -
		// 1].split("\\.")[0];
		// log.info("Account address: {}", accountAddress);

		// Login to account
		Credentials credentials1 = WalletUtils.loadCredentials("baotoan",
				"/home/baotoan/Development/O-HouseAuction/PrivateBlockchain/Testnet/keystore/UTC--2018-02-04T16-11-29.278310231Z--35a3227d74222259ddd90bc555d7cb7cc5e64d60");
		String accountAddress1 = credentials1.getAddress();

		Credentials credentials2 = WalletUtils.loadCredentials("baotoan2",
				"/home/baotoan/Development/O-HouseAuction/PrivateBlockchain/Testnet/keystore/UTC--2018-02-05T15-05-42.408596898Z--647ab99751d57803066778240a3f355fe8748c8a");
		String accountAddress2 = credentials2.getAddress();

		try {
			// Check balance
			EthGetBalance ethGetBalance1 = web3j.ethGetBalance(accountAddress1, DefaultBlockParameterName.LATEST)
					.sendAsync().get();
			BigInteger wei1 = ethGetBalance1.getBalance();
			log.debug("Balance 1: {}", wei1);

			// Check balance
			EthGetBalance ethGetBalance2 = web3j.ethGetBalance(accountAddress2, DefaultBlockParameterName.LATEST)
					.sendAsync().get();
			BigInteger wei2 = ethGetBalance2.getBalance();
			log.debug("Balance 2: {}", wei2);

			EthGetTransactionCount ethGetTransactionCount = web3j
					.ethGetTransactionCount(accountAddress1, DefaultBlockParameterName.LATEST).sendAsync().get();
			BigInteger nonce = ethGetTransactionCount.getTransactionCount();
			log.debug("Count: {}", nonce);
			
			 BigInteger gasPrice = BigInteger.valueOf(10000000); // 0.0000000000047 ETHER
			 BigInteger gasLimit = BigInteger.valueOf(3000000); // 0.0000000000031 ETHER
			 BigInteger totalSupply = BigInteger.valueOf(1000000);

//			TransactionReceipt transactionReceipt = Transfer
//					.sendFunds(web3j, credentials1, accountAddress2, 
//							BigDecimal.valueOf(1), Convert.Unit.ETHER)
//					.send();
			RawTransaction rawTransaction  = RawTransaction.createEtherTransaction(
		             nonce, gasPrice, gasLimit, accountAddress2, totalSupply);
			// Sign & send our transaction
			byte[] signedMessage = TransactionEncoder.signMessage(rawTransaction, credentials1);
			log.debug("SignedMessage: {}", signedMessage);
			String hexValue = Hex.toHexString(signedMessage);
			log.debug("Hex value: {}", hexValue);
			EthSendTransaction ethSendTransaction = web3j.ethSendRawTransaction("0x" + hexValue).send();
			
			log.debug("Transaction status: {}", ethSendTransaction.getRawResponse());

//			log.debug("Transaction status: {}", transactionReceipt.getStatus());

			// Check balance
			ethGetBalance1 = web3j.ethGetBalance(accountAddress1, DefaultBlockParameterName.LATEST)
					.sendAsync().get();
			wei1 = ethGetBalance1.getBalance();
			log.debug("Balance 1: {}", wei1);

			// Check balance
			ethGetBalance2 = web3j.ethGetBalance(accountAddress2, DefaultBlockParameterName.LATEST)
					.sendAsync().get();
			wei2 = ethGetBalance2.getBalance();
			log.debug("Balance 2: {}", wei2);

		} catch (Exception e) {
			// Do nothing
		}

		// Deploy and transfer contract
		// minimum gas required for transaction is 21000
		// BigInteger gasPrice = BigInteger.valueOf(10000000); // 0.0000000000047 ETHER
		// BigInteger gasLimit = BigInteger.valueOf(3000000); // 0.0000000000031 ETHER
		// BigInteger totalSupply = BigInteger.valueOf(1000000);
		// String tokenName = new String(accountAddress);
		// BigInteger decimalUnits = BigInteger.valueOf(8);
		// String tokenSymbol = new String("baotoan");
		// try {
		// FixedSupplyToken.deploy(web3j, credentials, gasPrice, gasLimit,
		// totalSupply, tokenName, decimalUnits, tokenSymbol);
		// } catch (Exception e) {
		// e.printStackTrace();
		// }
	}

}
