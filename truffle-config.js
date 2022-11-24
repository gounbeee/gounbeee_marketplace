
const HDWalletProvider = require("@truffle/hdwallet-provider");
const keys = require("./keys.json");

module.exports = {
  contracts_build_directory: "./public/contracts",
  networks: {
    development: {
     host: "127.0.0.1",
     port: 7545,
     network_id: "*",
    },
    ropsten: {
      provider: () => 
        new HDWalletProvider(
          keys.PRIVATE_KEY,
          keys.INFURA_ROPSTEN_URL
        ),
      network_id: 3,
      gas: 5500000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200
    },
    goerli: {
      provider: () => 
        new HDWalletProvider(
          keys.PRIVATE_KEY,
          keys.INFURA_GOERLI_URL
        ),
      network_id: 5,
      gas: 5500000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200
    },
    mainnet: {
      provider: () => 
        new HDWalletProvider(
          keys.PRIVATE_KEY,
          keys.INFURA_MAINNET_URL
        ),
      network_id: 1,
      gas: 5500000,
      gasPrice: 20000000000,
      confirmations: 2,
      timeoutBlocks: 200
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
    }
  },
};
