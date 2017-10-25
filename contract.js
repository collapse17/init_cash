const ABI =[ { "constant": true, "inputs": [], "name": "getData", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "helloString", "type": "string" } ], "name": "setData", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x06a8a4061a0042a5356dfe445a63d3ede2c25984" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" } ];
const adress = "0xe5bF4fcd8163d698240Ae9Da103d93224b1E9D31";
module.exports = {
ABI,
adress,
};
