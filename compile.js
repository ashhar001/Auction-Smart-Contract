//path module gives us path to the .sol file by using path 
// we are guaranteed to get cross platform compatibility

//Abi is the communication layer between the JS world and the solidity world
const path = require('path');
const fs = require('fs');   //file system module
const solc = require('solc');   //requiring solidity compiler module

const auctionPath = path.resolve(__dirname, 'contract', 'Auction.sol');

//to read raw source code from the contract
const source = fs.readFileSync(auctionPath,'utf8');//is a type of encoding used for the file


// compile statement for the solidity compiler
// console.log(solc.compile(source,1)); //1 indicates number of contracts we intend to compile


//exporting the object that has interface and the bytecode
// we care about the contracts property key value pair that contains actual bytecode
module.exports = solc.compile(source,1).contracts[':Auction'];