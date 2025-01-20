require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const SEPOLIA_URL =
  "https://eth-sepolia.g.alchemy.com/v2/lyHO0Hr9f_bVcYoNkOdiJMHMd921rF03";
const SEPOLIA_PRIVATE_KEY =
  "b549dc25382647e05a77434584dea8d29ea6758953c943b6981022031e1824e5";

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
