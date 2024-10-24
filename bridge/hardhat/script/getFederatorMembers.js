// How to run the script: npx hardhat run ./hardhat/script/getFederatorMembers.js --network sepolia
const hre = require("hardhat");
const abi = require('../../../federator/src/contracts/HathorFederation.json')

async function main() {
  const {deployments} = hre;

  const federation = new web3.eth.Contract(abi, '0x88AdFfb959aE92cAEC42D7a9F4bFBD13318c73Db');

  const result = await federation.get.call({ from: MultiSigWallet.address});
  console.log("Method call result", result);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
