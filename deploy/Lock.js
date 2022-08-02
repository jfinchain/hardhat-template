module.exports = async ({ getNamedAccounts, deployments, network }) => {
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  
    const lockedAmount = ethers.utils.parseEther("1");
    await deploy("Lock", {
      args: [lockedAmount],
      from: deployer,
      log: true,
    });
  };
  module.exports.tags = ["Lock"];
  // module.exports.dependencies = ["MockTokens"];
  