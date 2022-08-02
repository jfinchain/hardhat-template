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
       17: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       35: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       97: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       3501: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       3502: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       56: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       96: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       80001: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       137: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       555: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
 
     },
     dev: {
       // Default to 1
       default: 1,
       // dev address mainnet
       // 1: "",
       17: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       35: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       56: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       97: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       3501: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       3502: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       96: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       80001: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       137: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       555: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
     },
     collector: {
       default: 1,
       17: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       35: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       97: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       3501: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       3502: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
       56: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       96: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       80001: "0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4",
       137: "0xBC0EE23C8A355f051a9309bce676F818d35743D1",
 
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
     meta: {
       url: process.env.META_RPC,
       chainId: 17,
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true,
       tags: ["production"],
     },
     bsc: {
       url: process.env.BSC_RPC,
       chainId: 56,
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true,
       tags: ["production"],
     },
     matic: {
       url: "https://polygon-rpc.com/",
       chainId: 137,
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true
     },
     "bsc-testnet": {
       url: process.env.BSC_TESTNET_RPC,
       chainId: 97,
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true,
     },
     mumbai: {
       url: "https://rpc-mumbai.maticvigil.com",
       chainId: 80001,
       accounts: [`0x${pkey}`],
       live: true,
       saveDeployments: true
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
     },    
     vela: {
       url: "https://rpc.velaverse.io/",
       chainId: 555,
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
 