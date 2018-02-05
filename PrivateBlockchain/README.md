- Create genesis file that is a first block. In it contains address and banlance.
- In order to init genesis, execute follow command: geth --identity "MyTestNetNode" --nodiscover --networkid 1999 --datadir ./Testnet  init ./CustomGenesis.json

===========
Create an account in ethereum with private blockchain:
geth account new --datadir ./Testnet
That generated a new json file, that contains id address (Generated in keystore). This step need input a password. This keeps it separated from the real testnet.

Update address in CustomGenesis.json file to your recent address that just created above.

===========
To check balance, use geth console to do that:
geth --identity "MyTestNetNode" --datadir ./Testnet --nodiscover --networkid 1999 console
Then:
web3.fromWei(eth.getBalance(eth.accounts[0]), “ether”)

===========
Unlock an account
personal.unlockAccount(eth.coinbase, 'your account password in quotes', 0)

===========
To see a list of pending transactions
eth.pendingTransactions

===========
Start geth from datadir
geth --datadir ./Testnet
