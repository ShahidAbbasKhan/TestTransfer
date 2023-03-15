const hre = require("hardhat");

async function main() {
  const anotherContract = await hre.ethers.getContractFactory(
    "anotherContract"
  );
  const TEST = await anotherContract.deploy(
    "0x11A020474E2877d57bCf03eFe40BC12D8beAd7b6",
    "0xc07B47B2c7D05C2bE259282579fA15AfB22329c7"
  );

  await TEST.deployed();

  console.log(`Contracts is deployed to ${TEST.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0xdD788021250cBf21405054df68411E9473FC66d9
