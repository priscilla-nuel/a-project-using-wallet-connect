//SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; //declaring the solidity version

//shortcut to importing avother contract into a contract
import {SimpleStorage} from "./SimpleStorage.sol";

contract SimpleFactory { //declaring and naming a contract 

SimpleStorage[] public listofSimpleStorageContracts; // adding '[]' makes it an aray

function createSimpleSorage() public { //declaring and naming a fuction, calling it puvlic
    // creating a new contract
    SimpleStorage newSimpleStorageContract = new SimpleStorage();
    //storing the deployed contracts  
    listofSimpleStorageContracts.push(newSimpleStorageContract);
    }

function sfStore(uint256 _simpleStorageIndex, uint256 _value) public {
    SimpleStorage mySimpleStorage = listofSimpleStorageContracts[_simpleStorageIndex];
    mySimpleStorage.store(_value);}

function sfGet(uint256 _simpleStorageIndex) public view returns (uint256) {
    SimpleStorage mySimpleStorage = listofSimpleStorageContracts[_simpleStorageIndex];
    return mySimpleStorage.retrieve();
}

}

