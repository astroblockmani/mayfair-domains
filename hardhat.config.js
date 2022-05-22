require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/yijqU_5HZzqTp_OJNrpOEM5BjXg1O_rA",
      accounts: [
        "20b091a7132957f51ab51d02943cb559e80da6413a24bb83ba42e1bc57b2f19b",
      ],
    },
  },
};
