const hre = require("hardhat");

async function main() {
  const test = await hre.ethers.getContractFactory("test");
  const TEST = await test.deploy("0x1534e9caB6B2D4D384453183Ea4d2e2fEAD205Fbs");

  await TEST.deployed();

  console.log(`Contracts is deployed to ${TEST.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x5693722a9e3B2e4783E0Fe857508A99083d690b2
