 require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;
const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'poet also swing shoulder soft move message split junk heart planet door'
module.exports = {
  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "*",       // Any network (default: none)
    },
	 //const { INFURA_API_KEY, MNEMONIC } = process.env;
	sepolia: {
		provider: () => new HDWalletProvider(MNEMONIC, 'https://eth-sepolia.g.alchemy.com/v2/7W0G6tOPYpchgVcOOaX1FTDs3vaHqqU2'),
		network_id: "11155111",
		gas: 4465030,
		},
  },

  // Set default mocha options here, use special reporters, etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.6",      // Fetch exact version from solc-bin (default: truffle's version)
    }
  },
};
