module.exports = async ({ getNamedAccounts, deployments, network }) => {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  await deploy("JFA", {
    from: deployer,
    args: ["0x4A4cF4741a96D8e0123a490cA720d84fD9b15bc4"],    
    log: true,
    deterministicDeployment: false   
  });
};
module.exports.tags = ["JFA"];
