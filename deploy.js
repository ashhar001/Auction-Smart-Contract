// hd wallet provider allows us to connect with outside api or node 
// also allows us to simultaneously unlock an account eg our metamask account
const HDWalletProvider = require('truffle-hdwallet-provider');

// here Web3 is a constructor
const Web3 = require('web3');

//for IMPORTING interface and bytecode from the compile.js file
const { interface , bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'floor wedding mobile input wire lounge lend matter camp mouse volcano onion',
    'https://rinkeby.infura.io/v3/cab673933349480f88b22661aa24684a'
);


// we can use web3 instance to interact with test network in anyway or shape or form we want
// use it to send ether or deploy contracts or update contracts
const web3 = new Web3(provider);    //here web3 is an object of Web3 module

const deploy = async () => {

    const accounts = await web3.eth.getAccounts();  //gets list of our metamask account

    console.log('Attempting to deploy from account', accounts[0]);

    // our abi/interface is coming to this file as json but we need to pass it in actual JS object
    const result = await new web3.eth.Contract(JSON.parse(interface))  //interface here is ABI
        //deploy statement contains the contract's bytecode and any initial arguments that we want to pass on to that contract
        .deploy({ data: bytecode})

        // we need to send this transaction to the network
        .send({ gas: '1000000' , from: accounts[0]});

    // console.log(interface);
    // to take note of the deployed contract
    console.log('Contract Deployed to', result.options.address);
};
deploy();
