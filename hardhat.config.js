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
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/x2Q4q4RZiY6MUAGiLrUmLao13fYVEKMI",
      accounts: [
        "20b091a7132957f51ab51d02943cb559e80da6413a24bb83ba42e1bc57b2f19b",
      ],
    },
  },
};
