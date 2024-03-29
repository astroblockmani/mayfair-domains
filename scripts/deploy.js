const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  const domainContract = await domainContractFactory.deploy("mayfair");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  let txn = await domainContract.register("mani");
  await txn.wait();
  console.log("Minted domain mani.mayfair");

  txn = await domainContract.setRecord("mani", "Mayfair domain set!");
  await txn.wait();
  console.log("Set record for mani.mayfair");

  const address = await domainContract.getAddress("mani");
  console.log("Owner of domain 'mani':", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
