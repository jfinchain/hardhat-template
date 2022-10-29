/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require("@nomiclabs/hardhat-truffle5");
 require("@nomiclabs/hardhat-waffle");
 require("@nomiclabs/hardhat-etherscan");
 require("hardhat-contract-sizer");
 require("hardhat-deploy");
 require("hardhat-gas-reporter");
 require("@symblox/hardhat-abi-gen");
 
 require("dotenv").config();
 const pkey = process.env.PRIVATE_KEY || "your private key"
 module.exports = {
   defaultNetwork: "hardhat",
   solidity: {
     version: "0.8.9",
     settings: {
       optimizer: {
         enabled: true,
         runs: 200,
       },
     },
   },
   namedAccounts: {
     deployer: {
       default: 1,
       3501: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       3502: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
     },
     dev: {
       // Default to 1
       default: 1,
       3501: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       3502: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
     },
     collector: {
       default: 1,
       3501: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       3502: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
     },
   },
   networks: {
     mainnet: {
       url: process.env.MAINNET_RPC,
       chainId: 1,
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true,
       tags: ["production"],
     },
     jfin: {
       url: "https://rpc.jfinchain.com",
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true
     },    
     "jfin-testnet": {
       url: "https://rpc.testnet.jfinchain.com",
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true
     }    
  },
   contractSizer: {
     alphaSort: true,
     runOnCompile: true,
     disambiguatePaths: false,
   },
   etherscan: {
     apiKey: process.env.ETH_SCAN_API_KEY,
   },
   abiExporter: {
     path: "./abis",
     clear: true,
     flat: true,
     spacing: 2,
     pretty: true,
   },
 };
 