const hre = require("hardhat");

async function main() {
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const mytoken = await MyToken.deploy();

  await mytoken.deployed();

  console.log(`Contracts is deployed to ${mytoken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
//0x1534e9caB6B2D4D384453183Ea4d2e2fEAD205Fb
